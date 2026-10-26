import React from 'react';
import { Compass, Sparkles, Bookmark, Calendar, Calculator, Info, Glasses } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#12231B] text-[#D1DDD6] border-t border-[#234938] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#234938]">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A382B] via-[#234938] to-[#C85A32] flex items-center justify-center text-[#E5C158] shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                  <polyline points="2 15.5 12 8.5 22 15.5" />
                  <line x1="12" y1="2" x2="12" y2="8.5" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-white tracking-wider">
                SACRED PIXELS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A7B9AF] leading-relaxed max-w-sm">
              A digital cultural exploration platform dedicated to documenting, understanding, and ethically celebrating humanity's ancient spiritual monuments.
            </p>

            <div className="text-xs text-[#E5C158] font-medium pt-1">
              Student Project Prototype · Open Cultural Heritage Technology
            </div>
          </div>

          {/* Quick Navigational Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Platform Features
            </div>
            <ul className="space-y-1.5 text-xs text-[#A7B9AF]">
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Explore 8 Global Monuments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AI Multilingual Cultural Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trip Cost Estimator (INR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calendar')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cultural Calendar (Sample Events)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('saved')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Saved Places (Offline Access)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ar')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AR Preview (Coming Soon)
                </button>
              </li>
            </ul>
          </div>

          {/* Offline & Architecture Disclosure */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Offline Resilience Guarantee
            </div>
            <p className="text-xs text-[#A7B9AF] leading-relaxed">
              Every core feature—monument exploration, offline itinerary caching, trip cost calculations, calendar browsing, and curated guides in English, Tamil, and Hindi—works entirely within your browser without requiring an external database or paid API key.
            </p>
            <div className="text-[11px] text-[#789083]">
              UN Sustainable Development Goals 8, 9, & 11 Aligned.
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#789083]">
          <div>
            © {new Date().getFullYear()} Sacred Pixels Platform. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              Academic About & Impact
            </button>
            <span>·</span>
            <span>Zero Tracking Cookies</span>
            <span>·</span>
            <span>Ethical Tourism</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
