'use client'

import React, { useState } from 'react'
import { CpuChipIcon, CircleStackIcon, WifiIcon, ServerStackIcon } from '@heroicons/react/24/outline'

const nodeExamples = [
	{
		name: 'Compute (VM)',
		description:
			'Representa máquinas virtuales, instancias de cómputo y nodos de Kubernetes. Configura CPU, RAM, SO y almacenamiento.',
		icon: CpuChipIcon,
	},
	{
		name: 'Base de Datos',
		description:
			'Nodos para servicios de bases de datos relacionales (SQL) y NoSQL. Define tipo de motor, capacidad y replicación.',
		icon: CircleStackIcon,
	},
	{
		name: 'Redes (VPC)',
		description:
			'Visualiza y configura Virtual Private Clouds (VPCs), subredes, gateways, tablas de ruteo y firewalls.',
		icon: WifiIcon,
	},
	{
		name: 'Servicios Gestionados',
		description:
			'Nodos para Cloud Functions, Load Balancers, colas de mensajes, almacenamiento de objetos y más servicios PaaS.',
		icon: ServerStackIcon,
	},
]

const iacProviders = [
	{
		id: 'terraform',
		name: 'Terraform',
    color: 'text-emerald-400', // Propiedad 'color' necesaria para el tipo IacProvider
    bgColor: 'bg-emerald-500/10', // Propiedad 'bgColor' necesaria
    borderColor: 'border-emerald-500', // Propiedad 'borderColor' necesaria
		icon: (
			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
				<path d="M13.5 2L8.5 7H12v6h3V7h3.5L13.5 2zM8 13v6h8v-6H8z" />
			</svg>
		),
		filename: 'terraform/main.tf',
		code: [
			'<span class="text-gray-500"># VPC Configuration</span>',
			'<span class="text-purple-400">resource</span> <span class="text-yellow-300">"aws_vpc"</span> <span class="text-yellow-300">"main"</span> {',
			'  <span class="text-emerald-400">cidr_block</span> = <span class="text-yellow-300">"10.0.0.0/16"</span>',
			'  <span class="text-emerald-400">enable_dns_hostnames</span> = <span class="text-orange-400">true</span>',
			'}',
			'<span class="text-gray-500"># EC2 Instance</span>',
			'<span class="text-purple-400">resource</span> <span class="text-yellow-300">"aws_instance"</span> <span class="text-yellow-300">"web"</span> {',
			'  <span class="text-emerald-400">ami</span> = <span class="text-yellow-300">"ami-0c02fb55956c7d316"</span>',
			'  <span class="text-emerald-400">instance_type</span> = <span class="text-yellow-300">"t3.micro"</span>',
			'}',
		],
	},
	{
		id: 'cloudformation',
		name: 'CloudFormation',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
		icon: (
			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
				<path d="M11.95 2.875L2.85 8.125C2.35 8.425 2 8.975 2 9.575V14.425C2 15.025 2.35 15.575 2.85 15.875L11.95 21.125C12.35 21.375 12.85 21.375 13.25 21.125L22.35 15.875C22.85 15.575 23.2 15.025 23.2 14.425V9.575C23.2 8.975 22.85 8.425 22.35 8.125L13.25 2.875C12.85 2.625 12.35 2.625 11.95 2.875Z" />
			</svg>
		),
		filename: 'infrastructure.yaml',
		code: [
			'<span class="text-purple-400">AWSTemplateFormatVersion:</span> <span class="text-yellow-300">\\\'2010-09-09\\\'</span>',
			'<span class="text-purple-400">Resources:</span>',
			'  <span class="text-blue-400">InfraUXVPC:</span>',
			'    <span class="text-emerald-400">Type:</span> <span class="text-yellow-300">AWS::EC2::VPC</span>',
			'    <span class="text-emerald-400">Properties:</span>',
			'      <span class="text-emerald-400">CidrBlock:</span> <span class="text-yellow-300">10.0.0.0/16</span>',
		],
	},
	{
		id: 'pulumi',
		name: 'Pulumi',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
		icon: (
			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 2l10 6-10 6L2 8l10-6zm0 2.2L4.8 8 12 11.8 19.2 8 12 4.2zm0 7.6l-7.2-4.4v7.6L12 21.8l7.2-4.4v-7.6L12 13.8z" />
			</svg>
		),
		filename: 'index.ts (Pulumi)',
		code: [
			'<span class="text-blue-400">import</span> * <span class="text-purple-400">as</span> <span class="text-white">aws</span> <span class="text-purple-400">from</span> <span class="text-yellow-300">"@pulumi/aws"</span>;',
			'<span class="text-blue-400">const</span> <span class="text-white">vpc</span> = <span class="text-purple-400">new</span> <span class="text-yellow-300">aws.ec2.Vpc</span>(<span class="text-yellow-300">"infraux-vpc"</span>, {',
			'  <span class="text-emerald-400">cidrBlock:</span> <span class="text-yellow-300">"10.0.0.0/16"</span>,',
			'});',
		],
	},
	{
		id: 'ansible',
		name: 'Ansible',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500',
		icon: (
			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.44 7.92c-.048.24-.144.48-.384.48-.192 0-.336-.144-.432-.288L12 9.36l-3.312 6.912c-.096.144-.24.288-.432.288-.24 0-.336-.24-.384-.48L6.432 8.16c-.048-.288.096-.576.384-.576.192 0 .384.144.432.336l1.056 5.76L11.28 7.2c.096-.192.24-.336.432-.336s.336.144.432.336l2.976 6.48 1.056-5.76c.048-.192.24-.336.432-.336.288 0 .432.288.384.576z" />
			</svg>
		),
		filename: 'playbook.yml',
		code: [
			'<span class="text-orange-400">-</span> <span class="text-emerald-400">name:</span> Create VPC',
			'  <span class="text-emerald-400">amazon.aws.ec2_vpc:</span>',
			'    <span class="text-emerald-400">name:</span> <span class="text-yellow-300">"InfraUX-VPC"</span>',
			'    <span class="text-emerald-400">cidr_block:</span> <span class="text-yellow-300">"10.0.0.0/16"</span>',
		],
	},
]

