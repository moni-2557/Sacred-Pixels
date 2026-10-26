import React from 'react';
import { MapPin, Bookmark, ExternalLink, Sparkles, Eye } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onViewDetails: (destination: Destination) => void;
  onOpenAiGuide: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  isSaved,
  onToggleSave,
  onViewDetails,
  onOpenAiGuide,
}) => {
  return (
    <article className="group bg-white rounded-2xl border border-[#E3DAC9] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Destination Image with Bookmark & Region Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE4D5]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Subtle Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Region & Era Watermark */}
        <div className="absolute bottom-3 left-3 text-white text-xs font-medium drop-shadow-md flex items-center gap-2">
          <span className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] uppercase tracking-wider text-[#F3E8C8]">
            {destination.region}
          </span>
          <span className="text-white/80 text-[11px] truncate max-w-[200px]">
            {destination.historicalEra.split('(')[0].trim()}
          </span>
        </div>

        {/* Quick Save Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(destination.id);
          }}
          aria-label={isSaved ? `Remove ${destination.name} from saved` : `Save ${destination.name}`}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
            isSaved
              ? 'bg-[#C85A32] text-white shadow-md'
              : 'bg-black/30 hover:bg-black/50 text-white'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location Kicker */}
          <div className="flex items-center gap-1.5 text-xs text-[#C85A32] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.city}, {destination.country}</span>
          </div>

          {/* Destination Title & Native Script */}
          <div className="mt-1.5 flex items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-[#1A382B] group-hover:text-[#C85A32] transition-colors">
              {destination.name}
            </h3>
            {destination.nativeName && (
              <span className="text-xs font-serif text-[#86958A] truncate max-w-[120px]">
                {destination.nativeName}
              </span>
            )}
          </div>

          {/* Unboxed Metadata (Zero-Pill discipline) */}
          <div className="mt-2 text-xs text-[#6B7970] flex items-center gap-2 flex-wrap">
            <span>{destination.architecturalStyle.split(' ')[0]} Style</span>
            <span aria-hidden="true">·</span>
            <span>Est. ₹{destination.sampleCostsINR.lodgingPerNight.toLocaleString('en-IN')}/night</span>
          </div>

          {/* Short Description */}
          <p className="mt-3 text-xs sm:text-sm text-[#445348] line-clamp-3 leading-relaxed">
            {destination.shortDescription}
          </p>
        </div>

        {/* Working Action Buttons */}
        <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex flex-col gap-2">
          
          <div className="flex items-center gap-2">
            {/* View Details Button */}
            <button
              onClick={() => onViewDetails(destination)}
              className="flex-1 bg-[#1A382B] hover:bg-[#234938] text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </button>

            {/* AI Guide Shortcut */}
            <button
              onClick={() => onOpenAiGuide(destination)}
              title="Generate Multilingual AI Guide"
              className="bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#1A382B] border border-[#D9CFC0] text-xs font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="hidden sm:inline">AI Guide</span>
            </button>
          </div>

          {/* Bottom links: Google Maps & Save status toggle */}
          <div className="flex items-center justify-between text-xs pt-1">
            <a
              href={destination.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C6B61] hover:text-[#1A382B] hover:underline flex items-center gap-1 font-medium transition-colors"
            >
              <ExternalLink className="w-3 h-3 text-[#C85A32]" />
              <span>Open in Google Maps</span>
            </a>

            <button
              onClick={() => onToggleSave(destination.id)}
              className={`font-medium transition-colors cursor-pointer ${
                isSaved ? 'text-[#C85A32]' : 'text-[#7D8A80] hover:text-[#1A382B]'
              }`}
            >
              {isSaved ? 'Saved in offline list' : '+ Save Place'}
            </button>
          </div>

        </div>

      </div>
    </article>
  );
};
