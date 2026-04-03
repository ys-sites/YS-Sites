import { motion } from 'framer-motion';
import { ClipboardList, Rocket, LineChart, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Free Audit & Strategy Call',
    description:
      "We analyze your current website, traffic, and conversion funnel — then map out exactly where revenue is being left on the table and how we'll fix it.",
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Build & Launch',
    description:
      "Our team executes the full build in record time. Landing pages, automation flows, and lead systems go live fast — typically within 7–14 days.",
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Track & Optimize',
    description:
      'Every click, form fill, and conversion is tracked. We run continuous split tests and optimization cycles to compound your results month over month.',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Scale & Expand',
    description:
      'Once the system is profitable, we scale spend and expand into new channels — ensuring your growth is sustainable and your pipeline never runs dry.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[160px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#ffb84d] text-sm font-bold uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5">
            A system built for{' '}
            <span className="text-gradient">predictable growth</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            No guesswork. No retainers for reports. A clear, proven four-step process that turns your website into a revenue engine.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon bubble */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-zinc-900 border border-white/8 rounded-3xl flex items-center justify-center">
                      <Icon className="w-9 h-9 text-brand-purple" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-purple rounded-full text-[10px] font-black text-white flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 glass rounded-[32px] p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              Ready to start step one?
            </h3>
            <p className="text-zinc-400">
              It's free, takes 20 minutes, and you'll leave with a clear action plan.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center bg-[#ffb84d] hover:bg-[#ffa726] text-black font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-xl shadow-orange-500/20"
          >
            Book Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
