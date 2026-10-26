import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { Destination, Region } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from './DestinationCard';

interface ExploreSectionProps {
  savedDestinationIds: string[];
  onToggleSave: (id: string) => void;
  onViewDetails: (destination: Destination) => void;
  onOpenAiGuide: (destination: Destination) => void;
  initialSearchQuery?: string;
}

export const ExploreSection: React.FC<ExploreSectionProps> = ({
  savedDestinationIds,
  onToggleSave,
  onViewDetails,
  onOpenAiGuide,
  initialSearchQuery = '',
}) => {
  const [search, setSearch] = useState(initialSearchQuery);
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [sortBy, setSortBy] = useState<'name' | 'region' | 'era'>('name');

  const regions: (Region | 'All')[] = [
    'All',
    'Asia',
    'Europe',
    'Americas',
    'Middle East & Africa',
  ];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.country.toLowerCase().includes(search.toLowerCase()) ||
        d.city.toLowerCase().includes(search.toLowerCase()) ||
        d.architecturalStyle.toLowerCase().includes(search.toLowerCase()) ||
        d.shortDescription.toLowerCase().includes(search.toLowerCase());

      const matchesRegion =
        selectedRegion === 'All' || d.region === selectedRegion;

      return matchesSearch && matchesRegion;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'region') return a.region.localeCompare(b.region);
      return a.historicalEra.localeCompare(b.historicalEra);
    });
  }, [search, selectedRegion, sortBy]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedRegion('All');
    setSortBy('name');
  };

  return (
    <section id="explore" className="py-12 lg:py-20 border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A84420]">
              Global Sacred Heritage Catalog
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A382B] mt-1">
              Explore Destinations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C6B61] max-w-2xl">
              From the 8th-century shore sanctuaries of Tamil Nadu to the misty peaks of the Andes, experience human spiritual devotion and architectural genius.
            </p>
          </div>

          <div className="text-xs text-[#718076] font-medium">
            Showing <span className="font-bold text-[#1A382B]">{filteredDestinations.length}</span> of {DESTINATIONS.length} sacred monuments
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#D9CFC0] shadow-sm mb-8 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#86958A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by monument name, country, or keyword..."
                className="w-full pl-10 pr-4 py-2 bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl text-sm text-[#1E2922] placeholder:text-[#86958A] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#86958A] hover:text-[#1A382B]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-xs text-[#6B7970] font-medium whitespace-nowrap">
                Sort:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FBF8F3] border border-[#D9CFC0] text-xs font-semibold text-[#1A382B] rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
              >
                <option value="name">Monument Name (A-Z)</option>
                <option value="region">Geographic Region</option>
                <option value="era">Historical Era</option>
              </select>
            </div>
          </div>

          {/* Region Tabs (Interactive Segmented Control compliant with frontend design skill) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-1">
            <span className="text-xs font-semibold text-[#86958A] mr-2 shrink-0">Region:</span>
            {regions.map((region) => {
              const isActive = selectedRegion === region;
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#1A382B] text-white shadow-xs'
                      : 'bg-[#F4EFE6] text-[#445348] hover:text-[#1A382B] hover:bg-[#EAE2D5]'
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>

        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                isSaved={savedDestinationIds.includes(destination.id)}
                onToggleSave={onToggleSave}
                onViewDetails={onViewDetails}
                onOpenAiGuide={onOpenAiGuide}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#D9CFC0] p-8 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center mx-auto text-[#C85A32] mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1A382B]">No Destinations Matched</h3>
            <p className="text-xs sm:text-sm text-[#6B7970] mt-1">
              We couldn't find any monuments matching "{search}". Try searching for another country or clearing your region filter.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 bg-[#1A382B] text-white text-xs font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-1.5 cursor-pointer hover:bg-[#234938] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