interface IacProvider {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactElement; // Cambiado de JSX.Element a React.ReactElement
  filename: string;
  code: string[];
}

const iacProvidersTyped: IacProvider[] = iacProviders;

interface AdvancedFeature {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement; // Cambiado de JSX.Element a React.ReactElement
}

const advancedFeatures: AdvancedFeature[] = [
  { 
    title: 'Preview en Tiempo Real', 
    description: 'Visualiza los cambios en tu infraestructura antes de aplicarlos. Simulación completa del estado final.', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ) 
  },
  { 
    title: 'Deploy Directo', 
    description: 'Ejecuta deployments directamente desde la interfaz gráfica. Monitoreo en tiempo real del progreso.', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
      </svg>
    )
  },
  { 
    title: 'Auto-Guardado', 
    description: 'Tu trabajo se guarda automáticamente. Versionado inteligente y recuperación de estados anteriores.', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
]

export default function VisualNodeExamples() {
	const [activeTab, setActiveTab] = useState('terraform')

	return (
		<section
			id="nodes"
			className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden"
		>
			{/* Background decorations - Simplificado */}
			<div className="absolute inset-0 bg-gradient-to-br from-electric-purple-500/5 via-emerald-green-500/5 to-transparent dark:from-electric-purple-900/10 dark:via-emerald-green-900/10"></div>
			<div className="absolute top-40 right-20 w-72 h-72 bg-electric-purple-400/10 rounded-full blur-3xl animate-float"></div>
			<div className="absolute bottom-40 left-20 w-64 h-64 bg-emerald-green-400/10 rounded-full blur-3xl animate-float-delay"></div>

			<div className="relative max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Componentes Gráficos de{' '}
						<span className="text-gray-800 dark:text-white"> {/* Título a neutro */}
							Infraestructura
						</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-1">
						Arrastra, suelta y conecta nodos que representan tus recursos cloud.
						Cada nodo es configurable y se traduce automáticamente a IaC.
					</p>
				</div>

				{/* Interactive demo section - Mejorado */}
				<div className="mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
					{/* Background decoration */}
					<div className="absolute top-0 right-0 w-64 h-64 bg-electric-purple-400/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-green-400/5 rounded-full blur-3xl"></div>

					<div className="relative z-10">
						<div className="text-center mb-12">
							<h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"> {/* Título de demo a neutro */}
								Diseño Visual con Preview y Deploy
							</h3>
							<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
								Diseña visualmente, previsualiza los cambios en tiempo real, ejecuta deployments directamente desde la interfaz gráfica. 
								<span className="font-semibold text-emerald-green-600 dark:text-emerald-green-400"> Tu estado se guarda automáticamente.</span> {/* Texto destacado a emerald */}
							</p>
						</div>

						<div className="grid lg:grid-cols-5 gap-8 items-center">
							{/* Nodos visuales */}
							<div className="lg:col-span-2">
								<div className="space-y-4">
									<div className="text-center mb-6">
										<h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Componentes Disponibles
										</h4>
									</div>
									<div className="grid grid-cols-2 gap-3">
										{nodeExamples.map((node, index) => (
											<div
												key={index}
												className="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer hover:scale-105" // Borde hover a gris
											>
												<div
													className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`} // Contenedor de icono a gris
												>
													<node.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" /> {/* Icono a gris */}
												</div>
												<div className="text-xs font-medium text-gray-700 dark:text-gray-300">
													{node.name}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Flecha de proceso */}
							<div className="lg:col-span-1 flex justify-center">
								<div className="text-center space-y-3">
									<div className="flex items-center justify-center mb-4">
										<div className="w-16 h-16 bg-gray-600 dark:bg-gray-500 rounded-full flex items-center justify-center"> {/* Círculo a gris */}
											<svg
												className="w-8 h-8 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13 7l5 5m0 0l-5 5m5-5H6"
												/>
											</svg>
										</div>
									</div>
									<div className="text-sm font-medium text-gray-600 dark:text-gray-400">
										Diseña & Genera
									</div>
									<div className="text-xs text-gray-500 dark:text-gray-500">
										Auto-guardado ✓
									</div>
								</div>
							</div>

							{/* Resultado de código con pestañas */}
							<div className="lg:col-span-2">
								{/* Tab Navigation */}
								<div className="flex flex-wrap gap-2 mb-4">
									{iacProvidersTyped.map((provider) => (
										<button
											key={provider.id}
											onClick={() => setActiveTab(provider.id)}
											className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
												activeTab === provider.id
													? 'bg-gray-700 text-white border border-gray-700' // Pestaña activa a gris
													: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
											}`}
										>
											{provider.icon}
											{provider.name}
										</button>
									))}
								</div>

								{/* Tab Content */}
								{iacProvidersTyped.map((provider) => (
									<div
										key={provider.id}
										className={`${
											activeTab === provider.id ? 'block' : 'hidden'
										} transition-all duration-300`}
									>
										<div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 border border-gray-700 max-h-80 overflow-y-auto">
											<div className="flex items-center justify-between mb-3">
												<div className={`${provider.color} text-sm font-medium flex items-center`}>
													{provider.icon}
													<span className="ml-2">{provider.filename}</span>
												</div>
												<div className="flex space-x-1">
													<div className="w-2 h-2 bg-red-500 rounded-full"></div>
													<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
													<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												</div>
											</div>
											<div className="text-xs text-gray-300 font-mono leading-relaxed space-y-0.5">
												{provider.code.map((line, index) => (
													<div
														key={index}
														className={line === '' ? 'py-1' : ''}
														dangerouslySetInnerHTML={{ __html: line }}
													/>
												))}
											</div>
										</div>
									</div>
								))}

								<div className="text-center mt-4">
									<div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
										4 Formatos IaC Soportados
									</div>
									<div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
										Terraform • CloudFormation • Pulumi • Ansible
									</div>
									
									{/* Preview y Deploy buttons */}
									<div className="flex gap-2 justify-center">
										<button className="flex items-center gap-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
											<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
											</svg>
											Preview
										</button>
										<button className="flex items-center gap-1 px-3 py-2 bg-electric-purple-600 hover:bg-electric-purple-700 text-white rounded-lg text-xs font-medium transition-all duration-300">
											<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
											</svg>
											Deploy
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* Call to action */}
						<div className="text-center mt-12">
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<button className="btn bg-electric-purple-600 hover:bg-electric-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
									Probar Demo Interactivo
								</button>
								<div className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
									Incluye preview en tiempo real, deploy automático y auto-guardado de proyectos
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Nueva sección: Funcionalidades Avanzadas */}
				<div className="mt-16 grid md:grid-cols-3 gap-8">
          {advancedFeatures.map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-105 animate-fade-in-up" // Borde hover a gris
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4"> {/* Contenedor de icono a gris */}
                <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" /> {/* Icono a gris */}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
				</div>
			</div>
		</section>
	)
}
