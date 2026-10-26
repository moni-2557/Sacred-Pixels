import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  MapPin, 
  Search, 
  AlertTriangle, 
  Sparkles, 
  Info,
  Clock,
  Compass
} from 'lucide-react';
import { CULTURAL_EVENTS, MONTH_NAMES } from '../data/calendarEvents';
import { DESTINATIONS } from '../data/destinations';
import { CulturalEvent, Destination } from '../types';

interface CulturalCalendarSectionProps {
  onSelectDestination: (dest: Destination) => void;
}

export const CulturalCalendarSection: React.FC<CulturalCalendarSectionProps> = ({
  onSelectDestination,
}) => {
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<number>(0); // 0 = all
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEvents = useMemo(() => {
    return CULTURAL_EVENTS.filter((evt) => {
      const matchDest =
        selectedDestinationId === 'all' || evt.destinationId === selectedDestinationId;
      const matchMonth =
        selectedMonth === 0 || evt.month === selectedMonth;
      const matchSearch =
        evt.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.destinationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.culturalSignificance.toLowerCase().includes(searchQuery.toLowerCase());

      return matchDest && matchMonth && matchSearch;
    });
  }, [selectedDestinationId, selectedMonth, searchQuery]);

  return (
    <section id="calendar" className="py-12 lg:py-20 bg-[#F4EFE6]/50 border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A84420] mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Seasonal Heritage Traditions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A382B]">
            Cultural Calendar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C6B61]">
            Explore ancestral festivals, solstitial alignments, and classical ceremonies celebrated across sacred world destinations.
          </p>
        </div>

        {/* Mandatory Sample Data Academic Disclaimer Banner */}
        <div className="mb-8 p-4 bg-[#FDF5E6] border border-[#E5C158] rounded-2xl flex items-start gap-3 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#5C451D] leading-relaxed">
            <span className="font-bold text-[#1A382B]">Academic Prototype Data Notice: </span>
            The cultural events displayed below are representative sample data compiled for educational and cultural discovery. While they illustrate genuine regional traditions (such as the Mamallapuram Dance Festival, Inti Raymi solstice rites, and equinox solar alignments), <strong>they are not verified live upcoming travel dates</strong>. Lunar calendars and government permits vary annually; always consult official cultural tourism boards before making travel arrangements.
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-[#D9CFC0] shadow-sm mb-8 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#86958A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cultural festivals, dances, or ceremonies..."
                className="w-full pl-10 pr-4 py-2 bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl text-xs sm:text-sm text-[#1E2922] placeholder:text-[#86958A] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
              />
            </div>

            {/* Destination Dropdown */}
            <div className="md:col-span-6">
              <select
                value={selectedDestinationId}
                onChange={(e) => setSelectedDestinationId(e.target.value)}
                className="w-full bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
              >
                <option value="all">All Cultural Destinations</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.country})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Month Filter Buttons (Segmented Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1">
            <span className="text-xs font-semibold text-[#86958A] mr-2 shrink-0">Month:</span>
            {MONTH_NAMES.map((m, index) => {
              const isSelected = selectedMonth === index;
              return (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(index)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A382B] text-white shadow-xs'
                      : 'bg-[#F4EFE6] text-[#445348] hover:text-[#1A382B] hover:bg-[#EAE2D5]'
                  }`}
                >
                  {m}
                </button>
              );
            })}
          </div>

        </div>

        {/* Events Cards Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const matchingDest = DESTINATIONS.find((d) => d.id === event.destinationId);

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl border border-[#E3DAC9] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Top destination & month kicker */}
                    <div className="flex items-center justify-between gap-2 text-xs text-[#C85A32] font-semibold mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{event.destinationName}</span>
                      </span>
                      <span className="bg-[#F4EFE6] text-[#1A382B] px-2 py-0.5 rounded font-mono text-[11px]">
                        {event.monthName}
                      </span>
                    </div>

                    {/* Event Name */}
                    <h3 className="font-display text-lg font-bold text-[#1A382B]">
                      {event.eventName}
                    </h3>
                    {event.nativeEventName && (
                      <div className="text-xs font-serif text-[#86958A] mt-0.5">
                        {event.nativeEventName}
                      </div>
                    )}

                    {/* Timing description */}
                    <div className="mt-2 text-xs text-[#718076] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A84420]" />
                      <span>{event.timingDesc}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-[#445348] leading-relaxed">
                      {event.description}
                    </p>

                    {/* Cultural Significance */}
                    <div className="mt-4 p-3 bg-[#FBF8F3] rounded-xl border border-[#ECE4D5] text-xs text-[#324137]">
                      <span className="font-bold text-[#1A382B] block mb-0.5">Cultural Significance:</span>
                      <span>{event.culturalSignificance}</span>
                    </div>

                    {/* Visitor Tip */}
                    <div className="mt-3 text-[11px] text-[#6B7970] italic">
                      💡 <strong>Tip:</strong> {event.visitorTip}
                    </div>
                  </div>

                  {/* Card Footer Button to view destination */}
                  {matchingDest && (
                    <div className="mt-5 pt-3 border-t border-[#F0EBE1]">
                      <button
                        onClick={() => onSelectDestination(matchingDest)}
                        className="w-full text-xs font-semibold py-2 px-3 rounded-lg bg-[#F4EFE6] hover:bg-[#1A382B] hover:text-white text-[#1A382B] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>View {matchingDest.name} Details</span>
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#D9CFC0] p-6 max-w-md mx-auto">
            <Calendar className="w-10 h-10 text-[#C85A32] mx-auto mb-2" />
            <h3 className="font-display text-base font-bold text-[#1A382B]">No Events Found</h3>
            <p className="text-xs text-[#6B7970] mt-1">
              Try selecting "All Months" or clearing the destination search filter.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
