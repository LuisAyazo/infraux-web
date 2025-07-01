'use client';

import React, { useEffect, useState } from 'react';
import { FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiKubernetes, SiDocker, SiTerraform } from 'react-icons/si';
import { 
  ServerIcon, 
  CloudIcon, 
  CircleStackIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CubeIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

interface Node {
  id: string;
  x: number;
  y: number;
  icon: React.ElementType;
  label: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  provider?: 'aws' | 'gcp' | 'azure';
}

interface Connection {
  from: string;
  to: string;
  animated?: boolean;
  dashed?: boolean;
}

export default function CloudNodesVisualization() {
  const [mounted, setMounted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Definir nodos con posiciones mejoradas para evitar superposiciones
  const nodes: Node[] = [
    // AWS Services (lado izquierdo)
    { id: 'ec2', x: 15, y: 25, icon: ServerIcon, label: 'EC2', color: 'from-orange-400 to-orange-600', size: 'medium', provider: 'aws' },
    { id: 's3', x: 30, y: 15, icon: CircleStackIcon, label: 'S3', color: 'from-orange-400 to-orange-600', size: 'small', provider: 'aws' },
    { id: 'rds', x: 20, y: 45, icon: CircleStackIcon, label: 'RDS', color: 'from-orange-400 to-orange-600', size: 'medium', provider: 'aws' },
    { id: 'lambda', x: 10, y: 65, icon: CommandLineIcon, label: 'Lambda', color: 'from-orange-400 to-orange-600', size: 'small', provider: 'aws' },
    
    // GCP Services (lado derecho)
    { id: 'gce', x: 75, y: 20, icon: ServerIcon, label: 'Compute', color: 'from-blue-400 to-blue-600', size: 'medium', provider: 'gcp' },
    { id: 'gcs', x: 85, y: 35, icon: CircleStackIcon, label: 'Storage', color: 'from-blue-400 to-blue-600', size: 'small', provider: 'gcp' },
    { id: 'bigquery', x: 80, y: 55, icon: CircleStackIcon, label: 'BigQuery', color: 'from-blue-400 to-blue-600', size: 'medium', provider: 'gcp' },
    
    // Azure Services (arriba)
    { id: 'vm', x: 50, y: 10, icon: ServerIcon, label: 'VMs', color: 'from-blue-500 to-blue-700', size: 'small', provider: 'azure' },
    { id: 'cosmos', x: 65, y: 75, icon: CircleStackIcon, label: 'Cosmos DB', color: 'from-blue-500 to-blue-700', size: 'medium', provider: 'azure' },
    
    // Central Node - InfraUX
    { id: 'infraux', x: 45, y: 45, icon: CubeIcon, label: 'InfraUX', color: 'from-emerald-500 to-teal-600', size: 'large' },
    
    // Tools (abajo, bien espaciados)
    { id: 'k8s', x: 25, y: 85, icon: SiKubernetes, label: 'K8s', color: 'from-cyan-400 to-cyan-600', size: 'small' },
    { id: 'docker', x: 45, y: 90, icon: SiDocker, label: 'Docker', color: 'from-cyan-400 to-cyan-600', size: 'small' },
    { id: 'terraform', x: 90, y: 75, icon: SiTerraform, label: 'Terraform', color: 'from-purple-400 to-purple-600', size: 'small' },
  ];

  // Definir conexiones mejoradas con más relaciones
  const connections: Connection[] = [
    // AWS connections to InfraUX
    { from: 'ec2', to: 'infraux', animated: true },
    { from: 's3', to: 'infraux' },
    { from: 'rds', to: 'infraux' },
    { from: 'lambda', to: 'infraux', dashed: true },
    
    // GCP connections to InfraUX
    { from: 'gce', to: 'infraux', animated: true },
    { from: 'gcs', to: 'infraux' },
    { from: 'bigquery', to: 'infraux' },
    
    // Azure connections to InfraUX
    { from: 'vm', to: 'infraux' },
    { from: 'cosmos', to: 'infraux', dashed: true },
    
    // Tools connections FROM InfraUX
    { from: 'infraux', to: 'k8s', animated: true },
    { from: 'infraux', to: 'docker', animated: true },
    { from: 'infraux', to: 'terraform', animated: true },
    
    // Inter-service connections
    { from: 'ec2', to: 's3', dashed: true },
    { from: 'gce', to: 'gcs', dashed: true },
    { from: 'docker', to: 'k8s', dashed: true },
    { from: 'terraform', to: 'docker' },
    { from: 'lambda', to: 's3', dashed: true },
    { from: 'bigquery', to: 'gcs', dashed: true },
  ];

  const getNodePosition = (node: Node) => ({
    left: `${node.x}%`,
    top: `${node.y}%`,
  });

  const getNodeSize = (size: string) => {
    switch (size) {
      case 'small': return 'w-12 h-12 sm:w-14 sm:h-14';
      case 'medium': return 'w-14 h-14 sm:w-16 sm:h-16';
      case 'large': return 'w-20 h-20 sm:w-24 sm:h-24';
      default: return 'w-14 h-14';
    }
  };

  const getIconSize = (size: string) => {
    switch (size) {
      case 'small': return 'w-6 h-6 sm:w-7 sm:h-7';
      case 'medium': return 'w-7 h-7 sm:w-8 sm:h-8';
      case 'large': return 'w-10 h-10 sm:w-12 sm:h-12';
      default: return 'w-7 h-7';
    }
  };

  const renderConnection = (connection: Connection, index: number) => {
    const fromNode = nodes.find(n => n.id === connection.from);
    const toNode = nodes.find(n => n.id === connection.to);
    
    if (!fromNode || !toNode) return null;

    const x1 = fromNode.x;
    const y1 = fromNode.y;
    const x2 = toNode.x;
    const y2 = toNode.y;
    
    // Calcular el ángulo para la flecha
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    return (
      <svg
        key={`connection-${index}`}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          {/* Gradiente mejorado con múltiples colores */}
          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="rgb(94, 234, 212)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(110, 231, 183)" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Filtro de brillo para las conexiones */}
          <filter id={`glow-${index}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Definir marcador de flecha mucho más pequeño */}
          <marker
            id={`arrow-${index}`}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path
              d="M 0 0 L 6 3 L 0 6 L 1.5 3 Z"
              fill={connection.animated ? "rgb(52, 211, 153)" : "rgb(94, 234, 212)"}
              opacity="0.9"
            />
          </marker>
        </defs>
        
        {/* Línea principal con efecto glow y flecha */}
        <line
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
          stroke={`url(#gradient-${index})`}
          strokeWidth={connection.animated ? "3" : "2"}
          strokeDasharray={connection.dashed ? "8,4" : undefined}
          className={connection.animated ? 'animate-pulse' : ''}
          opacity={hoveredNode && (hoveredNode === connection.from || hoveredNode === connection.to) ? 1 : 0.5}
          filter={`url(#glow-${index})`}
          strokeLinecap="round"
          markerEnd={`url(#arrow-${index})`}
        />
        
        {/* Partículas animadas mejoradas */}
        {connection.animated && (
          <>
            {/* Partícula principal */}
            <circle r="4" fill="rgb(52, 211, 153)" opacity="1">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path={`M ${x1},${y1} L ${x2},${y2}`}
              />
              <animate
                attributeName="r"
                values="4;6;4"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.6;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Estela de la partícula */}
            <circle r="2" fill="rgb(94, 234, 212)" opacity="0.6">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path={`M ${x1},${y1} L ${x2},${y2}`}
                begin="0.1s"
              />
            </circle>
            
            <circle r="1" fill="rgb(110, 231, 183)" opacity="0.4">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path={`M ${x1},${y1} L ${x2},${y2}`}
                begin="0.2s"
              />
            </circle>
          </>
        )}
      </svg>
    );
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden">
      {/* Render connections */}
      {connections.map((connection, index) => renderConnection(connection, index))}
      
      {/* Render nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            hoveredNode === node.id ? 'scale-110 z-20' : 'hover:scale-105'
          }`}
          style={getNodePosition(node)}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          {/* Node container */}
          <div className={`relative ${getNodeSize(node.size)} group`}>
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${node.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
            
            {/* Node background con colores por proveedor */}
            <div className={`relative w-full h-full ${
              node.id === 'infraux'
                ? 'bg-gradient-to-br from-emerald-500/30 via-emerald-600/20 to-teal-600/30 border-2 border-emerald-400 shadow-emerald-500/50'
                : node.provider === 'aws'
                ? 'bg-gradient-to-br from-orange-500/20 via-orange-600/15 to-orange-700/20 border-2 border-orange-400/60 shadow-orange-500/30'
                : node.provider === 'gcp'
                ? 'bg-gradient-to-br from-blue-500/20 via-blue-600/15 to-blue-700/20 border-2 border-blue-400/60 shadow-blue-500/30'
                : node.provider === 'azure'
                ? 'bg-gradient-to-br from-blue-600/20 via-blue-700/15 to-blue-800/20 border-2 border-blue-500/60 shadow-blue-600/30'
                : 'bg-gradient-to-br from-slate-600/20 via-slate-700/15 to-slate-800/20 border-2 border-slate-400/60 shadow-slate-500/30'
            } backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
              
              {/* Efecto de brillo interno más sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
              
              
              {/* Icono simplificado con mejor visibilidad */}
              <node.icon className={`${getIconSize(node.size)} ${
                node.id === 'infraux' ? 'text-white' : 'text-white'
              } relative z-10 transition-all duration-300`} />
              
              {/* Efecto de hover - ondas */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-white/5 animate-ping" />
              </div>
            </div>
            
            {/* Label */}
            <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap ${
              node.id === 'infraux' ? 'text-emerald-300 font-bold' : 'text-slate-300'
            } text-xs sm:text-sm font-medium`}>
              {node.label}
            </div>
            
            {/* Pulse effect for InfraUX */}
            {node.id === 'infraux' && (
              <div className="absolute inset-0 rounded-2xl animate-ping bg-emerald-400 opacity-20" />
            )}
          </div>
        </div>
      ))}
      
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-teal-400 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-70" />
      </div>
    </div>
  );
}