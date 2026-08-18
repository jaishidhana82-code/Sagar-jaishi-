import React from 'react';
import { Phone, Calendar, ShieldCheck, Award, Clock, FileDown } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_PHONE_FORMATTED } from '../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenBrochure?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenBrochure }) => {
  return (
    <section id="home" className="pt-28 pb-14 md:pt-36 md:pb-20 bg-[#FDFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Bento Card with #0A1128 and #FFD700 highlights */}
        <div className="bg-[#0A1128] rounded-[40px] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFD700] rounded-full opacity-15 blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#10B981] rounded-full opacity-10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Bold Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Star Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs">
                <span className="text-[#FFD700] text-sm">★★★★★</span>
                <span className="text-[11px] font-black uppercase tracking-widest text-white/90">
                  5.0 — Trusted Dog Care Service
                </span>
              </div>

              {/* Headline with leading-[0.95] and heavy black uppercase */}
              <div className="space-y-3">
                <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] uppercase tracking-tighter text-white">
                  Your Dog<br />
                  Deserves<br />
                  <span className="text-[#FFD700]">the BEST.</span>
                </h1>
                <p className="text-base sm:text-xl font-normal text-white/80 leading-snug max-w-xl pt-2">
                  Professional dog riding, exercise and care with love, safety and attention.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenBooking}
                  id="hero-book-btn"
                  className="bg-[#FFD700] hover:bg-[#ffe033] text-[#0A1128] px-7 py-4 rounded-full font-black uppercase text-xs sm:text-sm tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#FFD700]/20 inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#0A1128]" />
                  <span>Book a Service</span>
                </button>

                <a
                  href={`tel:${BUSINESS_PHONE}`}
                  id="hero-call-btn"
                  className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-6 py-4 rounded-full font-black uppercase text-xs sm:text-sm tracking-wider transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FFD700]" />
                  <span>Call: {BUSINESS_PHONE}</span>
                </a>

                {onOpenBrochure && (
                  <button
                    onClick={onOpenBrochure}
                    id="hero-brochure-btn"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-4 rounded-full font-bold uppercase text-xs tracking-wider transition-all inline-flex items-center gap-2"
                    title="Download Pricing & Service Brochure (PDF/HTML)"
                  >
                    <FileDown className="w-4 h-4 text-[#FFD700]" />
                    <span>Download PDF / HTML</span>
                  </button>
                )}
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/90">
                  <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider">100% Supervised</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Award className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider">Certified Team</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider">Live Updates</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual + Testimonial Pill */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-[32px] overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5 aspect-4/3 sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85"
                  alt="Happy energetic dog with outdoor specialist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFD700] text-[#0A1128] text-[10px] font-black uppercase tracking-widest mb-1">
                    Active & Safe
                  </span>
                  <p className="text-white text-xs font-bold leading-tight">
                    Joyful riding, energetic exercise, loving companion care.
                  </p>
                </div>
              </div>

              {/* Mini Testimonial Quote */}
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FFD700]">
                  <img
                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=100"
                    alt="Dog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium italic text-white/90">
                  "DOG STAR transformed my dog's routine! Professional, timely and super caring." — <span className="font-bold text-[#FFD700] not-italic">Rahul S.</span>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
