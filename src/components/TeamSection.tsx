import React from 'react';
import { Users, Award, ShieldCheck, Heart } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';
import { TeamMember } from '../types';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1128] text-[#FFD700] text-[11px] font-black uppercase tracking-widest">
            <span>Specialist Staff</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
            Meet Our DOG STAR Team
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600">
            5 certified, background-verified canine enthusiasts dedicated to active exercise and gentle care.
          </p>
        </div>

        {/* 5 Employee Profiles in Bold Typography Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member: TeamMember, idx: number) => (
            <div
              key={member.id}
              className="bg-[#FDFCFB] rounded-[32px] border-2 border-slate-200/90 hover:border-[#FFD700] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 p-3 pb-0">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-200 group-hover:border-[#FFD700] transition-colors bg-slate-50">
                    <img
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    Role #{idx + 1}
                  </span>
                  <h3 className="font-heading text-base font-black uppercase tracking-tight text-[#0A1128] mt-0.5">
                    {member.name}
                  </h3>
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#B45309] mt-0.5">
                    {member.role}
                  </div>
                  <p className="mt-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Specialties */}
              <div className="px-5 pb-5 pt-0">
                <div className="pt-3 border-t border-slate-200/70 flex flex-wrap justify-center gap-1.5">
                  {member.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Friendly Message Banner */}
        <div className="mt-12 bg-[#0A1128] rounded-[36px] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
              Team Motto
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              “Our team treats every dog like a DOG STAR.”
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              Gentle patience, continuous hydration, and energetic workouts for all breeds.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 px-6 py-3.5 rounded-full border border-white/15 flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            <span className="text-xs font-black uppercase tracking-wider text-white">
              100% Background Verified
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
