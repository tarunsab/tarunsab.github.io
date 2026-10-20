import React, { useState } from 'react';
import { Music, Play, Disc } from 'lucide-react';
import { personalInterests } from '../data/siteData';

// Web Audio API Acoustic Piano Synthesizer
const playPianoTone = (frequency: number) => {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.25);
  } catch {
    // Ignore audio errors
  }
};

const PIANO_KEYS = [
  { note: 'C4', freq: 261.63, isBlack: false },
  { note: 'C#4', freq: 277.18, isBlack: true },
  { note: 'D4', freq: 293.66, isBlack: false },
  { note: 'D#4', freq: 311.13, isBlack: true },
  { note: 'E4', freq: 329.63, isBlack: false },
  { note: 'F4', freq: 349.23, isBlack: false },
  { note: 'F#4', freq: 369.99, isBlack: true },
  { note: 'G4', freq: 392.00, isBlack: false },
  { note: 'G#4', freq: 415.30, isBlack: true },
  { note: 'A4', freq: 440.00, isBlack: false },
  { note: 'A#4', freq: 466.16, isBlack: true },
  { note: 'B4', freq: 493.88, isBlack: false },
  { note: 'C5', freq: 523.25, isBlack: false },
];

export const BeyondWorkSection: React.FC = () => {
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const playChopinSnippet = () => {
    if (isPlayingMelody) return;
    setIsPlayingMelody(true);

    const notes = [
      { freq: 392.00, duration: 400 },
      { freq: 440.00, duration: 300 },
      { freq: 466.16, duration: 500 },
      { freq: 440.00, duration: 300 },
      { freq: 392.00, duration: 600 },
      { freq: 349.23, duration: 400 },
      { freq: 329.63, duration: 800 },
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

  return (
    <section id="beyond" className="bg-white text-[#1C1D20] py-24 sm:py-32 px-8 sm:px-16 border-b border-[#1C1D20]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#1C1D20]/15 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#999D9E] font-medium block mb-2">
              Personal Pursuits
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D20]">
              Beyond Engineering
            </h2>
          </div>
          <p className="text-sm text-[#999D9E] max-w-sm font-light">
            Acoustic piano polyphony, competitive tennis geometry, and quiet horological craft.
          </p>
        </div>

        {/* Piano Experience Showcase */}
        <div className="rounded-2xl bg-[#F8F8F8] border border-[#1C1D20]/10 p-8 sm:p-12 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#455CE9] font-medium flex items-center gap-2">
              <Music className="w-4 h-4" />
              Harmonic Architecture
            </span>
            <h3 className="text-3xl sm:text-4xl font-normal text-[#1C1D20]">
              Acoustic Piano & Polyphony
            </h3>
            <p className="text-base text-[#55565A] font-light leading-relaxed">
              Studying the classical voices of Chopin and Debussy. Rehearsing piano instills the same discipline required in distributed platform architecture: restraint, tempo control, and knowing that silent rests between notes carry equal weight to the chords.
            </p>

            <div className="pt-2">
              <button
                onClick={playChopinSnippet}
                disabled={isPlayingMelody}
                className="btn-round px-6 py-3 rounded-full bg-[#1C1D20] hover:bg-[#455CE9] text-white text-xs uppercase tracking-widest font-normal transition-colors flex items-center gap-2"
              >
                {isPlayingMelody ? <Disc className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlayingMelody ? 'Playing Nocturne Theme...' : 'Play Chopin Nocturne'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Keyboard */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-[#1C1D20]/10 shadow-sm">
            <div className="text-xs font-mono text-[#999D9E] uppercase tracking-wider mb-4 flex justify-between">
              <span>Interactive Acoustic Synth</span>
              <span>Web Audio API</span>
            </div>

            <div className="relative flex justify-center h-36 select-none overflow-x-auto pb-2">
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
                      className={`absolute z-10 w-7 h-20 rounded-b-md bg-[#1C1D20] hover:bg-[#455CE9] transition-colors ${
                        activeKey === k.note ? 'bg-[#455CE9]' : ''
                      }`}
                      style={{
                        left: k.note === 'C#4' ? '28px' :
                              k.note === 'D#4' ? '68px' :
                              k.note === 'F#4' ? '150px' :
                              k.note === 'G#4' ? '190px' :
                              k.note === 'A#4' ? '230px' : '0px'
                      }}
                    />
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
                    className={`relative w-10 sm:w-11 h-32 rounded-b-lg border border-neutral-300 mx-[1px] transition-all flex flex-col justify-end pb-2 items-center ${
                      activeKey === k.note ? 'bg-[#455CE9] text-white' : 'bg-white hover:bg-neutral-100 text-[#1C1D20]'
                    }`}
                  >
                    <span className="text-[10px] font-mono opacity-60">{k.note}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tennis & Quiet Craft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalInterests.slice(1).map((interest) => (
            <div
              key={interest.id}
              className="p-8 rounded-2xl bg-[#F8F8F8] border border-[#1C1D20]/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#455CE9] font-medium block mb-2">
                  {interest.subtitle}
                </span>
                <h4 className="text-2xl font-normal text-[#1C1D20] mb-3">
                  {interest.title}
                </h4>
                <p className="text-sm text-[#55565A] font-light leading-relaxed">
                  {interest.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1D20]/10 space-y-1.5 text-xs text-[#999D9E]">
                {interest.detailPoints.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1D20]" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
