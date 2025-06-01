'use client'

import { useState } from 'react'
import { CpuChipIcon, CircleStackIcon, WifiIcon, ServerStackIcon, CogIcon } from '@heroicons/react/24/outline'

const nodeExamples = [
	{
		name: 'Compute (VM)',
		description: 'Descripción breve del componente de cómputo.',
		icon: CpuChipIcon,
		gradient: 'from-cloud-blue-500 to-cloud-blue-600',
		bgGradient: 'from-cloud-blue-500/10 to-cloud-blue-600/20',
		hoverGradient: 'hover:from-cloud-blue-400 hover:to-cloud-blue-500',
	},
	{
		name: 'Base de Datos',
		description: 'Descripción breve del componente de base de datos.',
		icon: CircleStackIcon,
		gradient: 'from-emerald-green-500 to-emerald-green-600',
		bgGradient: 'from-emerald-green-500/10 to-emerald-green-600/20',
		hoverGradient: 'hover:from-emerald-green-400 hover:to-emerald-green-500',
	},
	{
		name: 'Redes (VPC)',
		description: 'Descripción breve del componente de redes.',
		icon: WifiIcon,
		gradient: 'from-electric-purple-500 to-electric-purple-600',
		bgGradient: 'from-electric-purple-500/10 to-electric-purple-600/20',
		hoverGradient: 'hover:from-electric-purple-400 hover:to-electric-purple-500',
	},
	{
		name: 'Servicios Gestionados',
		description: 'Descripción breve de los servicios gestionados.',
		icon: ServerStackIcon,
		gradient: 'from-amber-500 to-orange-500',
		bgGradient: 'from-amber-500/10 to-orange-500/20',
		hoverGradient: 'hover:from-amber-400 hover:to-orange-400',
	},
]

