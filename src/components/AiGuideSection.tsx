import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  Globe2, 
  Loader2, 
  Bookmark, 
  ShieldCheck,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { Destination, LanguageCode } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { fetchAiGuide } from '../services/geminiService';
import { speakText, stopSpeech, isSpeechSynthesisSupported } from '../services/speechService';

interface AiGuideSectionProps {
  selectedDestination: Destination;
  onSelectDestination: (dest: Destination) => void;
  onSaveToSavedPlaces: (id: string) => void;
  isSaved: boolean;
}

export const AiGuideSection: React.FC<AiGuideSectionProps> = ({
  selectedDestination,
  onSelectDestination,
  onSaveToSavedPlaces,
  isSaved,
}) => {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [guideText, setGuideText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAiGenerated, setIsAiGenerated] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);

  // Set initial guide from curated repository
  useEffect(() => {
    const defaultGuide = selectedDestination.curatedGuides[language] || selectedDestination.curatedGuides.en;
    setGuideText(defaultGuide);
    setIsAiGenerated(false);
    setStatusMessage('Showing built-in verified scholarly guide. Click "Generate Guide" to request a fresh explanation.');
    stopSpeech();
    setIsSpeaking(false);
    setSpeechError(null);
  }, [selectedDestination, language]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  const handleGenerateGuide = async () => {
    stopSpeech();
    setIsSpeaking(false);
    setSpeechError(null);
    setIsLoading(true);

    const fallback = selectedDestination.curatedGuides[language] || selectedDestination.curatedGuides.en;
    
    const result = await fetchAiGuide(selectedDestination.name, language, fallback);
    
    setGuideText(result.guide);
    setIsAiGenerated(result.isAiGenerated);
    setStatusMessage(result.message || (result.isAiGenerated ? 'Generated via Gemini 3.8 Flash' : 'Built-in verified scholarly guide'));
    setIsLoading(false);
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      stopSpeech();
      setIsSpeaking(false);
      return;
    }

    if (!isSpeechSynthesisSupported()) {
      setSpeechError('Speech synthesis is not supported on this device/browser.');
      return;
    }

    setSpeechError(null);

    const status = speakText({
      text: guideText,
      language,
      rate: speechRate,
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
      onError: (err) => {
        setIsSpeaking(false);
        setSpeechError(`Speech playback note: ${err}. Visual text remains complete.`);
      },
    });

    if (status.error) {
      setSpeechError(status.error);
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(guideText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const languages: { code: LanguageCode; label: string; nativeLabel: string }[] = [
    { code: 'en', label: 'English', nativeLabel: 'English' },
    { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
    { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  ];

  return (
    <section id="guide" className="py-12 lg:py-20 bg-[#F4EFE6]/60 border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>AI Cultural Guide</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A382B]">
            Multilingual Sacred Heritage Guide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C6B61]">
            Experience deep cultural explanations powered by Gemini 3.8 Flash, with native scholarly support in English, Tamil (தமிழ்), and Hindi (हिन्दी), backed by offline resilience.
          </p>
        </div>

        {/* Interactive Guide Studio Card */}
        <div className="bg-white rounded-3xl border border-[#D9CFC0] shadow-md overflow-hidden max-w-4xl mx-auto">
          
          {/* Controls Bar */}
          <div className="p-5 sm:p-6 bg-[#FBF8F3] border-b border-[#E3DAC9] space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Destination Selector */}
              <div>
                <label htmlFor="destination-select" className="block text-xs font-semibold text-[#1A382B] uppercase tracking-wider mb-1.5">
                  1. Select Destination:
                </label>
                <div className="relative">
                  <select
                    id="destination-select"
                    value={selectedDestination.id}
                    onChange={(e) => {
                      const dest = DESTINATIONS.find((d) => d.id === e.target.value);
                      if (dest) onSelectDestination(dest);
                    }}
                    className="w-full bg-white border border-[#D9CFC0] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B] shadow-2xs"
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.country})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Language Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#1A382B] uppercase tracking-wider mb-1.5">
                  2. Choose Language:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => {
                    const isSelected = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => setLanguage(lang.code)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A382B] text-white shadow-xs'
                            : 'bg-white hover:bg-[#F2ECE1] text-[#445348] border border-[#D9CFC0]'
                        }`}
                      >
                        <span className="text-[11px] leading-tight opacity-90">{lang.label}</span>
                        <span className="text-xs font-serif mt-0.5">{lang.nativeLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleGenerateGuide}
                  disabled={isLoading}
                  className="bg-[#C85A32] hover:bg-[#B34E2A] disabled:opacity-60 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-[#C85A32]/20 flex items-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Synthesizing Cultural Guide...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#F3E8C8]" />
                      <span>Generate Guide</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    const defaultGuide = selectedDestination.curatedGuides[language] || selectedDestination.curatedGuides.en;
                    setGuideText(defaultGuide);
                    setIsAiGenerated(false);
                    setStatusMessage('Reset to verified scholarly repository.');
                  }}
                  title="Reset to Curated Scholar Guide"
                  className="p-2.5 rounded-xl bg-white border border-[#D9CFC0] text-[#6B7970] hover:text-[#1A382B] transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Source Indicator Badge */}
              <div className="flex items-center gap-2 text-xs">
                {isAiGenerated ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E8F2EC] text-[#1F4C35] font-semibold border border-[#2E5E44]/30">
                    <Sparkles className="w-3.5 h-3.5 text-[#2E5E44]" />
                    <span>Gemini 3.8 Flash AI</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F2ECE1] text-[#8C6D23] font-semibold border border-[#D9CFC0]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D23]" />
                    <span>Built-in Curated Guide</span>
                  </span>
                )}
              </div>

            </div>

          </div>

          {/* Guide Display Output */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Destination Metadata Title */}
            <div className="border-b border-[#F0EBE1] pb-4 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#1A382B]">
                  {selectedDestination.name}
                </h3>
                <div className="text-xs text-[#718076] mt-0.5">
                  {selectedDestination.city}, {selectedDestination.country} · {selectedDestination.historicalEra}
                </div>
              </div>

              {/* Speech Audio Player Controls */}
              <div className="flex items-center gap-2">
                
                {/* Speech Rate Selector */}
                <select
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="bg-[#FBF8F3] border border-[#D9CFC0] text-[11px] font-semibold text-[#445348] rounded-lg px-2 py-1.5"
                  title="Narration Speed"
                >
                  <option value={0.8}>0.8x Speed</option>
                  <option value={1.0}>1.0x Speed</option>
                  <option value={1.2}>1.2x Speed</option>
                </select>

                {/* Working Listen Button */}
                <button
                  onClick={handleToggleSpeech}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSpeaking
                      ? 'bg-[#C85A32] text-white shadow-sm animate-pulse'
                      : 'bg-[#1A382B] hover:bg-[#234938] text-white'
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Stop Narration</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#E5C158]" />
                      <span>Listen</span>
                    </>
                  )}
                </button>

                {/* Copy Text Button */}
                <button
                  onClick={handleCopyText}
                  title="Copy Guide Text"
                  className="p-1.5 rounded-lg border border-[#D9CFC0] hover:bg-[#F4EFE6] text-[#6B7970] transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-[#2E5E44]" /> : <Copy className="w-4 h-4" />}
                </button>

                {/* Save Destination Shortcut */}
                <button
                  onClick={() => onSaveToSavedPlaces(selectedDestination.id)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isSaved
                      ? 'border-[#C85A32] text-[#C85A32] bg-[#FBEBE5]'
                      : 'border-[#D9CFC0] text-[#6B7970] hover:text-[#1A382B]'
                  }`}
                  title={isSaved ? 'Destination Saved' : 'Save Destination'}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>

              </div>
            </div>

            {/* Speech Notice / Warning if any */}
            {speechError && (
              <div className="p-3 bg-[#FBEBE5] text-[#9E3917] rounded-xl text-xs border border-[#C85A32]/20">
                {speechError}
              </div>
            )}

            {/* Formatted Guide Body with Markdown Sections */}
            <div className="prose prose-stone max-w-none text-[#2A372E] leading-relaxed text-sm sm:text-base space-y-4">
              {guideText.split('###').map((section, idx) => {
                if (!section.trim()) return null;
                const lines = section.trim().split('\n');
                const title = lines[0]?.trim();
                const content = lines.slice(1).join('\n').trim();

                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#FBF8F3] border border-[#EBE4D8]">
                    {title && (
                      <h4 className="font-display text-base font-bold text-[#1A382B] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                        <span>{title}</span>
                      </h4>
                    )}
                    <p className="text-xs sm:text-sm text-[#445348] leading-relaxed whitespace-pre-line">
                      {content || title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Status Footer Note */}
            <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between text-xs text-[#718076] flex-wrap gap-2">
              <span className="italic">{statusMessage}</span>
              <span className="text-[11px] font-medium text-[#1A382B]">
                Language: {languages.find((l) => l.code === language)?.label} ({language.toUpperCase()})
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
