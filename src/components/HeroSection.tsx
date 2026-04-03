import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-purple/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-80 bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 text-sm text-zinc-400"
        >
          <Zap className="w-3.5 h-3.5 text-[#ffb84d]" />
          Trusted by growth-stage businesses
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.03] tracking-tight mb-6"
        >
          Turn Clicks Into{' '}
          <span className="text-gradient block">Paying Clients</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          High-performance websites and AI-driven lead systems engineered to
          maximize conversions and scale your revenue — not just your traffic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ffb84d] hover:bg-[#ffa726] text-black font-bold text-base px-8 py-4 rounded-full transition-colors duration-200 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40"
          >
            Get Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-colors duration-200"
          >
            See Our Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '3×', label: 'Avg. Lead Volume Increase' },
            { value: '47%', label: 'Higher Conversion Rate' },
            { value: '< 14d', label: 'Time to First Results' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/3 border border-white/5 rounded-2xl px-4 py-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-black text-gradient mb-1">{stat.value}</p>
              <p className="text-zinc-500 text-xs leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
