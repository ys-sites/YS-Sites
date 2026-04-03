import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    metric: '+312%',
    label: 'Lead Volume',
    description: 'E-commerce brand scaled from 40 to 165 qualified leads per month in 60 days.',
    tag: 'E-commerce',
  },
  {
    icon: DollarSign,
    metric: '-58%',
    label: 'Cost Per Lead',
    description: 'SaaS startup cut CPL from $94 to $39 after funnel rebuild and landing page overhaul.',
    tag: 'SaaS',
  },
  {
    icon: Users,
    metric: '+89%',
    label: 'Booked Calls',
    description: 'Local service business doubled consultation bookings within 3 weeks of launch.',
    tag: 'Local Services',
  },
  {
    icon: Clock,
    metric: '11 days',
    label: 'Time to Results',
    description: 'Average time from project kickoff to first measurable lead generation improvement.',
    tag: 'All Clients',
  },
];

const testimonials = [
  {
    quote:
      "YS completely transformed how we generate leads. We went from manually chasing prospects to having a full pipeline on autopilot. The ROI was clear within the first month.",
    name: 'Marcus T.',
    role: 'Founder, GrowthEdge',
  },
  {
    quote:
      "Our old website looked great but converted terribly. After YS rebuilt it with their conversion system, our inquiry rate tripled. Best investment we've made.",
    name: 'Sarah K.',
    role: 'Director of Marketing, NovaBuild',
  },
  {
    quote:
      "We were skeptical about AI automation but the results were undeniable. Our follow-up speed went from days to seconds and close rates jumped immediately.",
    name: 'David R.',
    role: 'CEO, Apex Solutions',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-28 bg-zinc-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-brand-blue/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#ffb84d] text-sm font-bold uppercase tracking-widest mb-4">Proven Results</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5">
            Numbers that{' '}
            <span className="text-gradient">speak for themselves</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Real outcomes from real clients. No vanity metrics — just revenue-driving results.
          </p>
        </motion.div>

        {/* Result cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-[28px] p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 border border-white/5 rounded-full px-2.5 py-1">
                    {r.tag}
                  </span>
                </div>
                <p className="text-4xl font-black text-gradient">{r.metric}</p>
                <p className="text-white font-bold text-sm">{r.label}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{r.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-[28px] p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#ffb84d] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-zinc-500 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
