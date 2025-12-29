
import React from 'react';
import { Item } from '../types';
import { ProgressTracker } from './ProgressTracker';

interface InventoryProps {
    items: Item[];
    onSelectItem: (id: string) => void;
    unlockedLogs: string[];
    unlockedBlogs: string[];
    unlockedReels: string[];
}

export const Inventory: React.FC<InventoryProps> = ({ items, onSelectItem, unlockedLogs, unlockedBlogs, unlockedReels }) => {
    return (
        <div className="flex-1 flex flex-col bg-[#0f0e0d] relative overflow-y-auto">

            {/* --- Global Atmosphere Layers --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,30,20,0.5)_0%,rgba(0,0,0,1)_90%)] z-0 pointer-events-none"></div>
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none mix-blend-overlay"></div>

            {/* --- Main Layout --- */}
            <div className="flex-1 flex flex-col items-center p-6 md:p-12 z-10 relative min-h-full">

                <header className="mb-12 border-b border-[#5c4d3c]/30 pb-4 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
                    <h3 className="text-[10px] md:text-xs font-mono tracking-[0.8em] text-[#a89f91] opacity-60 uppercase">
                        Investigation Assets / Phase 01
                    </h3>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-6xl px-4 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-8">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => onSelectItem(item.id)}
                            className="group relative w-full outline-none text-left perspective-1000 transition-all duration-700"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
                        >
                            <div className="
                    relative h-[420px] flex flex-col overflow-hidden rounded-sm
                    bg-gradient-to-b from-[#1a1816] to-[#0a0a0a] 
                    border border-[#3d342b] 
                    shadow-[0_10px_40px_rgba(0,0,0,0.8)] 
                    transition-all duration-700
                    group-hover:border-[#a89078]
                    group-hover:-translate-y-4
                    group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)]
                ">

                                {/* Icon Area - Top vertical */}
                                <div className="flex-1 bg-black flex items-center justify-center relative overflow-hidden group-hover:bg-[#050505] transition-colors border-b border-[#2e2620]/30">
                                    <span className="relative z-10 text-6xl md:text-7xl filter sepia-[0.3] group-hover:scale-110 group-hover:sepia-0 group-hover:brightness-125 transition-all duration-700 drop-shadow-[0_0_30px_rgba(214,203,184,0.15)]">
                                        {item.icon}
                                    </span>

                                    {/* Dynamic Atmospheric Lights */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                                </div>

                                {/* Text Area - Info Panel */}
                                <div className="h-48 p-8 flex flex-col items-center text-center relative bg-[#0f0e0d]">
                                    {/* Paper Texture Overlay */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper-concrete-seamless.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

                                    <h4 className="text-xl md:text-2xl font-serif-film text-[#d6cbb8] tracking-[0.15em] group-hover:text-[#ffecd1] mb-3 transition-colors uppercase">
                                        {item.name}
                                    </h4>

                                    <p className="text-[10px] md:text-xs text-[#8c8273] font-mono leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity max-w-[200px] tracking-tight">
                                        {item.description}
                                    </p>

                                    {/* Reference Tag */}
                                    <div className="absolute top-4 right-4 text-[8px] font-mono text-[#4a4036] opacity-30 group-hover:opacity-100 transition-opacity">
                                        #ARC_{index + 104}
                                    </div>

                                    {/* Selector indicator line */}
                                    <div className="mt-8 h-[1px] bg-[#3d342b] w-8 group-hover:w-24 group-hover:bg-[#786650] transition-all duration-700"></div>
                                </div>

                                {/* Scanline Effect on Hover */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] transition-opacity duration-700"></div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Progress Tracker - Below Cards */}
                <div className="w-full max-w-6xl px-4 mt-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: '600ms' }}>
                    <ProgressTracker
                        unlockedLogs={unlockedLogs}
                        unlockedBlogs={unlockedBlogs}
                        unlockedReels={unlockedReels}
                    />
                </div>
            </div>
        </div >
    );
};
