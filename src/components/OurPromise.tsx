import React from 'react';
import { 
  Star, 
  HeartHandshake, 
  ShieldCheck, 
  Smile, 
  Trees, 
  Clock, 
  PhoneCall, 
  Sparkles,
  Heart,
  CheckCircle
} from 'lucide-react';
import { OUR_PROMISES } from '../data/mockData';

export const OurPromise: React.FC = () => {
  const getPromiseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#10B981]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-indigo-400" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-400" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-[#FFD700]" />;
      case 'Sparkle':
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="promise" className="py-20 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFD700] text-[11px] font-black uppercase tracking-widest border border-white/15">
            <span>Our Commitment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            The DOG STAR Promise
          </h2>
          <p className="text-sm sm:text-base font-normal text-white/80">
            8 core standards upheld on every single ride and daily session.
          </p>
        </div>

        {/* 8-Point Promises Grid in Rounded Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUR_PROMISES.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-[32px] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFD700]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getPromiseIcon(item.icon)}
                </div>
                <h3 className="font-heading text-base font-black uppercase tracking-wide text-white group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-white/70 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight quote banner */}
        <div className="mt-14 text-center max-w-2xl mx-auto p-8 rounded-[32px] bg-white/5 border border-white/10">
          <p className="font-heading text-lg sm:text-xl font-black uppercase tracking-wide text-[#FFD700]">
            “Our team treats every dog like a DOG STAR.”
          </p>
        </div>

      </div>
    </section>
  );
};
