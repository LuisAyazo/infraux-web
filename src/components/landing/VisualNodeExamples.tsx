'use client'

// import { useState } from 'react'
// import { CpuChipIcon, CircleStackIcon, WifiIcon, ServerStackIcon, CogIcon } from '@heroicons/react/24/outline'

// const nodeExamples = [
// 	{
// 		name: 'Compute (VM)',
// 		description: 'Descripción breve del componente de cómputo.',
// 		icon: CpuChipIcon,
// 		gradient: 'from-cloud-blue-500 to-cloud-blue-600',
// 		bgGradient: 'from-cloud-blue-500/10 to-cloud-blue-600/20',
// 		hoverGradient: 'hover:from-cloud-blue-400 hover:to-cloud-blue-500',
// 	},
// 	{
// 		name: 'Base de Datos',
// 		description: 'Descripción breve del componente de base de datos.',
// 		icon: CircleStackIcon,
// 		gradient: 'from-emerald-green-500 to-emerald-green-600',
// 		bgGradient: 'from-emerald-green-500/10 to-emerald-green-600/20',
// 		hoverGradient: 'hover:from-emerald-green-400 hover:to-emerald-green-500',
// 	},
// 	{
// 		name: 'Redes (VPC)',
// 		description: 'Descripción breve del componente de redes.',
// 		icon: WifiIcon,
// 		gradient: 'from-electric-purple-500 to-electric-purple-600',
// 		bgGradient: 'from-electric-purple-500/10 to-electric-purple-600/20',
// 		hoverGradient: 'hover:from-electric-purple-400 hover:to-electric-purple-500',
// 	},
// 	{
// 		name: 'Servicios Gestionados',
// 		description: 'Descripción breve de los servicios gestionados.',
// 		icon: ServerStackIcon,
// 		gradient: 'from-amber-500 to-orange-500',
// 		bgGradient: 'from-amber-500/10 to-orange-500/20',
// 		hoverGradient: 'hover:from-amber-400 hover:to-orange-400',
// 	},
// ]

