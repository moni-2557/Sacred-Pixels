import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Bookmark, 
  ExternalLink, 
  Sparkles, 
  Compass, 
  Calendar, 
  ShieldCheck, 
  AlertCircle, 
  Camera, 
  Sun,
  Coins
} from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenAiGuide: (destination: Destination) => void;
  onEstimateTrip: (destination: Destination) => void;
  onSelectRelated: (dest: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  isSaved,
  onToggleSave,
  onOpenAiGuide,
  onEstimateTrip,
  onSelectRelated,
}) => {
  const [activeTab, setActiveTab] = useState<'significance' | 'architecture' | 'travelTips'>('significance');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!destination) return null;

  const relatedDestinations = DESTINATIONS.filter((d) =>
    destination.relatedDestinationIds.includes(d.id)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-[#FBF8F3] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#D9CFC0] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar & Image Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-[#ECE4D5] shrink-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Save Button */}
          <button
            onClick={() => onToggleSave(destination.id)}
            className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer ${
              isSaved
                ? 'bg-[#C85A32] text-white shadow-md'
                : 'bg-black/40 hover:bg-black/60 text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved in Itinerary' : 'Save Place'}</span>
          </button>

          {/* Title Header inside Hero */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white">
            <div className="flex items-center gap-2 text-xs text-[#E5C158] font-medium mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.city}, {destination.country}</span>
              <span>·</span>
              <span>{destination.region}</span>
            </div>
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                {destination.name}
              </h2>
              {destination.nativeName && (
                <span className="text-sm font-serif text-[#F3E8C8]/90 italic">
                  {destination.nativeName}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Action Ribbon */}
        <div className="bg-white border-b border-[#E3DAC9] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-2 overflow-x-auto text-xs shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[#6B7970] font-medium hidden sm:inline">Coordinates:</span>
            <span className="text-[#1A382B] font-mono text-[11px] bg-[#F4EFE6] px-2 py-0.5 rounded">
              {destination.coordinates.lat.toFixed(4)}° N, {destination.coordinates.lng.toFixed(4)}° E
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={destination.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A382B] hover:text-[#C85A32] border border-[#D9CFC0] px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Google Maps</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenAiGuide(destination);
              }}
              className="bg-[#1A382B] hover:bg-[#234938] text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>AI Guide</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onEstimateTrip(destination);
              }}
              className="bg-[#C85A32] hover:bg-[#B34E2A] text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
            >
              <Coins className="w-3.5 h-3.5" />
              <span>Estimate Trip</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Key Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded-xl border border-[#E3DAC9]">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#86958A]">Historical Era</div>
              <div className="text-xs sm:text-sm font-semibold text-[#1A382B] mt-0.5">{destination.historicalEra}</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#E3DAC9]">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#86958A]">Architecture Style</div>
              <div className="text-xs sm:text-sm font-semibold text-[#1A382B] mt-0.5">{destination.architecturalStyle}</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#E3DAC9]">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#86958A]">Heritage Designation</div>
              <div className="text-xs sm:text-sm font-semibold text-[#C85A32] mt-0.5">{destination.unescoStatus}</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#D9CFC0]">
            <button
              onClick={() => setActiveTab('significance')}
              className={`pb-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'significance'
                  ? 'text-[#1A382B]'
                  : 'text-[#6B7970] hover:text-[#1A382B]'
              }`}
            >
              Cultural Significance
              {activeTab === 'significance' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C85A32]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'architecture'
                  ? 'text-[#1A382B]'
                  : 'text-[#6B7970] hover:text-[#1A382B]'
              }`}
            >
              Sacred Architecture & Geometry
              {activeTab === 'architecture' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C85A32]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('travelTips')}
              className={`pb-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'travelTips'
                  ? 'text-[#1A382B]'
                  : 'text-[#6B7970] hover:text-[#1A382B]'
              }`}
            >
              Traveler's Wisdom & Tips
              {activeTab === 'travelTips' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C85A32]" />
              )}
            </button>
          </div>

          {/* Tab Contents */}
          <div className="min-h-[160px]">
            {activeTab === 'significance' && (
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#324137] leading-relaxed">
                  {destination.fullSignificance}
                </p>
                <div className="p-4 bg-[#F2ECE1] rounded-xl border border-[#D9CFC0] text-xs sm:text-sm text-[#445348] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#2E5E44] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1A382B]">Conservation Status: </span>
                    Protected under international UNESCO conservation covenants and domestic archaeological ministries. Digital documentation via Sacred Pixels supports continuous risk monitoring and public education.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#324137] leading-relaxed">
                  {destination.architectureDetails}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#E3DAC9]">
                    <span className="font-semibold text-[#1A382B] block">Astronomical & Cardinal Alignment:</span>
                    <span className="text-[#5C6B61] mt-0.5 block">Oriented to solstices, equinoxes, and celestial cardinal axes to channel seasonal cosmic rhythms.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E3DAC9]">
                    <span className="font-semibold text-[#1A382B] block">Indigenous Master Craft:</span>
                    <span className="text-[#5C6B61] mt-0.5 block">Constructed with regional materials using sacred geometry formulas passed through hereditary artisan guilds.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'travelTips' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#E3DAC9]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] mb-1">
                    <Sun className="w-4 h-4" />
                    <span>Best Time to Visit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#445348]">{destination.travelTips.bestTime}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E3DAC9]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1A382B] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#2E5E44]" />
                    <span>Dress Code & Decorum</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#445348]">{destination.travelTips.dressCode}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E3DAC9]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D23] mb-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>Local Cultural Etiquette</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#445348]">{destination.travelTips.etiquette}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E3DAC9]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#445348] mb-1">
                    <Camera className="w-4 h-4 text-[#C85A32]" />
                    <span>Photography Guidelines</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#445348]">{destination.travelTips.photoTips}</p>
                </div>
              </div>
            )}
          </div>

          {/* Related Destinations */}
          {relatedDestinations.length > 0 && (
            <div className="pt-6 border-t border-[#D9CFC0]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86958A] mb-3 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Related Sacred Monuments across the Globe</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedDestinations.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-3 bg-white hover:bg-[#F8F5EE] border border-[#E3DAC9] hover:border-[#1A382B] rounded-xl text-left transition-all flex items-center gap-3 group cursor-pointer"
                  >
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-[#1A382B] group-hover:text-[#C85A32] truncate">
                        {rel.name}
                      </div>
                      <div className="text-[11px] text-[#718076] truncate">
                        {rel.country} · {rel.region}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
