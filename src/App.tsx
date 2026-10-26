import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExploreSection } from './components/ExploreSection';
import { AiGuideSection } from './components/AiGuideSection';
import { CostEstimatorSection } from './components/CostEstimatorSection';
import { CulturalCalendarSection } from './components/CulturalCalendarSection';
import { SavedPlacesSection } from './components/SavedPlacesSection';
import { AboutImpactSection } from './components/AboutImpactSection';
import { ArPreviewSection } from './components/ArPreviewSection';
import { DestinationModal } from './components/DestinationModal';
import { Footer } from './components/Footer';
import { DESTINATIONS } from './data/destinations';
import { Destination } from './types';
import { 
  getSavedDestinationIds, 
  saveDestinationId, 
  removeDestinationId 
} from './services/storage';
import { Bookmark, Check, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [savedDestinationIds, setSavedDestinationIds] = useState<string[]>(() => getSavedDestinationIds());
  const [modalDestination, setModalDestination] = useState<Destination | null>(null);
  const [guideDestination, setGuideDestination] = useState<Destination>(DESTINATIONS[0]);
  const [initialSearchQuery, setInitialSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize toast notifications
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleSave = (id: string) => {
    const dest = DESTINATIONS.find((d) => d.id === id);
    const destName = dest ? dest.name : 'Destination';

    if (savedDestinationIds.includes(id)) {
      const updated = removeDestinationId(id);
      setSavedDestinationIds(updated);
      showToast(`Removed ${destName} from your saved places.`);
    } else {
      const updated = saveDestinationId(id);
      setSavedDestinationIds(updated);
      showToast(`Saved ${destName} for offline access!`);
    }
  };

  const handleClearAllSaved = () => {
    try {
      localStorage.removeItem('sacred_pixels_saved_destinations_v1');
      setSavedDestinationIds([]);
      showToast('All saved places have been cleared from local storage.');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenAiGuide = (dest: Destination) => {
    setGuideDestination(dest);
    handleNavigate('guide');
  };

  const handleEstimateTrip = (dest: Destination) => {
    setGuideDestination(dest);
    handleNavigate('estimator');
  };

  const handleQuickSearch = (query: string) => {
    setInitialSearchQuery(query);
    handleNavigate('explore');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#1E2922] font-sans selection:bg-[#C85A32] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A382B] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#E5C158]/40 animate-in fade-in slide-in-from-bottom-3 duration-200 max-w-sm">
          <div className="w-7 h-7 rounded-full bg-[#C85A32] flex items-center justify-center shrink-0">
            <Bookmark className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-medium leading-snug flex-1">
            {toastMessage}
          </span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        savedCount={savedDestinationIds.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero & Introduction Section */}
        <HeroSection
          onSelectDestination={(dest) => setModalDestination(dest)}
          onNavigate={handleNavigate}
          onQuickSearch={handleQuickSearch}
        />

        {/* 2. Explore Destinations Catalog */}
        <ExploreSection
          savedDestinationIds={savedDestinationIds}
          onToggleSave={handleToggleSave}
          onViewDetails={(dest) => setModalDestination(dest)}
          onOpenAiGuide={handleOpenAiGuide}
          initialSearchQuery={initialSearchQuery}
        />

        {/* 3. Multilingual AI Cultural Guide */}
        <AiGuideSection
          selectedDestination={guideDestination}
          onSelectDestination={(dest) => setGuideDestination(dest)}
          onSaveToSavedPlaces={handleToggleSave}
          isSaved={savedDestinationIds.includes(guideDestination.id)}
        />

        {/* 4. Travel Cost Estimator (INR) */}
        <CostEstimatorSection
          initialDestination={guideDestination}
        />

        {/* 5. Cultural Calendar */}
        <CulturalCalendarSection
          onSelectDestination={(dest) => {
            setModalDestination(dest);
          }}
        />

        {/* 6. Saved Places & Offline Access */}
        <SavedPlacesSection
          savedDestinationIds={savedDestinationIds}
          onToggleSave={handleToggleSave}
          onClearAll={handleClearAllSaved}
          onViewDetails={(dest) => setModalDestination(dest)}
          onOpenAiGuide={handleOpenAiGuide}
          onNavigate={handleNavigate}
        />

        {/* 8. About and Impact (UN SDGs 8, 9, 11) */}
        <AboutImpactSection />

        {/* 9. AR Preview (Coming Soon) */}
        <ArPreviewSection />

      </main>

      {/* Modal View for Detailed Destination Inspection */}
      <DestinationModal
        destination={modalDestination}
        onClose={() => setModalDestination(null)}
        isSaved={modalDestination ? savedDestinationIds.includes(modalDestination.id) : false}
        onToggleSave={handleToggleSave}
        onOpenAiGuide={handleOpenAiGuide}
        onEstimateTrip={handleEstimateTrip}
        onSelectRelated={(relatedDest) => setModalDestination(relatedDest)}
      />

      {/* Platform Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
