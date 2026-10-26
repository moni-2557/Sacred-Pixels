import React, { useState } from 'react';
import { 
  Glasses, 
  Layers, 
  Scan, 
  Sparkles, 
  Rotate3d, 
  ShieldAlert, 
  Smartphone, 
  Maximize2 
} from 'lucide-react';

export const ArPreviewSection: React.FC = () => {
  const [rotationY, setRotationY] = useState<number>(35);
  const [rotationX, setRotationX] = useState<number>(-15);
  const [selectedModel, setSelectedModel] = useState<'shore-spire' | 'pyramid-core' | 'colosseum-vault'>('shore-spire');

  return (
    <section id="ar" className="py-12 lg:py-20 border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Coming Soon Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/20 border border-[#B38E22]/40 text-[#8C6D23] text-xs font-bold uppercase tracking-wider mb-3">
            <Glasses className="w-3.5 h-3.5" />
            <span>Coming Soon – Augmented Reality</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A382B]">
            Spatial Heritage Projections
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C6B61]">
            Visualizing sacred architectural geometry through immersive spatial computing. Experience a preview of our upcoming Phase 2 WebXR pipeline.
          </p>
        </div>

        {/* Honest Non-Pretence Disclaimer Banner */}
        <div className="mb-10 p-4 bg-[#FBF8F3] border border-[#D9CFC0] rounded-2xl flex items-start gap-3 shadow-xs max-w-3xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#445348] leading-relaxed">
            <span className="font-bold text-[#1A382B]">Prototype Disclosure: </span>
            Live camera-based WebXR augmented reality is in active conceptual development and is <strong>not yet live</strong> in this release. The interactive 3D spatial artifact below is an SVG/CSS-3D interactive preview demonstrating how ancient structural spires will be rendered on mobile viewports in Phase 2.
          </div>
        </div>

        {/* Interactive 3D Spatial Simulator Box */}
        <div className="bg-[#1A382B] text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden max-w-4xl mx-auto border border-[#234938]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 3D Viewport */}
            <div className="lg:col-span-7 flex flex-col items-center">
              
              {/* Virtual Viewport Glass Frame */}
              <div className="relative w-full aspect-square max-w-[340px] bg-gradient-to-b from-[#0E2319] to-[#142D21] rounded-2xl border border-[#2E5E44]/50 flex items-center justify-center overflow-hidden p-6 shadow-inner">
                
                {/* Holographic Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(#E5C158 1px, transparent 1px), linear-gradient(90deg, #E5C158 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Perspective 3D Interactive CSS/SVG Wireframe */}
                <div 
                  className="relative transition-transform duration-100 ease-out flex items-center justify-center cursor-grab active:cursor-grabbing"
                  style={{
                    transform: `perspective(600px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {selectedModel === 'shore-spire' && (
                    <svg className="w-48 h-48 drop-shadow-[0_0_15px_rgba(229,193,88,0.5)]" viewBox="0 0 100 100" fill="none" stroke="#E5C158" strokeWidth="1.5">
                      {/* Tiered Vimana Pyramidal Spire */}
                      <polygon points="50,10 75,40 25,40" stroke="#F3E8C8" />
                      <polygon points="50,5 55,10 45,10" fill="#E5C158" />
                      <line x1="50" y1="10" x2="50" y2="40" strokeDasharray="2,2" />
                      {/* Mid Tier */}
                      <rect x="20" y="40" width="60" height="20" stroke="#E5C158" />
                      <line x1="35" y1="40" x2="35" y2="60" />
                      <line x1="65" y1="40" x2="65" y2="60" />
                      {/* Lower Tier / Sanctum */}
                      <rect x="12" y="60" width="76" height="30" stroke="#C85A32" strokeWidth="2" />
                      <polygon points="50,60 50,90" strokeDasharray="3,3" />
                      <circle cx="50" cy="75" r="5" stroke="#E5C158" fill="#1A382B" />
                    </svg>
                  )}

                  {selectedModel === 'pyramid-core' && (
                    <svg className="w-48 h-48 drop-shadow-[0_0_15px_rgba(200,90,50,0.5)]" viewBox="0 0 100 100" fill="none" stroke="#E5C158" strokeWidth="1.5">
                      {/* Great Pyramid wireframe */}
                      <polygon points="50,15 88,80 12,80" stroke="#E5C158" strokeWidth="2" />
                      <line x1="50" y1="15" x2="50" y2="80" stroke="#C85A32" />
                      <line x1="12" y1="80" x2="88" y2="80" />
                      {/* Internal chambers */}
                      <line x1="50" y1="48" x2="62" y2="48" stroke="#F3E8C8" strokeWidth="2" />
                      <line x1="50" y1="65" x2="38" y2="65" stroke="#F3E8C8" strokeWidth="2" />
                    </svg>
                  )}

                  {selectedModel === 'colosseum-vault' && (
                    <svg className="w-48 h-48 drop-shadow-[0_0_15px_rgba(229,193,88,0.5)]" viewBox="0 0 100 100" fill="none" stroke="#E5C158" strokeWidth="1.5">
                      {/* Roman Arches Array */}
                      <ellipse cx="50" cy="50" rx="42" ry="32" stroke="#E5C158" strokeWidth="1.8" />
                      <ellipse cx="50" cy="50" rx="30" ry="22" stroke="#C85A32" />
                      <ellipse cx="50" cy="50" rx="18" ry="12" stroke="#F3E8C8" strokeDasharray="3,3" />
                      <line x1="50" y1="18" x2="50" y2="82" stroke="#E5C158" opacity="0.6" />
                      <line x1="8" y1="50" x2="92" y2="50" stroke="#E5C158" opacity="0.6" />
                    </svg>
                  )}
                </div>

                {/* Spatial HUD Overlay Labels */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[#E5C158] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-ping" />
                  <span>SPATIAL_SIM: ROT Y={rotationY}°</span>
                </div>

                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/50">
                  AR PROTOTYPE V0.9
                </div>
              </div>

              {/* Rotation Sliders & Quick Spin Controls */}
              <div className="w-full max-w-[340px] mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1">
                    <Rotate3d className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Azimuth Rotation:</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#E5C158]">{rotationY}°</span>
                </div>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={rotationY}
                  onChange={(e) => setRotationY(parseInt(e.target.value))}
                  className="w-full accent-[#E5C158] h-1.5 bg-black/40 rounded-lg cursor-pointer"
                />

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setRotationY((prev) => (prev + 45) % 360)}
                    className="flex-1 py-1 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/90 transition-colors"
                  >
                    Rotate +45°
                  </button>
                  <button
                    onClick={() => {
                      setRotationX(-15);
                      setRotationY(35);
                    }}
                    className="py-1 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/90 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

            </div>

            {/* Right Information & Model Selector */}
            <div className="lg:col-span-5 space-y-5">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5C158]">
                  Select Spatial Mesh:
                </span>
                <div className="mt-2 space-y-2">
                  <button
                    onClick={() => setSelectedModel('shore-spire')}
                    className={`w-full p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      selectedModel === 'shore-spire'
                        ? 'bg-white/15 border-[#E5C158] text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Shore Temple Vimana Spire (Dravidian Geometry)
                  </button>
                  <button
                    onClick={() => setSelectedModel('pyramid-core')}
                    className={`w-full p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      selectedModel === 'pyramid-core'
                        ? 'bg-white/15 border-[#E5C158] text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Giza Great Pyramid Internal Chambers
                  </button>
                  <button
                    onClick={() => setSelectedModel('colosseum-vault')}
                    className={`w-full p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      selectedModel === 'colosseum-vault'
                        ? 'bg-white/15 border-[#E5C158] text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Flavian Amphitheatre Elliptical Vaulting
                  </button>
                </div>
              </div>

              {/* Planned Phase 2 Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E5C158]">
                  Phase 2 Feature Roadmap:
                </div>
                
                <div className="flex items-start gap-3 text-xs text-white/80">
                  <Smartphone className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">1:1 Scale Ground Anchoring: </span>
                    Project life-size ancient structures onto parklands and public squares using WebXR Hit-Test APIs.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-white/80">
                  <Scan className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">On-Site Relief & Glyph Scanner: </span>
                    Scan rock carvings at Mahabalipuram or Angkor Wat to overlay contextual archaeological translations.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-white/80">
                  <Layers className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Time-Lapse Architectural Reconstruction: </span>
                    Slide between modern weathered ruins and their original painted imperial grandeur in real time.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
