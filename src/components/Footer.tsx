export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-xl font-black tracking-tight mb-3">
              <span className="text-white">YS</span>
              <span className="text-gradient"> Marketing</span>
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              High-performance websites and AI-driven systems that help you scale your leads and maximize conversion rates.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <a href="#services" className="text-zinc-500 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="text-zinc-500 hover:text-white transition-colors">Contact</a>
            <a href="#results" className="text-zinc-500 hover:text-white transition-colors">Results</a>
            <a href="mailto:hello@ysdev.ca" className="text-zinc-500 hover:text-white transition-colors">Email Us</a>
            <a href="#process" className="text-zinc-500 hover:text-white transition-colors">Process</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {year} YS Marketing Solutions. All rights reserved.</p>
          <p>
            Built by{' '}
            <a href="https://ysdev.ca" className="hover:text-zinc-400 transition-colors">
              ysdev.ca
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
