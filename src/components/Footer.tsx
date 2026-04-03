import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Logo and Description */}
          <div>
            <button 
              onClick={() => window.location.reload()} 
              className="flex items-center gap-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="font-bold text-xl tracking-tight">YS Marketing Solutions</span>
            </button>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
              We engineer high-performance digital experiences that transform visitors into loyal customers. By combining cutting-edge design with data-driven strategy, we help ambitious brands scale their online presence and dominate their market.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ys.sites/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col justify-center md:items-end">
            <div className="space-y-6">
              <a 
                href="mailto:cloud@ysdev.ca" 
                className="flex items-center gap-4 md:justify-end group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/50 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-brand-blue transition-colors duration-200" />
                </div>
                <span className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                  cloud@ysdev.ca
                </span>
              </a>
              <a 
                href="tel:438-379-6417" 
                className="flex items-center gap-4 md:justify-end group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/50 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-brand-blue transition-colors duration-200" />
                </div>
                <span className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
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