const iacProviders = [
	{
		id: 'terraform',
		name: 'Terraform',
		color: 'text-emerald-400',
		bgColor: 'bg-emerald-500/10',
		borderColor: 'border-emerald-500',
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
			'  <span class="text-emerald-400">tags</span> = {',
			'    <span class="text-emerald-400">Name</span> = <span class="text-yellow-300">"InfraUX-VPC"</span>',
			'  }',
			'}',
			'',
			'<span class="text-gray-500"># EC2 Instance</span>',
			'<span class="text-purple-400">resource</span> <span class="text-yellow-300">"aws_instance"</span> <span class="text-yellow-300">"web"</span> {',
			'  <span class="text-emerald-400">ami</span> = <span class="text-yellow-300">"ami-0c02fb55956c7d316"</span>',
			'  <span class="text-emerald-400">instance_type</span> = <span class="text-yellow-300">"t3.micro"</span>',
			'  <span class="text-emerald-400">subnet_id</span> = <span class="text-blue-400">aws_subnet.main.id</span>',
			'  <span class="text-emerald-400">security_groups</span> = [<span class="text-blue-400">aws_security_group.web.id</span>]',
			'  <span class="text-emerald-400">user_data</span> = <span class="text-yellow-300">&lt;&lt;-EOF</span>',
			'    <span class="text-gray-400">#!/bin/bash</span>',
			'    <span class="text-gray-400">yum update -y</span>',
			'    <span class="text-gray-400">yum install -y httpd</span>',
			'  <span class="text-yellow-300">EOF</span>',
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
			'<span class="text-purple-400">AWSTemplateFormatVersion:</span> <span class="text-yellow-300">\'2010-09-09\'</span>',
			'<span class="text-purple-400">Description:</span> <span class="text-yellow-300">\'Infrastructure created with InfraUX\'</span>',
			'',
			'<span class="text-purple-400">Resources:</span>',
			'  <span class="text-blue-400">InfraUXVPC:</span>',
			'    <span class="text-emerald-400">Type:</span> <span class="text-yellow-300">AWS::EC2::VPC</span>',
			'    <span class="text-emerald-400">Properties:</span>',
			'      <span class="text-emerald-400">CidrBlock:</span> <span class="text-yellow-300">10.0.0.0/16</span>',
			'      <span class="text-emerald-400">EnableDnsHostnames:</span> <span class="text-orange-400">true</span>',
			'      <span class="text-emerald-400">Tags:</span>',
			'        <span class="text-orange-400">-</span> <span class="text-emerald-400">Key:</span> <span class="text-yellow-300">Name</span>',
			'          <span class="text-emerald-400">Value:</span> <span class="text-yellow-300">InfraUX-VPC</span>',
			'',
			'  <span class="text-blue-400">WebInstance:</span>',
			'    <span class="text-emerald-400">Type:</span> <span class="text-yellow-300">AWS::EC2::Instance</span>',
			'    <span class="text-emerald-400">Properties:</span>',
			'      <span class="text-emerald-400">ImageId:</span> <span class="text-yellow-300">ami-0c02fb55956c7d316</span>',
			'      <span class="text-emerald-400">InstanceType:</span> <span class="text-yellow-300">t3.micro</span>',
			'      <span class="text-emerald-400">SubnetId:</span> <span class="text-blue-400">!Ref PublicSubnet</span>',
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
			'<span class="text-blue-400">import</span> * <span class="text-purple-400">as</span> <span class="text-white">pulumi</span> <span class="text-purple-400">from</span> <span class="text-yellow-300">"@pulumi/pulumi"</span>;',
			'',
			'<span class="text-gray-500">// Create VPC</span>',
			'<span class="text-blue-400">const</span> <span class="text-white">vpc</span> = <span class="text-purple-400">new</span> <span class="text-yellow-300">aws.ec2.Vpc</span>(<span class="text-yellow-300">"infraux-vpc"</span>, {',
			'  <span class="text-emerald-400">cidrBlock:</span> <span class="text-yellow-300">"10.0.0.0/16"</span>,',
			'  <span class="text-emerald-400">enableDnsHostnames:</span> <span class="text-orange-400">true</span>,',
			'  <span class="text-emerald-400">tags:</span> {',
			'    <span class="text-emerald-400">Name:</span> <span class="text-yellow-300">"InfraUX-VPC"</span>,',
			'  },',
			'});',
			'',
			'<span class="text-gray-500">// Create security group</span>',
			'<span class="text-blue-400">const</span> <span class="text-white">securityGroup</span> = <span class="text-purple-400">new</span> <span class="text-yellow-300">aws.ec2.SecurityGroup</span>(<span class="text-yellow-300">"web-sg"</span>, {',
			'  <span class="text-emerald-400">vpcId:</span> <span class="text-white">vpc</span>.<span class="text-emerald-400">id</span>,',
			'  <span class="text-emerald-400">ingress:</span> [{',
			'    <span class="text-emerald-400">protocol:</span> <span class="text-yellow-300">"tcp"</span>,',
			'    <span class="text-emerald-400">fromPort:</span> <span class="text-orange-400">80</span>,',
			'    <span class="text-emerald-400">toPort:</span> <span class="text-orange-400">80</span>,',
			'    <span class="text-emerald-400">cidrBlocks:</span> [<span class="text-yellow-300">"0.0.0.0/0"</span>],',
			'  }],',
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
			'<span class="text-gray-500"># Infrastructure deployment playbook</span>',
			'<span class="text-orange-400">---</span>',
			'<span class="text-orange-400">-</span> <span class="text-emerald-400">name:</span> Deploy AWS Infrastructure',
			'  <span class="text-emerald-400">hosts:</span> localhost',
			'  <span class="text-emerald-400">connection:</span> local',
			'  <span class="text-emerald-400">gather_facts:</span> <span class="text-orange-400">false</span>',
			'  <span class="text-emerald-400">vars:</span>',
			'    <span class="text-emerald-400">aws_region:</span> us-east-1',
			'    <span class="text-emerald-400">instance_type:</span> t3.micro',
			'    <span class="text-emerald-400">vpc_cidr:</span> <span class="text-yellow-300">"10.0.0.0/16"</span>',
			'',
			'  <span class="text-emerald-400">tasks:</span>',
			'    <span class="text-orange-400">-</span> <span class="text-emerald-400">name:</span> Create VPC',
			'      <span class="text-emerald-400">amazon.aws.ec2_vpc:</span>',
			'        <span class="text-emerald-400">name:</span> <span class="text-yellow-300">"InfraUX-VPC"</span>',
			'        <span class="text-emerald-400">cidr_block:</span> <span class="text-yellow-300">"{`{{ vpc_cidr }}`}"</span>',
			'        <span class="text-emerald-400">region:</span> <span class="text-yellow-300">"{`{{ aws_region }}`}"</span>',
			'        <span class="text-emerald-400">dns_hostnames:</span> <span class="text-orange-400">yes</span>',
			'        <span class="text-emerald-400">state:</span> present',
			'      <span class="text-emerald-400">register:</span> vpc_result',
		],
	},
]

