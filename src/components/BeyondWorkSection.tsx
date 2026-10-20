import React, { useState } from 'react';
import { Music, Activity, Compass, Watch, Play, Volume2, Sparkles, Disc } from 'lucide-react';
import { personalInterests } from '../data/siteData';

// Web Audio API Acoustic Piano Synthesizer
const playPianoTone = (frequency: number) => {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Harmonics for warm acoustic piano tone
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Envelope
    gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.6, ctx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.25);
  } catch {
    // Audio context not permitted or suspended
  }
};

const PIANO_KEYS = [
  { note: 'C4', freq: 261.63, isBlack: false, key: 'A' },
  { note: 'C#4', freq: 277.18, isBlack: true, key: 'W' },
  { note: 'D4', freq: 293.66, isBlack: false, key: 'S' },
  { note: 'D#4', freq: 311.13, isBlack: true, key: 'E' },
  { note: 'E4', freq: 329.63, isBlack: false, key: 'D' },
  { note: 'F4', freq: 349.23, isBlack: false, key: 'F' },
  { note: 'F#4', freq: 369.99, isBlack: true, key: 'T' },
  { note: 'G4', freq: 392.00, isBlack: false, key: 'G' },
  { note: 'G#4', freq: 415.30, isBlack: true, key: 'Y' },
  { note: 'A4', freq: 440.00, isBlack: false, key: 'H' },
  { note: 'A#4', freq: 466.16, isBlack: true, key: 'U' },
  { note: 'B4', freq: 493.88, isBlack: false, key: 'J' },
  { note: 'C5', freq: 523.25, isBlack: false, key: 'K' },
];

export const BeyondWorkSection: React.FC = () => {
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // Play Nocturne snippet
  const playNocturneSnippet = () => {
    if (isPlayingMelody) return;
    setIsPlayingMelody(true);

    const notes = [
      { freq: 392.00, duration: 400 }, // G4
      { freq: 440.00, duration: 300 }, // A4
      { freq: 466.16, duration: 500 }, // Bb4
      { freq: 440.00, duration: 300 }, // A4
      { freq: 392.00, duration: 600 }, // G4
      { freq: 349.23, duration: 400 }, // F4
      { freq: 329.63, duration: 800 }, // E4
    ];

    let delay = 0;
    notes.forEach((n, idx) => {
      setTimeout(() => {
        playPianoTone(n.freq);
        if (idx === notes.length - 1) {
          setTimeout(() => setIsPlayingMelody(false), 800);
        }
      }, delay);
      delay += n.duration;
    });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Music': return Music;
      case 'Activity': return Activity;
      case 'Compass': return Compass;
      case 'Watch': return Watch;
      default: return Sparkles;
    }
  };

  return (
    <section id="beyond" className="py-24 sm:py-32 border-b border-white/10 bg-[#0E0F12]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-clean text-[#C5A880] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span>04 / Beyond the Terminal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans uppercase">
              Pursuits & <span className="font-display italic font-normal text-[#E8E1D5] lowercase">Personality</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#88898C] max-w-md font-light leading-relaxed">
            The activities that recharge the analytical mind. Software engineering leadership grounded by tactile, creative, and physical craft.
          </p>
        </div>

        {/* Featured Piano Experience Card */}
        <div className="rounded-2xl bg-[#141519] border border-white/10 p-8 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-[#C5A880]/15 text-[#C5A880]">
                  <Music className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono-clean text-[#C5A880] uppercase tracking-wider">
                  Harmonic Discipline
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                Acoustic Piano Repertoire
              </h3>

              <p className="text-sm sm:text-base text-[#88898C] font-light leading-relaxed">
                Exploring the polyphonic voices of Chopin and Debussy. Piano requires the exact patience and balance demanded by distributed platform architecture: counterpoint, restraint, dynamic touch sensitivity, and honoring the silences between notes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={playNocturneSnippet}
                  disabled={isPlayingMelody}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#E8E1D5] text-[#0E0F12] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880] transition-colors disabled:opacity-50"
                >
                  {isPlayingMelody ? <Disc className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlayingMelody ? 'Playing Chopin Theme...' : 'Play Recorded Chopin Theme'}</span>
                </button>
                <span className="text-xs font-mono-clean text-[#88898C]">
                  Web Audio Synthesized
                </span>
              </div>
            </div>

            {/* Playable Mini Piano Keyboard */}
            <div className="lg:col-span-6 bg-[#0E0F12] p-6 rounded-2xl border border-white/10 shadow-inner">
              <div className="flex items-center justify-between text-xs font-mono-clean text-[#88898C] mb-4">
                <span className="flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  Interactive Keyboard (Click to play tone)
                </span>
                <span className="hidden sm:inline">Harmonic Resonance</span>
              </div>

              {/* Piano Keys Strip */}
              <div className="relative flex justify-center h-40 select-none overflow-x-auto pb-2">
                {PIANO_KEYS.map((k) => {
                  if (k.isBlack) {
                    return (
                      <button
                        key={k.note}
                        onClick={() => {
                          setActiveKey(k.note);
                          playPianoTone(k.freq);
                          setTimeout(() => setActiveKey(null), 300);
                        }}
                        className={`absolute z-10 w-7 h-24 rounded-b-md bg-[#1F2024] hover:bg-[#2A2B30] border border-black shadow-md transition-colors ${
                          activeKey === k.note ? 'bg-[#C5A880] border-[#C5A880]' : ''
                        }`}
                        style={{
                          left: k.note === 'C#4' ? '28px' :
                                k.note === 'D#4' ? '68px' :
                                k.note === 'F#4' ? '150px' :
                                k.note === 'G#4' ? '190px' :
                                k.note === 'A#4' ? '230px' : '0px'
                        }}
                        title={k.note}
                      >
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono-clean text-white/50">
                          {k.note.replace('4', '')}
                        </span>
                      </button>
                    );
                  }
                  return (
                    <button
                      key={k.note}
                      onClick={() => {
                        setActiveKey(k.note);
                        playPianoTone(k.freq);
                        setTimeout(() => setActiveKey(null), 300);
                      }}
                      className={`relative w-10 sm:w-11 h-36 rounded-b-lg border border-neutral-700 mx-[1px] transition-all flex flex-col justify-end pb-3 items-center ${
                        activeKey === k.note
                          ? 'bg-[#E8E1D5] shadow-[0_0_15px_rgba(197,168,128,0.5)] translate-y-0.5'
                          : 'bg-[#F2EFE9] hover:bg-white text-[#0E0F12]'
                      }`}
                    >
                      <span className="text-[10px] font-mono-clean text-neutral-500 font-semibold">
                        {k.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Other Interests Grid: Tennis, Travel Philosophy, Craft */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalInterests.slice(1).map((interest) => {
            const Icon = getIcon(interest.iconName);
            return (
              <div
                key={interest.id}
                className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-[#C5A880] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-mono-clean text-[#C5A880] uppercase tracking-wider block mb-1">
                      {interest.subtitle}
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {interest.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[#88898C] font-light leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                  {interest.detailPoints.map((point, idx) => (
                    <div key={idx} className="text-xs text-[#88898C] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
