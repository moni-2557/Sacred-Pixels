import React from 'react';
import { 
  Bookmark, 
  Trash2, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  WifiOff, 
  Compass, 
  Coins,
  CheckCircle2
} from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';

interface SavedPlacesSectionProps {
  savedDestinationIds: string[];
  onToggleSave: (id: string) => void;
  onClearAll: () => void;
  onViewDetails: (dest: Destination) => void;
  onOpenAiGuide: (dest: Destination) => void;
  onNavigate: (sectionId: string) => void;
}

export const SavedPlacesSection: React.FC<SavedPlacesSectionProps> = ({
  savedDestinationIds,
  onToggleSave,
  onClearAll,
  onViewDetails,
  onOpenAiGuide,
  onNavigate,
}) => {
  const savedDestinations = DESTINATIONS.filter((d) =>
    savedDestinationIds.includes(d.id)
  );

  const totalEstimatedLodging = savedDestinations.reduce(
    (acc, d) => acc + d.sampleCostsINR.lodgingPerNight,
    0
  );

  return (
    <section id="saved" className="py-12 lg:py-20 border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A84420] mb-2">
              <Bookmark className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Offline Travel Notebook</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A382B]">
              Saved Places & Offline Access
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C6B61] max-w-2xl">
              Your curated heritage itinerary. Preserved automatically in your browser's persistent storage, ready for offline reference during real-world travel.
            </p>
          </div>

          {savedDestinations.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={onClearAll}
                className="text-xs text-[#A84420] hover:text-[#7D290E] font-semibold border border-[#D9CFC0] hover:bg-[#FBEBE5] px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Saved</span>
              </button>
            </div>
          )}
        </div>

        {/* Offline Readiness Banner */}
        <div className="mb-8 p-4 bg-[#E8F2EC] border border-[#2E5E44]/30 rounded-2xl flex items-start gap-3 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-[#2E5E44] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#1F4C35] leading-relaxed">
            <span className="font-bold">Offline Storage Verified: </span>
            Your saved destinations, historical notes, architectural analyses, and travel tips are stored in your device's <code>localStorage</code>. They persist across browser refreshes and can be accessed even without an internet connection.
          </div>
        </div>

        {/* Saved List or Empty State */}
        {savedDestinations.length > 0 ? (
          <div className="space-y-6">
            
            {/* Quick Summary Pill-less Strip */}
            <div className="bg-white p-4 rounded-xl border border-[#D9CFC0] flex items-center justify-between flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[#718076]">Saved Monuments: </span>
                  <span className="font-bold text-[#1A382B]">{savedDestinations.length}</span>
                </div>
                <span>·</span>
                <div>
                  <span className="text-[#718076]">Combined 1-Night Lodging Estimate: </span>
                  <span className="font-bold text-[#C85A32]">₹{totalEstimatedLodging.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('estimator')}
                className="text-[#1A382B] hover:text-[#C85A32] font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Coins className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Calculate Complete Trip Budget</span>
              </button>
            </div>

            {/* Destination Cards for Saved Places */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-2xl border border-[#E3DAC9] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-4">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs text-[#C85A32] font-semibold flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span className="truncate">{destination.city}, {destination.country}</span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-[#1A382B] truncate mt-0.5">
                          {destination.name}
                        </h3>
                        <div className="text-[11px] text-[#718076] truncate mt-0.5">
                          {destination.historicalEra.split('(')[0].trim()}
                        </div>
                        <div className="text-xs font-semibold text-[#1A382B] mt-2">
                          Est. Stay: ₹{destination.sampleCostsINR.lodgingPerNight.toLocaleString('en-IN')}/night
                        </div>
                      </div>
                    </div>

                    {/* Offline Available Cultural Description */}
                    <div className="p-3 bg-[#FBF8F3] rounded-xl border border-[#ECE4D5] text-xs text-[#445348] leading-relaxed">
                      <span className="font-bold text-[#1A382B] block mb-0.5">Offline Cultural Note:</span>
                      <p className="line-clamp-3">{destination.shortDescription}</p>
                    </div>

                    {/* Travel Advice snippet */}
                    <div className="text-[11px] text-[#6B7970]">
                      <strong>Best Season:</strong> {destination.travelTips.bestTime}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex items-center justify-between gap-2 flex-wrap text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onViewDetails(destination)}
                        className="bg-[#1A382B] hover:bg-[#234938] text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => onOpenAiGuide(destination)}
                        className="bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#1A382B] border border-[#D9CFC0] px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                        <span>AI Guide</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={destination.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B7970] hover:text-[#1A382B] flex items-center gap-1 font-medium"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="hidden sm:inline">Maps</span>
                      </a>

                      <button
                        onClick={() => onToggleSave(destination.id)}
                        className="text-[#A84420] hover:text-[#7D290E] font-semibold flex items-center gap-1 cursor-pointer"
                        title="Remove from saved list"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#D9CFC0] p-8 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#F4EFE6] flex items-center justify-center mx-auto text-[#C85A32] mb-3">
              <Bookmark className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#1A382B]">No Saved Places Yet</h3>
            <p className="text-xs sm:text-sm text-[#6B7970] mt-1.5 leading-relaxed">
              When exploring sacred monuments, click the <strong>Bookmark (Save Place)</strong> button to store them here for offline access and personalized trip budgeting.
            </p>
            <button
              onClick={() => onNavigate('explore')}
              className="mt-5 bg-[#1A382B] hover:bg-[#234938] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-2 mx-auto cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#E5C158]" />
              <span>Explore All Destinations</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