// const iacProviders = [
// 	{
// 		id: 'terraform',
// 		name: 'Terraform',
// 		color: 'text-emerald-400',
// 		bgColor: 'bg-emerald-500/10',
// 		borderColor: 'border-emerald-500',
// 		icon: (
// 			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
// 				<path d="M13.5 2L8.5 7H12v6h3V7h3.5L13.5 2zM8 13v6h8v-6H8z" />
// 			</svg>
// 		),
// 		filename: 'terraform/main.tf',
// 		code: [
// 			'<span class="text-gray-500"># VPC Configuration</span>',
// 			'<span class="text-purple-400">resource</span> <span class="text-yellow-300">"aws_vpc"</span> <span class="text-yellow-300">"main"</span> {',
// 			'  <span class="text-emerald-400">cidr_block</span> = <span class="text-yellow-300">"10.0.0.0/16"</span>',
// 			'  <span class="text-emerald-400">enable_dns_hostnames</span> = <span class="text-orange-400">true</span>',
// 			'  <span class="text-emerald-400">tags</span> = {',
// 			'    <span class="text-emerald-400">Name</span> = <span class="text-yellow-300">"InfraUX-VPC"</span>',
// 			'  }',
// 			'}',
// 			'',
// 			'<span class="text-gray-500"># EC2 Instance</span>',
// 			'<span class="text-purple-400">resource</span> <span class="text-yellow-300">"aws_instance"</span> <span class="text-yellow-300">"web"</span> {',
// 			'  <span class="text-emerald-400">ami</span> = <span class="text-yellow-300">"ami-0c02fb55956c7d316"</span>',
// 			'  <span class="text-emerald-400">instance_type</span> = <span class="text-yellow-300">"t3.micro"</span>',
// 			'  <span class="text-emerald-400">subnet_id</span> = <span class="text-blue-400">aws_subnet.main.id</span>',
// 			'  <span class="text-emerald-400">security_groups</span> = [<span class="text-blue-400">aws_security_group.web.id</span>]',
// 			'  <span class="text-emerald-400">user_data</span> = <span class="text-yellow-300"><<-EOF</span>',
// 			'    <span class="text-gray-400">#!/bin/bash</span>',
// 			'    <span class="text-gray-400">yum update -y</span>',
// 			'    <span class="text-gray-400">yum install -y httpd</span>',
// 			'  <span class="text-yellow-300">EOF</span>',
// 			'}',
// 		],
// 	},
// 	{
// 		id: 'cloudformation',
// 		name: 'CloudFormation',
// 		color: 'text-orange-400',
// 		bgColor: 'bg-orange-500/10',
// 		borderColor: 'border-orange-500',
// 		icon: (
// 			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
// 				<path d="M11.95 2.875L2.85 8.125C2.35 8.425 2 8.975 2 9.575V14.425C2 15.025 2.35 15.575 2.85 15.875L11.95 21.125C12.35 21.375 12.85 21.375 13.25 21.125L22.35 15.875C22.85 15.575 23.2 15.025 23.2 14.425V9.575C23.2 8.975 22.85 8.425 22.35 8.125L13.25 2.875C12.85 2.625 12.35 2.625 11.95 2.875Z" />
// 			</svg>
// 		),
// 		filename: 'infrastructure.yaml',
// 		code: [
// 			'<span class="text-purple-400">AWSTemplateFormatVersion:</span> <span class="text-yellow-300">\'2010-09-09\'</span>',
// 			'<span class="text-purple-400">Description:</span> <span class="text-yellow-300">\'Infrastructure created with InfraUX\'</span>',
// 			'',
// 			'<span class="text-purple-400">Resources:</span>',
// 			'  <span class="text-blue-400">InfraUXVPC:</span>',
// 			'    <span class="text-emerald-400">Type:</span> <span class="text-yellow-300">AWS::EC2::VPC</span>',
// 			'    <span class="text-emerald-400">Properties:</span>',
// 			'      <span class="text-emerald-400">CidrBlock:</span> <span class="text-yellow-300">10.0.0.0/16</span>',
// 			'      <span class="text-emerald-400">EnableDnsHostnames:</span> <span class="text-orange-400">true</span>',
// 			'      <span class="text-emerald-400">Tags:</span>',
// 			'        <span class="text-orange-400">-</span> <span class="text-emerald-400">Key:</span> <span class="text-yellow-300">Name</span>',
// 			'          <span class="text-emerald-400">Value:</span> <span class="text-yellow-300">InfraUX-VPC</span>',
// 			'',
// 			'  <span class="text-blue-400">WebInstance:</span>',
// 			'    <span class="text-emerald-400">Type:</span> <span class="text-yellow-300">AWS::EC2::Instance</span>',
// 			'    <span class="text-emerald-400">Properties:</span>',
// 			'      <span class="text-emerald-400">ImageId:</span> <span class="text-yellow-300">ami-0c02fb55956c7d316</span>',
// 			'      <span class="text-emerald-400">InstanceType:</span> <span class="text-yellow-300">t3.micro</span>',
// 			'      <span class="text-emerald-400">SubnetId:</span> <span class="text-blue-400">!Ref PublicSubnet</span>',
// 		],
// 	},
// 	{
// 		id: 'pulumi',
// 		name: 'Pulumi',
// 		color: 'text-purple-400',
// 		bgColor: 'bg-purple-500/10',
// 		borderColor: 'border-purple-500',
// 		icon: (
// 			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
// 				<path d="M12 2l10 6-10 6L2 8l10-6zm0 2.2L4.8 8 12 11.8 19.2 8 12 4.2zm0 7.6l-7.2-4.4v7.6L12 21.8l7.2-4.4v-7.6L12 13.8z" />
// 			</svg>
// 		),
// 		filename: 'index.ts (Pulumi)',
// 		code: [
// 			'<span class="text-blue-400">import</span> * <span class="text-purple-400">as</span> <span class="text-white">aws</span> <span class="text-purple-400">from</span> <span class="text-yellow-300">"@pulumi/aws"</span>;',
// 			'<span class="text-blue-400">import</span> * <span class="text-purple-400">as</span> <span class="text-white">pulumi</span> <span class="text-purple-400">from</span> <span class="text-yellow-300">"@pulumi/pulumi"</span>;',
// 			'',
// 			'<span class="text-gray-500">// Create VPC</span>',
// 			'<span class="text-blue-400">const</span> <span class="text-white">vpc</span> = <span class="text-purple-400">new</span> <span class="text-yellow-300">aws.ec2.Vpc</span>(<span class="text-yellow-300">"infraux-vpc"</span>, {',
// 			'  <span class="text-emerald-400">cidrBlock:</span> <span class="text-yellow-300">"10.0.0.0/16"</span>,',
// 			'  <span class="text-emerald-400">enableDnsHostnames:</span> <span class="text-orange-400">true</span>,',
// 			'  <span class="text-emerald-400">tags:</span> {',
// 			'    <span class="text-emerald-400">Name:</span> <span class="text-yellow-300">"InfraUX-VPC"</span>,',
// 			'  },',
// 			'});',
// 			'',
// 			'<span class="text-gray-500">// Create security group</span>',
// 			'<span class="text-blue-400">const</span> <span class="text-white">securityGroup</span> = <span class="text-purple-400">new</span> <span class="text-yellow-300">aws.ec2.SecurityGroup</span>(<span class="text-yellow-300">"web-sg"</span>, {',
// 			'  <span class="text-emerald-400">vpcId:</span> <span class="text-white">vpc</span>.<span class="text-emerald-400">id</span>,',
// 			'  <span class="text-emerald-400">ingress:</span> [{',
// 			'    <span class="text-emerald-400">protocol:</span> <span class="text-yellow-300">"tcp"</span>,',
// 			'    <span class="text-emerald-400">fromPort:</span> <span class="text-orange-400">80</span>,',
// 			'    <span class="text-emerald-400">toPort:</span> <span class="text-orange-400">80</span>,',
// 			'    <span class="text-emerald-400">cidrBlocks:</span> [<span class="text-yellow-300">"0.0.0.0/0"</span>],',
// 			'  }],',
// 			'});',
// 		],
// 	},
// 	{
// 		id: 'ansible',
// 		name: 'Ansible',
// 		color: 'text-red-400',
// 		bgColor: 'bg-red-500/10',
// 		borderColor: 'border-red-500',
// 		icon: (
// 			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
// 				<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.44 7.92c-.048.24-.144.48-.384.48-.192 0-.336-.144-.432-.288L12 9.36l-3.312 6.912c-.096.144-.24.288-.432.288-.24 0-.336-.24-.384-.48L6.432 8.16c-.048-.288.096-.576.384-.576.192 0 .384.144.432.336l1.056 5.76L11.28 7.2c.096-.192.24-.336.432-.336s.336.144.432.336l2.976 6.48 1.056-5.76c.048-.192.24-.336.432-.336.288 0 .432.288.384.576z" />
// 			</svg>
// 		),
// 		filename: 'playbook.yml',
// 		code: [
// 			'<span class="text-gray-500"># Infrastructure deployment playbook</span>',
// 			'<span class="text-orange-400">---</span>',
// 			'<span class="text-orange-400">-</span> <span class="text-emerald-400">name:</span> Deploy AWS Infrastructure',
// 			'  <span class="text-emerald-400">hosts:</span> localhost',
// 			'  <span class="text-emerald-400">connection:</span> local',
// 			'  <span class="text-emerald-400">gather_facts:</span> <span class="text-orange-400">false</span>',
// 			'  <span class="text-emerald-400">vars:</span>',
// 			'    <span class="text-emerald-400">aws_region:</span> us-east-1',
// 			'    <span class="text-emerald-400">instance_type:</span> t3.micro',
// 			'    <span class="text-emerald-400">vpc_cidr:</span> <span class="text-yellow-300">"10.0.0.0/16"</span>',
// 			'',
// 			'  <span class="text-emerald-400">tasks:</span>',
// 			'    <span class="text-orange-400">-</span> <span class="text-emerald-400">name:</span> Create VPC',
// 			'      <span class="text-emerald-400">amazon.aws.ec2_vpc:</span>',
// 			'        <span class="text-emerald-400">name:</span> <span class="text-yellow-300">"InfraUX-VPC"</span>',
// 			'        <span class="text-emerald-400">cidr_block:</span> <span class="text-yellow-300">"{`{{ vpc_cidr }}`}"</span>',
// 			'        <span class="text-emerald-400">region:</span> <span class="text-yellow-300">"{`{{ aws_region }}`}"</span>',
// 			'        <span class="text-emerald-400">dns_hostnames:</span> <span class="text-orange-400">yes</span>',
// 			'        <span class="text-emerald-400">state:</span> present',
// 			'      <span class="text-emerald-400">register:</span> vpc_result',
// 		],
// 	},
// ]

export default function VisualNodeExamples() {
	// const [activeTab, setActiveTab] = useState('terraform')

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
			</div>
		</section>
	)
}
