import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  Leaf, 
  Layers, 
  BookOpen, 
  HeartHandshake, 
  Cpu, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';

export const AboutImpactSection: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-20 bg-[#F4EFE6]/40 border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A84420] mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Academic Research & Vision</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A382B]">
            About Sacred Pixels & Global Impact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C6B61] leading-relaxed">
            A student-project prototype demonstrating how modern web technologies, responsible AI, and open access can protect and celebrate humanity’s sacred architectural memory.
          </p>
        </div>

        {/* Project Purpose Spotlight Card */}
        <div className="bg-white rounded-3xl border border-[#D9CFC0] p-6 sm:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                Our Academic Mission
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A382B]">
                Bridging Stone Sanctuary & Digital Consciousness
              </h3>
              <p className="text-sm sm:text-base text-[#445348] leading-relaxed">
                Ancient sacred monuments—from the Dravidian granite towers of the Shore Temple to the skyward spires of Angkor Wat—bear witness to human devotion, artistic brilliance, and ecological mastery. However, physical sites face unprecedented pressures: climate weathering, seismic vulnerability, and unsustainable mass tourism.
              </p>
              <p className="text-sm sm:text-base text-[#445348] leading-relaxed">
                <strong>Sacred Pixels</strong> addresses this challenge through a digital-first cultural exploration platform. By synthesizing authenticated architectural histories, native multilingual AI explanations, transparent travel economics, and offline caching, we make world heritage universally accessible while fostering ethical and respectful exploration.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FBF8F3] p-6 rounded-2xl border border-[#E3DAC9] space-y-4">
              <h4 className="font-display text-base font-bold text-[#1A382B] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2E5E44]" />
                <span>Core Design Principles</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-[#445348]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                  <span><strong>Zero-Exclusion Multilingualism:</strong> Native scholarly cultural explanations available in English, Tamil, and Hindi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                  <span><strong>Offline Integrity:</strong> No database or paid login required; fully operational via browser localStorage and speech synthesis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-2 shrink-0" />
                  <span><strong>Honest AI Architecture:</strong> Verified curated fallback guarantees zero broken states when API limits or network drops occur.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* UN Sustainable Development Goals (SDGs) Section */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A84420]">
              Global Alignment
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A382B] mt-1">
              Advancing UN Sustainable Development Goals
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7970] mt-1">
              Sacred Pixels is intentionally architected to support three specific United Nations 2030 targets:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* SDG 8 Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#D9CFC0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#A21942]/10 text-[#A21942] flex items-center justify-center font-bold text-lg mb-4">
                  SDG 8
                </div>
                <h4 className="font-display text-lg font-bold text-[#1A382B]">
                  Decent Work & Economic Growth
                </h4>
                <div className="text-xs font-semibold text-[#A21942] mt-0.5">
                  Target 8.9: Sustainable Tourism
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#445348] leading-relaxed">
                  Promotes community-centered heritage tourism that creates sustainable livelihoods for local artisan guilds, heritage guides, and cultural performers (such as traditional stone carvers in Mamallapuram and Quechua weavers in Peru).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-[11px] text-[#718076]">
                Focus: Ethical local expenditure & artisan empowerment
              </div>
            </div>

            {/* SDG 9 Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#D9CFC0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F36E25]/10 text-[#F36E25] flex items-center justify-center font-bold text-lg mb-4">
                  SDG 9
                </div>
                <h4 className="font-display text-lg font-bold text-[#1A382B]">
                  Industry, Innovation & Infrastructure
                </h4>
                <div className="text-xs font-semibold text-[#F36E25] mt-0.5">
                  Target 9.c: Universal ICT Access
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#445348] leading-relaxed">
                  Demonstrates digital innovation by deploying lightweight web technologies, server-side Gemini 3.8 Flash AI synthesis, and browser speech APIs without heavy app installations or expensive subscriptions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-[11px] text-[#718076]">
                Focus: Open digital heritage infrastructure & lightweight accessibility
              </div>
            </div>

            {/* SDG 11 Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#D9CFC0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FD9D24]/10 text-[#C85A32] flex items-center justify-center font-bold text-lg mb-4">
                  SDG 11
                </div>
                <h4 className="font-display text-lg font-bold text-[#1A382B]">
                  Sustainable Cities & Communities
                </h4>
                <div className="text-xs font-semibold text-[#C85A32] mt-0.5">
                  Target 11.4: Safeguarding Cultural Heritage
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#445348] leading-relaxed">
                  Directly responds to the imperative to strengthen efforts to protect and safeguard the world's cultural and natural heritage, raising civic awareness before travelers step onto fragile archaeological sites.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-[11px] text-[#718076]">
                Focus: Preserving ancient architecture & cultural identity
              </div>
            </div>

          </div>
        </div>

        {/* Technical Architecture Strip */}
        <div className="bg-[#1A382B] text-white p-6 sm:p-8 rounded-3xl shadow-lg">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E5C158] uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technology Stack & Student Prototype Blueprint</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold">
              Built for Speed, Privacy, and Offline Resilience
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
              Designed as a production-grade prototype using React 19, TypeScript, Tailwind CSS, and Express. The AI Cultural Guide utilizes Google’s official `@google/genai` TypeScript SDK via a secure server proxy with environment key isolation. No tracking cookies, no paywalls, and complete data privacy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
