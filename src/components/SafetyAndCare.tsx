import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Heart, 
  Zap, 
  MessageSquare, 
  Check, 
  Droplet, 
  MapPin, 
  Camera, 
  Award,
  PhoneCall
} from 'lucide-react';
import { SAFETY_PILLARS, BUSINESS_PHONE } from '../data/mockData';

export const SafetyAndCare: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'MessageSquare':
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  const activePillar = SAFETY_PILLARS[activePillarIndex];

  return (
    <section id="safety" className="py-20 bg-[#FDFCFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 text-[#047857] text-[11px] font-black uppercase tracking-widest">
            <span>Safety & Protocol</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
            Safety First. Care Always.
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600">
            Handled carefully, monitored during all activities, and treated with gentle patience and respect.
          </p>
        </div>

        {/* 5 Pillars Selector in Rounded Bento Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {SAFETY_PILLARS.map((pillar, idx) => {
            const isActive = activePillarIndex === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarIndex(idx)}
                className={`p-5 rounded-[28px] text-left transition-all duration-200 flex flex-col justify-between border-2 ${
                  isActive
                    ? 'bg-[#0A1128] text-white border-[#FFD700] shadow-lg'
                    : 'bg-white text-[#0A1128] border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-3 ${
                  isActive ? 'bg-[#FFD700] text-[#0A1128]' : 'bg-slate-100 text-[#0A1128]'
                }`}>
                  {getPillarIcon(pillar.icon)}
                </div>
                <div>
                  <div className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-[#FFD700]' : 'text-slate-400'}`}>
                    Pillar 0{idx + 1}
                  </div>
                  <div className="font-heading text-sm font-black uppercase tracking-wide mt-0.5">
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Protocol Details */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-[36px] bg-white border-2 border-slate-200 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#0A1128] text-[#FFD700] rounded-2xl">
                  {getPillarIcon(activePillar.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#B45309]">Protocol Detail</span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A1128]">
                    {activePillar.title} Focus
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                {activePillar.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Execution Safeguards:
                </div>
                {activePillar.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5 font-bold" />
                    <span className="text-xs sm:text-sm text-[#0A1128] font-semibold">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Have handling questions?</span>
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="text-xs font-black uppercase tracking-widest text-[#0A1128] hover:text-[#B45309] inline-flex items-center gap-1.5 underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Emerald Green Safety Bento Card */}
          <div className="lg:col-span-4 bg-[#10B981] rounded-[36px] p-8 text-white flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-base font-black uppercase tracking-widest">
                  Live Safety Hub
                </h4>
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🛡️</span>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wide">Supervised Activity</div>
                    <div className="text-[11px] text-emerald-100 font-medium">100% 1-on-1 human eyes</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl">⚡</span>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wide">Instant Updates</div>
                    <div className="text-[11px] text-emerald-100 font-medium">WhatsApp photo drops</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl">🌿</span>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wide">Clean Trail Outings</div>
                    <div className="text-[11px] text-emerald-100 font-medium">Safe routes & hydration</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-400/40 text-xs font-medium text-emerald-100 leading-snug">
              Careful handling, positive praise, and utmost respect for every dog's personality.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
