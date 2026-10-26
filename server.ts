import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API route for AI Cultural Guide
app.post('/api/guide', async (req, res) => {
  const { destination, language } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
    return res.json({
      success: false,
      isAiGenerated: false,
      message: 'GEMINI_API_KEY not configured. Falling back to built-in curated guide.',
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const langName =
      language === 'ta'
        ? 'Tamil (தமிழ்)'
        : language === 'hi'
        ? 'Hindi (हिन्दी)'
        : 'English';

    const prompt = `You are a world-renowned cultural heritage historian and sacred architecture specialist for the "Sacred Pixels – Digital Cultural Exploration Platform".
Provide an inspiring, historically accurate, and concise cultural explanation for "${destination}".
Language requirement: Generate the entire response in ${langName}.

Please structure the guide with the following three concise sections:
1. Cultural & Historical Significance (Origins, era, spiritual devotion, and cultural identity)
2. Sacred Architecture & Symbolism (Materials, engineering feat, geometry, or sacred orientation)
3. Living Heritage & Traditions (Rituals, folklore, festivals, or local community connection)

Keep the total length between 150 and 220 words. Maintain an engaging, respectful, and culturally deep voice.`;

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('AI request timed out after 15 seconds')), 15000)
    );

    const response = await Promise.race([
      ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      }),
      timeoutPromise,
    ]);

    const guideText = response.text || '';

    return res.json({
      success: true,
      isAiGenerated: true,
      guide: guideText,
      destination,
      language,
    });
  } catch (error: any) {
    console.error('Gemini API Error in /api/guide:', error);
    return res.json({
      success: false,
      isAiGenerated: false,
      message: error?.message || 'Failed to generate guide with Gemini API',
    });
  }
});

// Health check / API key status
app.get('/api/health', (_req, res) => {
  const hasKey = Boolean(
    process.env.GEMINI_API_KEY &&
      process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY' &&
      process.env.GEMINI_API_KEY.trim() !== ''
  );
  res.json({
    status: 'ok',
    hasApiKey: hasKey,
    timestamp: new Date().toISOString(),
  });
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Sacred Pixels server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
