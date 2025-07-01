import { BlogPost } from '../types';
import { authors } from '../authors';

export const construyendoEditorVisual: BlogPost = {
  id: 'construyendo-editor-visual-react-flow',
  title: 'Construyendo un Editor Visual con React Flow',
  excerpt: 'Un vistazo técnico a cómo construimos nuestro editor drag-and-drop, los desafíos de la customización de nodos y la lógica de conexiones.',
  content: `
## El Corazón de InfraUX: Nuestro Editor Visual

Si hay una característica que define a InfraUX, es nuestro editor visual. Construir un editor drag-and-drop que sea intuitivo, performante y poderoso ha sido uno de nuestros mayores desafíos técnicos. Esta es la historia de cómo lo logramos.

### ¿Por Qué React Flow?

Evaluamos múltiples librerías para construir nuestro editor:

| Librería | Pros | Contras | Decisión |
|----------|------|---------|----------|
| **D3.js** | Máximo control | Requiere construir todo desde cero | ❌ |
| **Cytoscape.js** | Potente para grafos | Orientado a grafos científicos | ❌ |
| **JointJS** | Buenas características | Licencia comercial costosa | ❌ |
| **React Flow** | Moderno, bien mantenido | Curva de aprendizaje | ✅ |

React Flow ganó por su balance entre flexibilidad y facilidad de uso, además de una comunidad activa y excelente documentación.

### Arquitectura del Editor

Nuestro editor está compuesto por varias capas:

\`\`\`typescript
// components/Editor/index.tsx
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider
} from 'reactflow';

export function InfraUXEditor() {
  return (
    <ReactFlowProvider>
      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          connectionLineComponent={CustomConnectionLine}
          onDrop={onDrop}
          onDragOver={onDragOver}
          snapToGrid
          snapGrid={[15, 15]}
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls />
          <MiniMap />
          <Panel position="top-left">
            <Toolbar />
          </Panel>
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
\`\`\`

### Customización de Nodos

Cada servicio cloud tiene su propio nodo customizado con propiedades específicas:

\`\`\`typescript
// nodes/EC2Node.tsx
export function EC2Node({ data, selected }: NodeProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className={\`node-wrapper \${selected ? 'selected' : ''}\`}>
      <Handle type="target" position={Position.Top} />
      
      <div className="node-header">
        <EC2Icon className="w-6 h-6" />
        <span>EC2 Instance</span>
      </div>
      
      <div className="node-body">
        {isEditing ? (
          <InstanceTypeSelector
            value={data.instanceType}
            onChange={(type) => updateNodeData({ instanceType: type })}
          />
        ) : (
          <div onClick={() => setIsEditing(true)}>
            {data.instanceType || 't3.micro'}
          </div>
        )}
        
        <div className="node-stats">
          <span>{data.vcpus || 2} vCPUs</span>
          <span>{data.memory || 1} GB RAM</span>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

// Registro de tipos de nodos
const nodeTypes = {
  ec2Instance: EC2Node,
  rdsDatabase: RDSNode,
  s3Bucket: S3Node,
  lambda: LambdaNode,
  vpc: VPCNode,
  // ... más de 50 tipos de nodos
};
\`\`\`

### Sistema de Drag & Drop

Implementamos un sistema de drag & drop intuitivo desde la paleta de componentes:

\`\`\`typescript
// components/ComponentPalette.tsx
export function ComponentPalette() {
  const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  
  return (
    <div className="component-palette">
      {Object.entries(AWS_SERVICES).map(([key, service]) => (
        <div
          key={key}
          className="palette-item"
          draggable
          onDragStart={(e) => onDragStart(e, service.nodeType)}
        >
          <service.icon className="w-8 h-8" />
          <span>{service.name}</span>
        </div>
      ))}
    </div>
  );
}
\`\`\`

### Validación de Conexiones en Tiempo Real

No todas las conexiones son válidas. Implementamos reglas complejas para validar conexiones:

\`\`\`typescript
// utils/connectionRules.ts
export const connectionRules = {
  ec2Instance: {
    canConnectTo: ['securityGroup', 'elasticIp', 'loadBalancer', 'vpc'],
    canReceiveFrom: ['loadBalancer', 'autoScalingGroup'],
  },
  rdsDatabase: {
    canConnectTo: ['securityGroup', 'vpc', 'subnetGroup'],
    canReceiveFrom: ['ec2Instance', 'lambda'],
    validation: (source, target) => {
      // RDS debe estar en la misma VPC que EC2
      return source.data.vpcId === target.data.vpcId;
    }
  },
  // ... más reglas
};

// Hook para validar conexiones
const isValidConnection = useCallback((connection: Connection) => {
  const sourceNode = nodes.find(n => n.id === connection.source);
  const targetNode = nodes.find(n => n.id === connection.target);
  
  if (!sourceNode || !targetNode) return false;
  
  const rules = connectionRules[sourceNode.type];
  if (!rules) return false;
  
  // Verificar si el tipo de target es permitido
  if (!rules.canConnectTo.includes(targetNode.type)) {
    showError(\`\${sourceNode.type} no puede conectarse a \${targetNode.type}\`);
    return false;
  }
  
  // Validación adicional si existe
  if (rules.validation) {
    return rules.validation(sourceNode, targetNode);
  }
  
  return true;
}, [nodes]);
\`\`\`

### Optimizaciones de Performance

Con diagramas complejos (100+ nodos), el performance es crítico:

#### 1. Virtualización de Nodos

\`\`\`typescript
// Solo renderizar nodos visibles
const visibleNodes = useMemo(() => {
  return nodes.filter(node => {
    const { x, y } = node.position;
    return (
      x > viewport.x - 200 &&
      x < viewport.x + viewport.width + 200 &&
      y > viewport.y - 200 &&
      y < viewport.y + viewport.height + 200
    );
  });
}, [nodes, viewport]);
\`\`\`

#### 2. Debouncing de Updates

\`\`\`typescript
// Debounce actualizaciones para evitar re-renders excesivos
const debouncedUpdateNode = useMemo(
  () => debounce((nodeId: string, data: any) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
      )
    );
  }, 100),
  []
);
\`\`\`

#### 3. Memoización Agresiva

\`\`\`typescript
// Memoizar componentes pesados
const MemoizedNode = memo(({ data, selected }) => {
  return <CustomNode data={data} selected={selected} />;
}, (prevProps, nextProps) => {
  // Solo re-render si cambian propiedades relevantes
  return (
    prevProps.selected === nextProps.selected &&
    prevProps.data.lastModified === nextProps.data.lastModified
  );
});
\`\`\`

### Features Avanzadas

#### 1. Auto-Layout

Implementamos auto-layout usando dagre para organizar automáticamente los nodos:

\`\`\`typescript
import dagre from 'dagre';

export function autoLayout(nodes: Node[], edges: Edge[]) {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'TB', nodesep: 100, ranksep: 100 });
  
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 180, height: 100 });
  });
  
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });
  
  dagre.layout(dagreGraph);
  
  return nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - 90,
        y: nodeWithPosition.y - 50,
      },
    };
  });
}
\`\`\`

#### 2. Undo/Redo

Sistema completo de undo/redo para todas las acciones:

\`\`\`typescript
const { undo, redo, canUndo, canRedo } = useUndoRedo({
  nodes,
  edges,
  maxHistorySize: 50,
});

// Keyboard shortcuts
useHotkeys('cmd+z', () => canUndo && undo());
useHotkeys('cmd+shift+z', () => canRedo && redo());
\`\`\`

### Lecciones Aprendidas

<div class="info-box">
💡 **La UX es todo:** Invertimos mucho tiempo en hacer el editor intuitivo. Pequeños detalles como el snap-to-grid y el feedback visual hacen una gran diferencia.
</div>

<div class="warning-box">
⚠️ **Performance desde el día 1:** Es más fácil optimizar desde el inicio que después. Considera virtualización y memoización desde el principio.
</div>

<div class="success-box">
✅ **Feedback visual constante:** Los usuarios necesitan saber qué está pasando siempre. Indicadores de estado, tooltips y animaciones suaves son esenciales.
</div>

### Métricas de Performance

| Métrica | Valor | Objetivo |
|---------|-------|----------|
| **Tiempo de renderizado inicial** | 120ms | < 200ms |
| **FPS durante drag** | 58 fps | > 30 fps |
| **Memoria con 100 nodos** | 45MB | < 100MB |
| **Tiempo de auto-layout** | 230ms | < 500ms |

### El Futuro del Editor

Estamos trabajando en features aún más avanzadas:

- **AI-Assisted Design:** Sugerencias inteligentes mientras diseñas
- **3D View:** Visualización tridimensional de la arquitectura
- **Time Travel:** Ver cómo evolucionó el diagrama en el tiempo
- **Smart Templates:** Templates que se adaptan a tus necesidades

Construir este editor ha sido un viaje increíble. Cada día aprendemos algo nuevo de nuestros usuarios y mejoramos la experiencia. El editor visual no es solo una feature de InfraUX, es la esencia de lo que somos: hacer la infraestructura visual, intuitiva y colaborativa.
`,
  date: '2024-11-21',
  week: 3,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.luis,
  tags: ['reactflow', 'frontend', 'editor', 'dragdrop'],
  readTime: '10 min',
  featured: true,
};