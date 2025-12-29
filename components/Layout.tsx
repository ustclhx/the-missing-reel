import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode; disableFilmEffects?: boolean }> = ({ children, disableFilmEffects = false }) => {
  return (
    <div className="relative w-full h-screen bg-stone-900 overflow-hidden font-serif-film text-stone-300 selection:bg-red-900 selection:text-white">
      {/* 8mm Film Overlay Effect - disabled for bright pages */}
      {!disableFilmEffects && (
        <>
          <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 film-grain"></div>
          <div className="scratch-line left-1/4"></div>
          <div className="scratch-line left-3/4 animation-delay-2000"></div>
        </>
      )}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,transparent_50%,#000000_150%)]"></div>

      {/* Sepia/Contrast Filter Container - conditionally apply flicker */}
      <div className={`relative w-full h-full flex items-center justify-center ${!disableFilmEffects ? 'filter sepia-[0.3] contrast-[1.1] brightness-[0.9] flicker' : ''}`}>
        <div className="w-full max-w-4xl h-[90vh] border-4 border-stone-800 bg-stone-950 shadow-2xl relative overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
