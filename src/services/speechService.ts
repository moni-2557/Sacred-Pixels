import { LanguageCode } from '../types';

export interface SpeechStatus {
  isSpeaking: boolean;
  isPaused: boolean;
  supported: boolean;
  hasVoiceForLanguage: boolean;
  voiceName?: string;
  error?: string;
}

export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

// Strip markdown tags and special characters for clear spoken narration
export function cleanTextForSpeech(markdown: string): string {
  return markdown
    .replace(/###\s+/g, '')
    .replace(/##\s+/g, '')
    .replace(/#\s+/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`{1,3}(.*?)`{1,3}/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/[-*•]\s+/g, '')
    .replace(/\n\s*\n/g, '. ')
    .replace(/\n/g, ' ')
    .trim();
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSynthesisSupported()) return [];
  return window.speechSynthesis.getVoices();
}

export function findBestVoiceForLanguage(lang: LanguageCode): SpeechSynthesisVoice | null {
  if (!isSpeechSynthesisSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const targetCodes: Record<LanguageCode, string[]> = {
    ta: ['ta-IN', 'ta', 'tamil'],
    hi: ['hi-IN', 'hi', 'hindi'],
    en: ['en-IN', 'en-US', 'en-GB', 'en'],
  };

  const codes = targetCodes[lang] || ['en-US'];

  for (const code of codes) {
    const match = voices.find(
      (v) =>
        v.lang.toLowerCase() === code.toLowerCase() ||
        v.lang.toLowerCase().startsWith(code.toLowerCase()) ||
        v.name.toLowerCase().includes(code.toLowerCase())
    );
    if (match) return match;
  }

  // Fallback to default voice or first available
  return voices.find((v) => v.default) || voices[0] || null;
}

export function stopSpeech(): void {
  if (isSpeechSynthesisSupported()) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn('Error cancelling speech synthesis:', e);
    }
  }
}

export function speakText({
  text,
  language,
  rate = 0.95,
  pitch = 1.0,
  onStart,
  onEnd,
  onError,
}: {
  text: string;
  language: LanguageCode;
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: string) => void;
}): SpeechStatus {
  if (!isSpeechSynthesisSupported()) {
    const msg = 'Speech Synthesis is not supported in this browser.';
    if (onError) onError(msg);
    return {
      isSpeaking: false,
      isPaused: false,
      supported: false,
      hasVoiceForLanguage: false,
      error: msg,
    };
  }

  stopSpeech();

  const spokenText = cleanTextForSpeech(text);
  if (!spokenText) {
    if (onError) onError('No text provided to speak.');
    return {
      isSpeaking: false,
      isPaused: false,
      supported: true,
      hasVoiceForLanguage: false,
    };
  }

  const utterance = new SpeechSynthesisUtterance(spokenText);

  // Set language tag
  const langTagMap: Record<LanguageCode, string> = {
    ta: 'ta-IN',
    hi: 'hi-IN',
    en: 'en-US',
  };
  utterance.lang = langTagMap[language] || 'en-US';
  utterance.rate = rate;
  utterance.pitch = pitch;

  const bestVoice = findBestVoiceForLanguage(language);
  let hasExactLanguageVoice = false;

  if (bestVoice) {
    utterance.voice = bestVoice;
    hasExactLanguageVoice =
      bestVoice.lang.toLowerCase().includes(language) ||
      (language === 'ta' && bestVoice.lang.toLowerCase().includes('ta')) ||
      (language === 'hi' && bestVoice.lang.toLowerCase().includes('hi'));
  }

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.warn('SpeechSynthesis error:', e);
    if (onError) onError(e.error || 'Speech playback encountered an issue.');
  };

  try {
    window.speechSynthesis.speak(utterance);
    return {
      isSpeaking: true,
      isPaused: false,
      supported: true,
      hasVoiceForLanguage: hasExactLanguageVoice,
      voiceName: bestVoice?.name,
    };
  } catch (err: any) {
    const errText = err?.message || 'Failed to start speech';
    if (onError) onError(errText);
    return {
      isSpeaking: false,
      isPaused: false,
      supported: true,
      hasVoiceForLanguage: false,
      error: errText,
    };
  }
}
