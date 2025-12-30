
import React, { useState } from 'react';
import { FilmReel } from '../types';
import { getAssetPath } from '../utils/assetPath';

interface ShreddedFilmViewerProps {
    film: FilmReel;
    onBack: () => void;
}

export const ShreddedFilmViewer: React.FC<ShreddedFilmViewerProps> = ({ film, onBack }) => {
    const images = Array.isArray(film.contentImage) ? film.contentImage : [film.contentImage];
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    return (
        <div className="flex-1 bg-[#050505] flex flex-col relative p-8 overflow-hidden">
            {/* Background Texture - Dark Wood/Desk feel */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 z-0 pointer-events-none"></div>

            {/* Top Navigation */}
            <div className="relative z-30 flex justify-between items-center mb-8 px-4">
                <button
                    onClick={onBack}
                    className="text-stone-500 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors"
                >
                    [ CLOSE ARCHIVE ]
                </button>
                <div className="text-stone-600 font-mono text-[10px] tracking-[0.2em] uppercase">
                    Batch 00 &bull; Shredded Fragments &bull; Processed Oct 1984
                </div>
            </div>

            {/* The Scatter Area */}
            <div className="flex-1 relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-y-auto px-4 scrollbar-hide pb-32">
                {images.map((imgSrc, idx) => (
                    <div
                        key={`${film.id}-fragment-${idx}`}
                        onClick={() => setSelectedIdx(idx)}
                        className={`group relative aspect-[4/3] bg-black shadow-2xl transition-all duration-500 hover:scale-105 hover:z-40 
              border-4 border-stone-900 overflow-hidden cursor-zoom-in
            `}
                        style={{
                            transform: `rotate(${(idx % 5) - 2}deg) translate(${Math.sin(idx) * 5}px, ${Math.cos(idx) * 10}px)`,
                            zIndex: 10 + (idx % 5)
                        }}
                    >
                        {/* The Fragment Image with nostalgic filters */}
                        <img
                            src={imgSrc || ''}
                            alt={`Fragment ${idx + 1}`}
                            className="w-full h-full object-cover filter sepia-[0.5] contrast-[1.2] brightness-[0.8] saturate-[0.7] blur-[0.4px] opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:blur-none transition-all duration-300"
                        />

                        {/* Ghostly Silhouette Overlay for FRA_02 and FRA_06 */}
                        {(idx === 2 || idx === 6) && (
                            <div className="absolute top-[8%] right-[12%] w-[25%] h-[30%] pointer-events-none z-30 overflow-hidden opacity-25 mix-blend-overlay group-hover:opacity-32 transition-opacity duration-700">
                                <img
                                    src={getAssetPath("/assets/ghost_overlay.png")}
                                    alt=""
                                    className="w-full h-full object-contain opacity-50"
                                    style={{ filter: 'blur(3px) contrast(0.6) brightness(1.5) grayscale(0.3)' }}
                                />
                            </div>
                        )}

                        {/* Specialized Scratches for FRA_02 and FRA_06 */}
                        {(idx === 2 || idx === 6) && (
                            <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                                <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-white/20 blur-[0.5px]"></div>
                                <div className="absolute left-[22%] top-0 bottom-0 w-[0.5px] bg-white/10"></div>
                                <div className="absolute right-[35%] top-0 bottom-0 w-[1px] bg-stone-200/20 rotate-1"></div>
                            </div>
                        )}

                        {/* Specialized Dark Vignette overlay for each fragment */}
                        <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.6)_100%)]"></div>

                        {/* Grain Overlay for each fragment */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-30 pointer-events-none mix-blend-overlay"></div>

                        {/* Edge Burnt effect */}
                        <div className="absolute inset-0 border-[8px] border-black/40 pointer-events-none box-border"></div>

                        {/* Label */}
                        <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-stone-800/50">
                            <span className="text-[8px] font-mono text-stone-400 uppercase tracking-tighter">FRA_{idx.toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Description Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-30 pointer-events-none">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-black/80 backdrop-blur-lg p-6 border border-stone-800/50 shadow-2xl transform -rotate-1">
                        <h2 className="text-stone-500 font-mono text-[10px] uppercase tracking-widest mb-2 border-b border-stone-800 pb-2 flex justify-between">
                            <span>Investigation Note</span>
                            <span className="opacity-50">Confidential</span>
                        </h2>
                        <p className="text-stone-300 font-serif text-sm italic leading-relaxed">
                            {film.contentDesc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Zoom Modal */}
            {selectedIdx !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 md:p-16 backdrop-blur-sm cursor-zoom-out"
                    onClick={() => setSelectedIdx(null)}
                >
                    <div
                        className="relative max-w-5xl w-full aspect-[4/3] bg-black shadow-[0_0_100px_rgba(0,0,0,0.5)] border-2 border-stone-800 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[selectedIdx]}
                            alt={`Zoomed Fragment ${selectedIdx}`}
                            className="w-full h-full object-contain filter sepia-[0.3] contrast-[1.1] brightness-[0.9] saturate-[0.8]"
                        />
                        {/* Ghostly Silhouette Overlay for FRA_02 and FRA_06 */}
                        {(selectedIdx === 2 || selectedIdx === 6) && (
                            <>
                                <div className="absolute top-[10%] right-[15%] w-[22%] h-[28%] pointer-events-none z-30 opacity-28 mix-blend-overlay">
                                    <img
                                        src={getAssetPath("/assets/ghost_overlay.png")}
                                        alt=""
                                        className="w-full h-full object-contain opacity-55"
                                        style={{ filter: 'blur(3.5px) contrast(0.5) brightness(1.6) grayscale(0.4)' }}
                                    />
                                </div>
                                <div className="absolute inset-0 pointer-events-none z-40">
                                    <div className="absolute left-[20%] top-0 bottom-0 w-[1.5px] bg-white/20 blur-[1px]"></div>
                                    <div className="absolute right-[35%] top-0 bottom-0 w-[1px] bg-stone-200/20 rotate-1"></div>
                                </div>
                            </>
                        )}
                        <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

                        <button
                            className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
                            onClick={() => setSelectedIdx(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="absolute bottom-4 left-6 font-mono text-[10px] text-stone-500 tracking-[0.3em] uppercase">
                            FRAGMENT_{selectedIdx.toString().padStart(2, '0')} // ENLARGED_VIEW
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
