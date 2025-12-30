
import React, { useState } from 'react';
import { FilmReel } from '../types';

interface FilmViewerProps {
  film: FilmReel;
  onBack: () => void;
}

export const FilmViewer: React.FC<FilmViewerProps> = ({ film, onBack }) => {
  // Generate an array for sprocket holes
  const sprockets = Array.from({ length: 16 });

  // Handle both single image (string) and multiple images (array)
  const images = Array.isArray(film.contentImage) ? film.contentImage : [film.contentImage, film.contentImage];
  const frame1Image = images[0];
  const frame2Image = images[1] || images[0];

  // State for zoomed image
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <div className="flex-1 bg-black flex flex-col relative p-2 sm:p-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,40,40,1)_0%,rgba(0,0,0,1)_90%)] z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none animate-pulse"></div>

      <button onClick={onBack} className="absolute top-3 sm:top-6 left-3 sm:left-6 text-stone-500 hover:text-white z-30 text-[10px] sm:text-xs font-mono tracking-widest uppercase">
        [ STOP ]
      </button>

      <div className="flex-1 flex items-center justify-center relative z-10 perspective-1000">

        {/* The Film Strip Container */}
        <div className="relative bg-black border-y-4 sm:border-y-8 border-black shadow-[0_0_50px_rgba(255,200,150,0.1)] transform rotate-1 scale-90 sm:scale-100 md:scale-110 lg:scale-125">

          {/* Backlight Glow behind the frames */}
          <div className="absolute top-1/2 left-0 right-0 h-40 -translate-y-1/2 bg-amber-100/10 blur-xl"></div>

          {/* Top Sprocket Holes */}
          <div className="h-6 flex justify-between items-center px-2 gap-2 bg-[#1a1a1a] border-b border-stone-800">
            {sprockets.map((_, i) => (
              <div key={`top-${i}`} className="w-3 h-4 bg-black/80 rounded-[2px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
            ))}
          </div>

          {/* The Frames Area */}
          <div className="flex gap-[2px] bg-black py-4 px-4 overflow-hidden relative">

            {/* Frame 1 */}
            <div
              className="relative w-48 sm:w-64 md:w-80 aspect-[4/3] bg-black overflow-hidden border border-stone-800/50 cursor-pointer hover:border-amber-500/50 transition-colors"
              onClick={() => setZoomedImage(frame1Image)}
            >
              <img
                src={frame1Image}
                alt="Frame 1"
                className={`w-full h-full object-cover opacity-90 filter sepia-[0.4] contrast-[1.1] brightness-[0.9] ${film.id === 'reel_06' ? 'saturate-[0.7]' : ''} ${['reel_08', 'reel_09'].includes(film.id) ? 'brightness-[0.95] contrast-[1.2] saturate-[0.8] sepia-[0.65] blur-[0.6px]' : ''}`}
              />
              {/* Specialized Focus Blur for Film 6 */}
              {film.id === 'reel_06' && (
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                  <div className="absolute inset-0 backdrop-blur-[1px]" style={{ maskImage: 'radial-gradient(circle at 35% 75%, transparent 25%, black 80%)', WebkitMaskImage: 'radial-gradient(circle at 35% 75%, transparent 25%, black 80%)' }}></div>
                </div>
              )}
              {/* Specialized Dark Vignette for Film 8 & 9 */}
              {['reel_08', 'reel_09'].includes(film.id) && (
                <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.5)_100%)]"></div>
              )}
              {/* Frame Number */}
              <span className="absolute bottom-1 right-2 text-[8px] font-mono text-amber-500/50 transform -scale-x-100">8mm 2401</span>
              {/* Zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 pointer-events-none">
                <span className="text-white text-xs font-mono">[ CLICK TO ZOOM ]</span>
              </div>
            </div>

            {/* Frame 2 (Continuous) */}
            <div
              className="relative w-48 sm:w-64 md:w-80 aspect-[4/3] bg-black overflow-hidden border border-stone-800/50 cursor-pointer hover:border-amber-500/50 transition-colors"
              onClick={() => setZoomedImage(frame2Image)}
            >
              <img
                src={frame2Image}
                alt="Frame 2"
                className={`w-full h-full object-cover opacity-90 filter sepia-[0.4] contrast-[1.1] brightness-[0.9] ${film.id === 'reel_06' ? 'saturate-[0.7]' : ''} ${['reel_08', 'reel_09'].includes(film.id) ? 'brightness-[0.95] contrast-[1.2] saturate-[0.8] sepia-[0.65] blur-[0.6px]' : ''}`}
              />
              {/* Specialized Focus Blur for Film 6 */}
              {film.id === 'reel_06' && (
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                  <div className="absolute inset-0 backdrop-blur-[1px]" style={{ maskImage: 'radial-gradient(circle at 35% 75%, transparent 25%, black 80%)', WebkitMaskImage: 'radial-gradient(circle at 35% 75%, transparent 25%, black 80%)' }}></div>
                </div>
              )}
              {/* Specialized Dark Vignette for Film 8 & 9 */}
              {['reel_08', 'reel_09'].includes(film.id) && (
                <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.5)_100%)]"></div>
              )}
              {/* Scratch Overlay across strip */}
              <div className="absolute inset-0 border-l border-white/10 mx-10"></div>
              <span className="absolute bottom-1 right-2 text-[8px] font-mono text-amber-500/50 transform -scale-x-100">8mm 2402</span>
              {/* Zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 pointer-events-none">
                <span className="text-white text-xs font-mono">[ CLICK TO ZOOM ]</span>
              </div>
            </div>

            {/* Grain Overlay for the whole strip */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-30 pointer-events-none mix-blend-overlay"></div>
          </div>

          {/* Bottom Sprocket Holes */}
          <div className="h-6 flex justify-between items-center px-2 gap-2 bg-[#1a1a1a] border-t border-stone-800">
            {sprockets.map((_, i) => (
              <div key={`bottom-${i}`} className="w-3 h-4 bg-black/80 rounded-[2px] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"></div>
            ))}
          </div>

        </div>
      </div>

      {/* Subtitle / Description - Hidden until selected */}
      <div className="absolute bottom-12 left-0 right-0 text-center z-30 px-8">
        <div className="inline-block relative">
          <div className="absolute -inset-4 bg-black/90 blur-md"></div>
          <p
            className="relative text-transparent font-serif-film text-xs sm:text-sm md:text-lg tracking-wide leading-relaxed max-w-2xl cursor-text select-text px-2"
            style={{
              userSelect: 'text',
              WebkitUserSelect: 'text'
            }}
          >
            {film.contentDesc}
          </p>
          {/* Selection hint */}
          <div className="absolute -bottom-8 left-0 right-0 text-center pointer-events-none">
            <span className="text-stone-600 text-[10px] font-mono tracking-wide animate-pulse">
              [ DRAG TO REVEAL TEXT ]
            </span>
          </div>
        </div>
      </div>

      {/* Global style for text selection */}
      <style jsx>{`
        p::selection {
          background-color: rgba(217, 119, 6, 0.3);
          color: rgb(214, 211, 209);
        }
        p::-moz-selection {
          background-color: rgba(217, 119, 6, 0.3);
          color: rgb(214, 211, 209);
        }
      `}</style>

      {/* Fullscreen Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-stone-400 hover:text-white text-xs font-mono tracking-widest uppercase z-10 transition-colors"
            onClick={() => setZoomedImage(null)}
          >
            [ CLOSE ]
          </button>

          {/* Zoomed Image */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={zoomedImage}
              alt="Zoomed frame"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Film grain overlay on zoomed image */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          </div>

          {/* Hint text */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-stone-500 text-xs font-mono tracking-wide">[ CLICK ANYWHERE TO CLOSE ]</span>
          </div>
        </div>
      )}
    </div>
  );
};
