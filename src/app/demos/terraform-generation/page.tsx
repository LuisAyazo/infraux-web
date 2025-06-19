'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { useState } from 'react';
import { 
  PlayIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CommandLineIcon,
  CloudIcon,
  ServerIcon,
  CircleStackIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  CodeBracketIcon,
  SparklesIcon,
  CpuChipIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const codeExamples = [
  {
    name: 'VPC y Redes',
    icon: CloudIcon,
    diagram: 'VPC con subredes públicas y privadas',
    code: `resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "main-vpc"
    Environment = "production"
    ManagedBy   = "InfraUX"
  }
}

resource "aws_subnet" "public" {
  count                   = 2
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.\${count.index + 1}.0/24"
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-\${count.index + 1}"
    Type = "public"
  }
}

resource "aws_subnet" "private" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.\${count.index + 10}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "private-subnet-\${count.index + 1}"
    Type = "private"
  }
}`
  },
  {
    name: 'Servidor Web con ALB',
    icon: ServerIcon,
    diagram: 'EC2 con Application Load Balancer',
    code: `resource "aws_lb" "web" {
  name               = "web-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = aws_subnet.public[*].id

  enable_deletion_protection = false
  enable_http2              = true

  tags = {
    Name        = "web-alb"
    Environment = "production"
  }
}

resource "aws_launch_template" "web" {
  name_prefix   = "web-server-"
  image_id      = data.aws_ami.amazon_linux_2.id
  instance_type = "t3.medium"

  vpc_security_group_ids = [aws_security_group.web.id]

  user_data = base64encode(<<-EOF
    #!/bin/bash
    yum update -y
    yum install -y httpd
    systemctl start httpd
    systemctl enable httpd
    echo "<h1>Hello from InfraUX!</h1>" > /var/www/html/index.html
  EOF
  )

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "web-server"
      Type = "web"
    }
  }
}`
  },
  {
    name: 'Base de Datos RDS',
    icon: CircleStackIcon,
    diagram: 'RDS Multi-AZ con réplicas de lectura',
    code: `resource "aws_db_instance" "main" {
  identifier     = "main-database"
  engine         = "postgres"
  engine_version = "14.7"
  instance_class = "db.t3.medium"

  allocated_storage     = 100
  max_allocated_storage = 1000
  storage_encrypted     = true
  storage_type          = "gp3"

  db_name  = "myapp"
  username = "dbadmin"
  password = random_password.db.result

  vpc_security_group_ids = [aws_security_group.database.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name

  backup_retention_period = 30
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"

  multi_az               = true
  deletion_protection    = true
  skip_final_snapshot    = false
  final_snapshot_identifier = "main-database-final-snapshot-\${formatdate("YYYY-MM-DD-hhmm", timestamp())}"

  enabled_cloudwatch_logs_exports = ["postgresql"]

  tags = {
    Name        = "main-database"
    Environment = "production"
  }
}`
  },
  {
    name: 'Función Lambda',
    icon: CpuChipIcon,
    diagram: 'Lambda con API Gateway',
    code: `resource "aws_lambda_function" "api" {
  filename         = "lambda_function.zip"
  function_name    = "api-handler"
  role            = aws_iam_role.lambda.arn
  handler         = "index.handler"
  source_code_hash = filebase64sha256("lambda_function.zip")
  runtime         = "nodejs18.x"
  timeout         = 30
  memory_size     = 512

  environment {
    variables = {
      DATABASE_URL = aws_db_instance.main.endpoint
      ENVIRONMENT  = "production"
    }
  }

  vpc_config {
    subnet_ids         = aws_subnet.private[*].id
    security_group_ids = [aws_security_group.lambda.id]
  }

  tracing_config {
    mode = "Active"
  }

  tags = {
    Name        = "api-handler"
    Environment = "production"
  }
}

resource "aws_api_gateway_rest_api" "main" {
  name        = "main-api"
  description = "Main API Gateway"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}`
  }
];

const features = [
  {
    icon: SparklesIcon,
    title: 'Código optimizado',
    description: 'Genera código Terraform siguiendo las mejores prácticas'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad integrada',
    description: 'Incluye configuraciones de seguridad por defecto'
  },
  {
    icon: CodeBracketIcon,
    title: 'Modular y reutilizable',
    description: 'Estructura el código en módulos para máxima reutilización'
  },
  {
    icon: CheckIcon,
    title: 'Validado automáticamente',
    description: 'El código generado pasa todas las validaciones de Terraform'
  }
];

export default function TerraformGenerationDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[selectedExample].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/demos" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                Demos
              </Link>
              <span className="text-slate-400 dark:text-slate-600">/</span>
              <span className="text-slate-900 dark:text-white font-medium">Generación de Terraform</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 mb-4">
                  <CommandLineIcon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                    Generación de código
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  De diagrama a código Terraform
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Convierte tus diagramas visuales en código Terraform optimizado y listo para producción. 
                  Sin errores de sintaxis, siguiendo las mejores prácticas.
                </p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <ClockIcon className="h-5 w-5" />
                    <span>3 minutos</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckIcon className="h-5 w-5" />
                    <span>Código validado</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                    <PlayIcon className="h-5 w-5" />
                    Ver demo completa
                  </button>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Probar ahora
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Demo Preview */}
              <div className="relative">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <CommandLineIcon className="h-24 w-24 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                      <p className="text-slate-500 dark:text-slate-400">Demo de generación de código</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Ejemplos de código generado
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Example Selector */}
              <div className="lg:col-span-1">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Selecciona un ejemplo
                </h3>
                <div className="space-y-2">
                  {codeExamples.map((example, index) => {
                    const Icon = example.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedExample(index)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                          selectedExample === index
                            ? 'bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${
                          selectedExample === index
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-slate-600 dark:text-slate-400'
                        }`} />
                        <div>
                          <div className={`font-medium text-sm ${
                            selectedExample === index
                              ? 'text-indigo-900 dark:text-indigo-100'
                              : 'text-slate-900 dark:text-white'
                          }`}>
                            {example.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {example.diagram}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Code Display */}
              <div className="lg:col-span-3">
                <div className="bg-slate-900 dark:bg-slate-950 rounded-xl shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-sm text-slate-400 font-mono">main.tf</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-slate-700 rounded-md transition-colors"
                      >
                        {copied ? (
                          <CheckIcon className="h-4 w-4 text-green-400" />
                        ) : (
                          <DocumentDuplicateIcon className="h-4 w-4 text-slate-400" />
                        )}
                      </button>
                      <button className="p-2 hover:bg-slate-700 rounded-md transition-colors">
                        <ArrowDownTrayIcon className="h-4 w-4 text-slate-400" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-sm">
                      <code className="language-hcl text-slate-300">
                        {codeExamples[selectedExample].code}
                      </code>
                    </pre>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span>Sintaxis validada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-4 w-4 text-green-500" />
                    <span>Mejores prácticas aplicadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="h-4 w-4 text-green-500" />
                    <span>Optimizado para producción</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Características de la generación de código
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Cómo funciona la generación
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Diseña tu infraestructura visualmente
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Usa el editor visual para crear tu arquitectura arrastrando y conectando componentes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      InfraUX analiza tu diagrama
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Nuestro motor analiza las conexiones, dependencias y configuraciones de tu diseño.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Genera código optimizado
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Se genera código Terraform limpio, modular y siguiendo las mejores prácticas de la industria.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Descarga o despliega directamente
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Puedes descargar el código para usarlo en tu pipeline o desplegar directamente desde InfraUX.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              ¿Listo para generar código profesional?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Convierte tus ideas en infraestructura real con código Terraform optimizado
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Empezar gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Ver más demos
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}