export default function VisualNodeExamples() {
	const [activeTab, setActiveTab] = useState('terraform')

	return (
		<section
			id="nodes"
			className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden"
		>
			{/* Background decorations */}
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-purple-50/50 via-cloud-blue-50/30 to-emerald-green-50/50 dark:from-electric-purple-900/10 dark:via-cloud-blue-900/10 dark:to-emerald-green-900/10"></div>
			<div className="absolute top-40 right-20 w-72 h-72 bg-electric-purple-400/10 rounded-full blur-3xl animate-float"></div>
			<div className="absolute bottom-40 left-20 w-64 h-64 bg-emerald-green-400/10 rounded-full blur-3xl animate-float-delay"></div>

			<div className="relative max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-shift">
						Componentes Gráficos de{' '}
						<span className="bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent">
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
							<h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent">
								Diseño Visual con Preview y Deploy
							</h3>
							<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
								Diseña visualmente, previsualiza los cambios en tiempo real, ejecuta deployments directamente desde la interfaz gráfica. 
								<span className="font-semibold text-electric-purple-600 dark:text-electric-purple-400"> Tu estado se guarda automáticamente.</span>
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
												className="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
											>
												<div
													className={`w-8 h-8 rounded-lg bg-gradient-to-r ${node.gradient} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
												>
													<node.icon className="w-5 h-5 text-white" />
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
										<div className="w-16 h-16 bg-gradient-to-r from-electric-purple-500 to-emerald-green-500 rounded-full flex items-center justify-center animate-pulse-glow">
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
									{iacProviders.map((provider) => (
										<button
											key={provider.id}
											onClick={() => setActiveTab(provider.id)}
											className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
												activeTab === provider.id
													? `${provider.bgColor} ${provider.color} border ${provider.borderColor}`
													: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
											}`}
										>
											{provider.icon}
											{provider.name}
										</button>
									))}
								</div>

								{/* Tab Content */}
								{iacProviders.map((provider) => (
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
										<button className="flex items-center gap-1 px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-all duration-300">
											<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
											</svg>
											Preview
										</button>
										<button className="flex items-center gap-1 px-3 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-xs font-medium hover:bg-emerald-200 dark:hover:bg-emerald-800/40 transition-all duration-300">
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
								<button className="btn bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
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
					<div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-2xl border border-blue-200 dark:border-blue-700">
						<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Preview en Tiempo Real</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">Visualiza los cambios en tu infraestructura antes de aplicarlos. Simulación completa del estado final.</p>
					</div>
					
					<div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30 rounded-2xl border border-emerald-200 dark:border-emerald-700">
						<div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Deploy Directo</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">Ejecuta deployments directamente desde la interfaz gráfica. Monitoreo en tiempo real del progreso.</p>
					</div>
					
					<div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-2xl border border-purple-200 dark:border-purple-700">
						<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Auto-Guardado</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">Tu trabajo se guarda automáticamente. Versionado inteligente y recuperación de estados anteriores.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
