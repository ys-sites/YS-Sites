import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
          {/* Left: Logo + Name + Social icons */}
          <div className="flex items-start gap-5 shrink-0">
            {/* Logo */}
            <button
              onClick={() => window.location.reload()}
              className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img src="/YS.png" alt="YS Marketing Solutions" className="h-20 w-auto" />
            </button>

            {/* Name + social icons stacked */}
            <div className="flex flex-col justify-center gap-4">
              <span className="text-2xl font-bold tracking-tight leading-tight">YS Marketing Solutions</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/ys.sites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex-1 flex flex-col justify-center md:pt-2">
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              We engineer high-performance digital experiences that transform visitors into loyal customers. By combining cutting-edge design with data-driven strategy, we help ambitious brands scale their online presence and dominate their market.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="mailto:cloud@ysdev.ca"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/50 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-brand-blue transition-colors duration-200" />
                </div>
                <span className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                  cloud@ysdev.ca
                </span>
              </a>
              <a
                href="tel:438-379-6417"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/50 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-brand-blue transition-colors duration-200" />
                </div>
                <span className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                  438-379-6417
                </span>
              </a>
            </div>
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
