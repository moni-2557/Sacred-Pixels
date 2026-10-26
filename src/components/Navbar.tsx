import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Sparkles, 
  Calculator, 
  Calendar, 
  Bookmark, 
  Info, 
  Glasses, 
  Menu, 
  X,
  Wifi,
  WifiOff
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  savedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const navItems = [
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'guide', label: 'AI Guide', icon: Sparkles },
    { id: 'estimator', label: 'Cost Estimator', icon: Calculator },
    { id: 'calendar', label: 'Cultural Calendar', icon: Calendar },
    { id: 'saved', label: 'Saved Places', icon: Bookmark, badge: savedCount },
    { id: 'about', label: 'About & Impact', icon: Info },
    { id: 'ar', label: 'AR Preview', icon: Glasses, subtle: 'Coming Soon' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#E3DAC9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Branding */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A382B] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A382B] via-[#234938] to-[#C85A32] flex items-center justify-center text-white shadow-md shadow-[#1A382B]/20 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-[#E5C158]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
                <polyline points="2 15.5 12 8.5 22 15.5" />
                <line x1="12" y1="2" x2="12" y2="8.5" />
              </svg>
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-[#1A382B] block leading-none">
                SACRED PIXELS
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#A84420] uppercase block mt-1">
                Cultural Exploration
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A382B] ${
                    isActive
                      ? 'text-[#1A382B] font-semibold bg-[#1A382B]/8'
                      : 'text-[#445348] hover:text-[#1A382B] hover:bg-[#1A382B]/4'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C85A32]' : 'text-[#7D8A80]'}`} />
                  <span>{item.label}</span>

                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-[#C85A32] text-white text-[10px] font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {item.subtle && (
                    <span className="ml-1 text-[9px] uppercase tracking-wider text-[#9E8B5B] font-semibold">
                      · {item.subtle}
                    </span>
                  )}

                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C85A32] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action & Connectivity Status */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Offline/Online subtle indicator */}
            <div
              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md border ${
                isOnline
                  ? 'border-[#2E5E44]/30 text-[#1F4C35] bg-[#E8F2EC]/60'
                  : 'border-[#C85A32]/40 text-[#9E3917] bg-[#FBEBE5]'
              }`}
              title={isOnline ? 'Online with live Gemini AI connectivity' : 'Offline mode: Cached places & curated guides active'}
            >
              {isOnline ? (
                <>
                  <Wifi className="w-3.5 h-3.5 text-[#2E5E44]" />
                  <span className="text-[11px]">Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span className="text-[11px]">Offline Cache</span>
                </>
              )}
            </div>

            <button
              onClick={() => handleNavClick('guide')}
              className="bg-[#1A382B] hover:bg-[#234938] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-sm shadow-[#1A382B]/20 flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>AI Guide</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('saved')}
              className="p-2 text-[#445348] hover:text-[#1A382B] relative"
              aria-label="View Saved Places"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C85A32] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A382B] hover:bg-[#1A382B]/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E3DAC9] bg-[#FBF8F3] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-[#1A382B] text-white'
                      : 'text-[#324137] hover:bg-[#1A382B]/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#E5C158]' : 'text-[#7D8A80]'}`} />
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.subtle && (
                      <span className={`text-[10px] ${isActive ? 'text-[#E5C158]' : 'text-[#8C7A4E]'}`}>
                        {item.subtle}
                      </span>
                    )}
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${isActive ? 'bg-white text-[#1A382B]' : 'bg-[#C85A32] text-white'}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E3DAC9] flex items-center justify-between">
            <span className="text-xs text-[#6B7970]">
              Status: {isOnline ? 'Online (Gemini Ready)' : 'Offline (Local Cache Active)'}
            </span>
            <button
              onClick={() => handleNavClick('guide')}
              className="bg-[#C85A32] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch AI Guide</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
