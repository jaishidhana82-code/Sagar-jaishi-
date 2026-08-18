import React from 'react';
import { Star, Phone, Clock, MapPin, ShieldCheck, Heart, FileDown } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_PHONE_FORMATTED } from '../data/mockData';

interface FooterProps {
  onOpenBrochure?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure }) => {
  return (
    <footer className="bg-[#0A1128] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center font-black text-xl text-[#0A1128]">
                ★
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tighter uppercase text-white leading-none">
                  DOG <span className="text-[#FFD700]">STAR</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD700] mt-1">
                  Happy Dogs. Happy Owners.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
              Professional dog riding, structured outdoor workouts, and trusted full-care companion support.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-black uppercase tracking-wider text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Supervised</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-black uppercase tracking-wider text-white">
                <span className="text-[#FFD700]">★</span>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-[#FFD700]">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <li>
                <a href="#pricing" className="hover:text-[#FFD700] transition-colors">
                  1 Hour Riding (₹150)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#FFD700] transition-colors">
                  2 Hours Riding (₹300)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#FFD700] text-[#FFD700] transition-colors">
                  Monthly Plan (₹9,999/mo)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFD700] transition-colors">
                  Daily Dog Exercise
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFD700] transition-colors">
                  Dog Walking
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-[#FFD700]">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <li>
                <a href="#promise" className="hover:text-[#FFD700] transition-colors">
                  Our Promise
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-[#FFD700] transition-colors">
                  Safety First
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#FFD700] transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FFD700] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFD700] transition-colors">
                  FAQs
                </a>
              </li>
              {onOpenBrochure && (
                <li>
                  <button
                    onClick={onOpenBrochure}
                    className="hover:text-[#FFD700] text-[#FFD700] flex items-center gap-1.5 uppercase font-bold text-left transition-colors"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Brochure (PDF/HTML)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-[#FFD700]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="flex items-center gap-2 text-white hover:text-[#FFD700] font-black uppercase text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFD700]" />
                <span>{BUSINESS_PHONE_FORMATTED}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Mon – Sun: 6:00 AM – 9:30 PM</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Doorstep Pickups & Activity Routes</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line in Bold Typography Theme */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <div>
            © 2026 DOG STAR. ALL RIGHTS RESERVED. HAPPY DOGS. HAPPY OWNERS.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span>Taking New Bookings Now</span>
            </div>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
