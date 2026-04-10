import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto_auto] gap-10 mb-12">

          {/* Col 1: Logo + Name + Social */}
          <div className="flex items-start gap-4 md:col-span-1">
            <button
              onClick={() => window.location.reload()}
              className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity border border-white/20 rounded-lg p-1"
            >
              <img src="/YS.png" alt="YS Marketing Solutions" className="h-20 w-auto" />
            </button>
            <div className="flex flex-col justify-center gap-3 pt-1">
              <span className="text-xl font-bold tracking-tight leading-snug whitespace-nowrap">YS Marketing Solutions</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/ys.sites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Description */}
          <div className="md:col-span-1 flex items-start">
            <p className="text-zinc-400 text-sm leading-relaxed">
              We engineer high-performance digital experiences that transform visitors into loyal customers. By combining cutting-edge design with data-driven strategy, we help ambitious brands scale their online presence and dominate their market.
            </p>
          </div>

          {/* Col 3: Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-base mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:4384048385"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 text-white/60 shrink-0" />
                  4384048385
                </a>
              </li>
              <li>
                <a
                  href="mailto:cloud@ysdev.ca"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 text-white/60 shrink-0" />
                  cloud@ysdev.ca
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4 text-white/60 shrink-0" />
                  Montreal, Quebec
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-500 text-xs tracking-wide">
            © {new Date().getFullYear()} YS Marketing Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
