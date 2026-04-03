import { motion } from 'framer-motion';
import { Globe, Target, Bot, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
    title: 'Conversion-Optimized Websites',
    description:
      'We build blazing-fast, pixel-perfect websites designed around one goal — turning visitors into leads. Every element is engineered to drive action.',
    features: ['Sub-2s load time', 'Mobile-first design', 'A/B tested layouts'],
  },
  {
    icon: Target,
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    title: 'Strategic Lead Generation',
    description:
      'Stop chasing cold leads. We build automated funnels and qualification systems that deliver warm, ready-to-buy prospects directly to your pipeline.',
    features: ['Automated qualification', 'CRM integration', 'Multi-channel funnels'],
  },
  {
    icon: Bot,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    title: 'AI-Powered Automation',
    description:
      'Leverage AI to nurture leads 24/7, respond instantly, and personalize outreach at scale — without adding headcount.',
    features: ['AI chatbots & follow-ups', 'Smart segmentation', 'Predictive scoring'],
  },
  {
    icon: BarChart3,
    color: 'text-[#ffb84d]',
    bg: 'bg-[#ffb84d]/10',
    title: 'Performance Analytics',
    description:
      'Full-funnel visibility into what drives revenue. We track every touchpoint and continuously optimize to lower your cost per acquisition.',
    features: ['Real-time dashboards', 'Conversion tracking', 'Monthly growth reports'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#ffb84d] text-sm font-bold uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5">
            Everything you need to{' '}
            <span className="text-gradient">dominate your market</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We don't offer generic digital marketing. We build growth systems tailored to your business model and revenue goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass p-8 rounded-[32px] hover:border-white/15 transition-colors duration-300"
              >
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-zinc-500">
                      <span className={`w-1.5 h-1.5 rounded-full ${service.bg} ${service.color} bg-current`} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
