import { LanguageCode } from '../types';

export interface GuideResponse {
  guide: string;
  isAiGenerated: boolean;
  message?: string;
  language: LanguageCode;
}

export async function fetchAiGuide(
  destination: string,
  language: LanguageCode,
  fallbackCuratedGuide: string
): Promise<GuideResponse> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

    const response = await fetch('/api/guide', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destination,
        language,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.guide) {
      return {
        guide: data.guide,
        isAiGenerated: true,
        language,
        message: 'Generated via Gemini 3.8 Flash model.',
      };
    } else {
      // Graceful fallback to curated guide
      return {
        guide: fallbackCuratedGuide,
        isAiGenerated: false,
        language,
        message: data.message || 'API key not configured. Displaying verified scholarly guide.',
      };
    }
  } catch (err: any) {
    console.warn('AI guide generation error, using curated fallback:', err);
    return {
      guide: fallbackCuratedGuide,
      isAiGenerated: false,
      language,
      message: 'Network offline or server unavailable. Displaying verified scholarly guide.',
    };
  }
}

export async function checkServerHealth(): Promise<{ hasApiKey: boolean }> {
  try {
    const res = await fetch('/api/health');
    if (!res.ok) return { hasApiKey: false };
    const data = await res.json();
    return { hasApiKey: Boolean(data.hasApiKey) };
  } catch {
    return { hasApiKey: false };
  }
}
