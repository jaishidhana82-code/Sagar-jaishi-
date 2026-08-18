import React, { useState, useEffect } from 'react';
import { Phone, Star, Menu, X, Calendar, FileDown } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_PHONE_FORMATTED } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenBrochure?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenBrochure }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Our Promise', href: '#promise' },
    { name: 'Safety & Care', href: '#safety' },
    { name: 'Our Team', href: '#team' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCFB]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-[#FDFCFB] py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Bold Typography Style */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none rounded-lg"
          >
            <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center font-black text-xl text-[#0A1128] shadow-sm group-hover:scale-105 transition-transform">
              ★
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter uppercase text-[#0A1128] leading-none">
                DOG <span className="text-[#FFD700] drop-shadow-xs">STAR</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
                Happy Dogs. Happy Owners.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Bold Uppercase Tracking */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest text-[#0A1128]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#B45309] hover:underline decoration-2 underline-offset-4 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                id="nav-pdf-brochure-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-[#FFD700] hover:text-[#0A1128] border border-slate-300 rounded-full transition-all"
                title="Download Service & Pricing Brochure (PDF/HTML)"
              >
                <FileDown className="w-3.5 h-3.5 text-slate-700" />
                <span>PDF / HTML</span>
              </button>
            )}

            <a
              href={`tel:${BUSINESS_PHONE}`}
              id="nav-call-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#0A1128] bg-white border-2 border-slate-200 hover:border-[#FFD700] rounded-full transition-all shadow-2xs"
              title="Call DOG STAR"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A1128]" />
              <span>{BUSINESS_PHONE_FORMATTED}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="nav-book-now-btn"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white bg-[#0A1128] hover:bg-black rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${BUSINESS_PHONE}`}
              className="p-2.5 rounded-full bg-[#FFD700] text-[#0A1128] font-black flex items-center justify-center shadow-xs"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-xl text-[#0A1128] hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FDFCFB] border-b-2 border-slate-200 shadow-xl py-6 px-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-black uppercase tracking-widest text-[#0A1128] hover:text-[#B45309] hover:bg-amber-50 rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              {onOpenBrochure && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FFD700] text-[#0A1128] rounded-full font-black uppercase text-xs tracking-wider shadow-xs"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF / HTML Brochure</span>
                </button>
              )}
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-white border-2 border-slate-200 text-[#0A1128] rounded-full font-black uppercase text-xs tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_PHONE}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0A1128] text-white rounded-full font-black uppercase text-xs tracking-widest shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#FFD700]" />
                <span>BOOK A SERVICE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
