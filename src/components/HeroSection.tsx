import React, { useState } from 'react';
import { Search, Compass, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types';

interface HeroSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onNavigate: (sectionId: string) => void;
  onQuickSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectDestination,
  onNavigate,
  onQuickSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = searchQuery.trim()
    ? DESTINATIONS.filter((d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.architecturalStyle.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onQuickSearch(searchQuery.trim());
      onNavigate('explore');
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (dest: Destination) => {
    onSelectDestination(dest);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative subtle background motifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[#E5C158]/15 blur-3xl" />
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-[#C85A32]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Academic Project Context Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A84420] mb-4">
          <span>Student Project Prototype</span>
          <span aria-hidden="true">·</span>
          <span>Digital Cultural Heritage Platform</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#1A382B]">UNESCO World Heritage Focus</span>
        </div>

        {/* Main Title & Tagline */}
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A382B] leading-[1.12]">
            Sacred Pixels
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-serif text-[#C85A32] italic font-medium">
            Where Ancient Monuments Meet Digital Discovery
          </p>
          <p className="mt-5 text-base sm:text-lg text-[#445348] leading-relaxed max-w-2xl">
            Explore humanity’s most revered cultural sanctuaries. Journey through 8th-century Dravidian granite spires, Andean cloud fortresses, and Nile necropolises with authentic historical insights, multilingual AI explanations, transparent cost estimations, and offline travel memory.
          </p>
        </div>

        {/* Search Bar with live auto-suggest */}
        <div className="mt-8 max-w-2xl relative">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="relative w-full">
              <Search className="w-5 h-5 text-[#86958A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search monuments, countries, or styles (e.g. Shore Temple, Egypt, Khmer)..."
                className="w-full pl-12 pr-28 py-3.5 bg-white border border-[#D9CFC0] rounded-xl text-sm sm:text-base text-[#1E2922] placeholder:text-[#86958A] focus:outline-none focus:ring-2 focus:ring-[#1A382B] focus:border-transparent shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1A382B] hover:bg-[#234938] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>

          {/* Live Search Suggestions Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-[#D9CFC0] rounded-xl shadow-xl z-30 max-h-80 overflow-y-auto divide-y divide-[#F0EBE1]">
              <div className="p-2 text-[11px] font-semibold text-[#86958A] uppercase tracking-wider">
                Matching Cultural Destinations
              </div>
              {filteredSuggestions.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => handleSelectSuggestion(dest)}
                  className="w-full px-4 py-3 text-left hover:bg-[#F8F5EE] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-[#1A382B] group-hover:text-[#C85A32] transition-colors">
                        {dest.name}
                      </div>
                      <div className="text-xs text-[#718076] flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#C85A32]" />
                        <span>{dest.city}, {dest.country}</span>
                        <span>·</span>
                        <span>{dest.architecturalStyle.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#86958A] group-hover:translate-x-1 group-hover:text-[#1A382B] transition-all" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Navigational Buttons to Working Sections */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('explore')}
            className="bg-[#1A382B] hover:bg-[#234938] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-[#1A382B]/20 flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#E5C158]" />
            <span>Explore All 8 Destinations</span>
          </button>

          <button
            onClick={() => onNavigate('guide')}
            className="bg-[#C85A32] hover:bg-[#B34E2A] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-[#C85A32]/20 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#F3E8C8]" />
            <span>Launch Multilingual AI Guide</span>
          </button>

          <button
            onClick={() => onNavigate('estimator')}
            className="bg-white hover:bg-[#F2ECE1] text-[#1A382B] border border-[#D9CFC0] text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Trip Cost Estimator (INR)</span>
          </button>

          <button
            onClick={() => onNavigate('calendar')}
            className="bg-white hover:bg-[#F2ECE1] text-[#1A382B] border border-[#D9CFC0] text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Cultural Calendar</span>
          </button>
        </div>

        {/* Unboxed Metadata Stats Strip (Strict Anti-Slop Discipline) */}
        <div className="mt-12 pt-8 border-t border-[#E3DAC9] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#1A382B]">8 Sites</div>
            <div className="text-xs text-[#6B7970] mt-1">Cross-continental sacred heritage wonders</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#C85A32]">3 Languages</div>
            <div className="text-xs text-[#6B7970] mt-1">English, தமிழ் (Tamil), हिन्दी (Hindi)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#8C6D23]">100% Offline</div>
            <div className="text-xs text-[#6B7970] mt-1">Saved places persist in browser cache</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#1A382B]">UN SDGs</div>
            <div className="text-xs text-[#6B7970] mt-1">Promoting Goals 8, 9, & 11 heritage targets</div>
          </div>
        </div>

      </div>
    </section>
  );
};
