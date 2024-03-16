'use client';

import { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';

// Map of display names to values
const aiProviderOptions = ['OpenAI', 'Anthropic'];
const durationOptions = ['2-5min', '5-10min', '10+min'];
const guidanceOptions = ['low', 'medium', 'high'];
const ttsProviderOptions = ['OpenAI', 'ElevenLabs'];
const voiceOptions: Record<string, { label: string; value: string; }[]> = {
  OpenAI: [
    { label: "Alloy", value: "alloy" },
    { label: "Echo", value: "echo" },
    { label: "Fable", value: "fable" },
    { label: "Onyx", value: "onyx" },
    { label: "Nova", value: "nova" },
    { label: "Shimmer", value: "shimmer" },
  ],
  ElevenLabs: [
    { label: "Vincent", value: "Qe9WSybioZxssVEwlBSo" },
    { label: "Joanne", value: "RrkF2QZOPA1PyW4EamJj" },
    { label: "Stella", value: "h9wTb50iJC9oQuw5A37H" },
    { label: "Javier", value: "h415g7h7bSwQrn1qw4ar" },
    { label: "Gemma", value: "fqQpqTuOIBHOwbVaVZP3" },
    { label: "Tim", value: "XPzm47Wm41jCR5gentJy" },
  ],
};

export default function MeditationSettings() {
  const [aiProvider, setAIProvider] = useState('OpenAI');
  const [duration, setDuration] = useState('2-5min');
  const [guidanceLevel, setGuidanceLevel] = useState('low');
  const [ttsProvider, setTTSProvider] = useState('OpenAI');
  const [voice, setVoice] = useState('');
  const [formData, setFormData] = useState({
    aiProvider: 'OpenAI',
    duration: '2-5min',
    guidanceLevel: 'low',
    ttsProvider: 'OpenAI',
    voice: '',
  });

  // Handle form input changes
  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here, you can add the logic to send the form data to the server or perform any other necessary actions
  };

  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Generate Meditation
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Toggle buttons for AI Provider */}
        <div className="flex items-center justify-center gap-2">
          {aiProviderOptions.map((provider) => (
            <button
              key={provider}
              type="button"
              className={`py-2 px-4 rounded-full transition-colors ${aiProvider === provider ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setAIProvider(provider);
                handleChange('aiProvider', provider);
              }}
            >
              {provider}
            </button>
          ))}
        </div>

        {/* Sliders for Duration and Guidance Level */}
        <div className="flex items-center justify-center gap-2">
          {durationOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`py-2 px-4 rounded-full transition-colors ${duration === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setDuration(option);
                handleChange('duration', option);
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          {guidanceOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`py-2 px-4 rounded-full transition-colors ${guidanceLevel === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setGuidanceLevel(option);
                handleChange('guidanceLevel', option);
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Dropdown for TTS Provider */}
        <div className="flex items-center justify-center gap-2">
          <select
            name="ttsProvider"
            onChange={(e) => {
              setTTSProvider(e.target.value);
              handleChange('ttsProvider', e.target.value);
            }}
            value={ttsProvider}
            className="bg-white border border-gray-300 rounded-md p-2"
          >
            {ttsProviderOptions.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>

          {/* Dropdown for Voice selection based on TTS Provider */}
          <select
            name="voice"
            onChange={(e) => {
              setVoice(e.target.value);
              handleChange('voice', e.target.value);
            }}
            value={voice}
            className="bg-white border border-gray-300 rounded-md p-2"
          >
            {voiceOptions[ttsProvider].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Generate Button */}
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Generate Meditation
        </button>
      </form>
    </div>
  );
}