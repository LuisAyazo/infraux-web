import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  UsersIcon,
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  LockClosedIcon,
  ArrowRightIcon,
  UserGroupIcon,
  BellIcon,
  ClockIcon,
  ChartBarIcon,
  FolderIcon,
  ShareIcon,
  EyeIcon,
  PencilSquareIcon,
  HandRaisedIcon,
  SparklesIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Real-Time Collaboration | InfraUX',
  description: 'Work as a team on your infrastructure. Collaborative editing, version control and integrated communication.',
  keywords: ['collaboration', 'teamwork', 'real-time', 'version control', 'collaborative infrastructure'],
  openGraph: {
    title: 'Team Collaboration - InfraUX',
    description: 'Infrastructure is a team sport',
    url: 'https://infraux.com/product/collaboration',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
}

const collaborationFeatures = [
  {
    icon: UsersIcon,
    title: 'Collaborative Editing',
    description: 'Multiple users editing the same infrastructure in real-time.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Comments and Discussions',
    description: 'Comment directly on components. Resolve questions without leaving the editor.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Version Control',
    description: 'Complete change history. See who did what and when.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: LockClosedIcon,
    title: 'Granular Permissions',
    description: 'Total control over who can view, edit or deploy.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BellIcon,
    title: 'Smart Notifications',
    description: 'Stay up to date with important changes in your infrastructure.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: HandRaisedIcon,
    title: 'Approvals and Reviews',
    description: 'Customizable approval workflows for critical changes.',
    color: 'from-pink-500 to-rose-500'
  }
]

const teamActivities = [
  {
    user: 'Maria Garcia',
    avatar: 'MG',
    action: 'updated',
    target: 'VPC Production',
    time: '2 minutes ago',
    color: 'bg-blue-500'
  },
  {
    user: 'Carlos Lopez',
    avatar: 'CL',
    action: 'commented on',
    target: 'RDS Database Config',
    time: '5 minutes ago',
    color: 'bg-purple-500'
  },
  {
    user: 'Ana Martinez',
    avatar: 'AM',
    action: 'approved changes to',
    target: 'EKS Cluster',
    time: '15 minutes ago',
    color: 'bg-green-500'
  },
  {
    user: 'Diego Rodriguez',
    avatar: 'DR',
    action: 'created',
    target: 'Lambda Functions',
    time: '1 hour ago',
    color: 'bg-orange-500'
  }
]

const permissions = [
  { role: 'Viewer', icon: EyeIcon, description: 'View infrastructure and comments' },
  { role: 'Editor', icon: PencilSquareIcon, description: 'Edit and create components' },
  { role: 'Deployer', icon: CloudIcon, description: 'Deploy changes to production' },
  { role: 'Admin', icon: ShieldCheckIcon, description: 'Full control and team management' }
]

export default function CollaborationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <UserGroupIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Team Collaboration
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Infrastructure is a
                <span className="block gradient-text-emerald">
                  team sport
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Work with your team in real-time. Comment, review and approve 
                changes before deploying. All in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <UsersIcon className="h-6 w-6" />
                  Invite my team
                </Link>
                <Link
                  href="/demos/collaboration"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Watch collaborative demo
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Live Collaboration Demo - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Real-time collaboration
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  See your team's changes as they happen. Live cursors, 
                  simultaneous editing and instant synchronization.
                </p>
                
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <SparklesIcon className="h-6 w-6 text-emerald-500" />
                    Team activity
                  </h3>
                  
                  <div className="space-y-4">
                    {teamActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className={`w-12 h-12 rounded-2xl ${activity.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                          {activity.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-700 dark:text-slate-300">
                            <span className="font-bold">{activity.user}</span>
                            {' '}{activity.action}{' '}
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              {activity.target}
                            </span>
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
                    <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                            Collaborative Editor
                          </span>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                            MG
                          </div>
                          <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                            CL
                          </div>
                          <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                            AM
                          </div>
                          <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-bold shadow-lg">
                            +2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-slate-600 dark:text-slate-400">
                          Maria is editing VPC configuration...
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-slate-600 dark:text-slate-400">
                          Carlos is reviewing Security Groups...
                        </span>
                      </div>
                      
                      <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start gap-3">
                          <ChatBubbleLeftRightIcon className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-amber-900 dark:text-amber-100">
                              Carlos Lopez commented:
                            </p>
                            <p className="text-amber-700 dark:text-amber-300 mt-1">
                              "Should we increase the RDS instance size for the expected new traffic?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Everything you need to work as a team
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Tools designed for effective collaboration
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborationFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title} 
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Permissions Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Full control over permissions
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Define exactly what each team member can do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {permissions.map((permission, index) => {
                const Icon = permission.icon;
                return (
                  <div 
                    key={permission.role} 
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-14 w-14 text-emerald-600 dark:text-emerald-400 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {permission.role}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {permission.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-12 shadow-premium-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-800">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
                  Customizable workflows
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-premium">
                      <span className="text-3xl font-black text-white">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Propose changes
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Developers create and test changes
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-premium">
                      <span className="text-3xl font-black text-white">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Review and approve
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Tech leads review and approve
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-premium">
                      <span className="text-3xl font-black text-white">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Deploy
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      DevOps deploys to production
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white shadow-premium-lg">
                <div className="max-w-4xl mx-auto text-center">
                  <ShareIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                  <h2 className="text-4xl font-bold mb-6">
                    Integrated with your favorite tools
                  </h2>
                  <p className="text-xl text-emerald-50 mb-10 font-medium">
                    Connect InfraUX with Slack, Teams, Jira and more. 
                    Keep everyone informed without changing context.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">💬</div>
                      <p className="font-bold text-lg">Slack</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">📊</div>
                      <p className="font-bold text-lg">Jira</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">🔔</div>
                      <p className="font-bold text-lg">Teams</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">📧</div>
                      <p className="font-bold text-lg">Email</p>
                    </div>
                  </div>
                  
                  <Link
                    href="/integrations"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    View all integrations
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Collaboration that drives results
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Metrics from teams using collaboration in InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl mb-6 shadow-premium">
                  <ClockIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  75%
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Reduction in review time
                </p>
              </div>
              
              <div className="text-center animate-fade-in-up animation-delay-200">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-6 shadow-premium">
                  <UserGroupIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  3x
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  More collaboration between teams
                </p>
              </div>
              
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-6 shadow-premium">
                  <ChartBarIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  90%
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Fewer production errors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Start collaborating today
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Invite your team and improve your infrastructure workflow
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Create team free
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Enterprise plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}