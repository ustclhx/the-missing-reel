
import React, { useState, useEffect } from 'react';
import { BLOG_ENTRIES } from '../constants';
import { BlogEntry } from '../types';

interface NotebookProps {
    onBack: () => void;
    unlockedBlogs: string[];
    onUnlockBlog: (id: string) => void;
    onViewChange?: (isDetailView: boolean) => void;
}

// Easter Egg Ingredients
const SLOT_1 = ['Tanqueray Gin', 'Glen grant', 'sotol', 'mezcal', 'rye', 'bourbon', 'singani', 'flying king rum', "g'vine", 'shochu', 'vodka', 'brandy', 'apple jack', 'fernet hunter', 'dolin dry', 'angostura', 'amontillado', 'manzanilla', 'Montenegro', 'heering', 'disaronno', 'bonal', 'benedictine', 'ancho reyes', 'frangelico', 'averna', 'cynar', 'campari', 'bigallet china-china', 'maraschino', 'fernet branca'];
const SLOT_2 = ['ancho reyes', 'frangelico', 'averna', 'cynar', 'campari', 'bigallet china-china', 'maraschino', 'fernet branca', 'Tanqueray Gin', 'Glen grant', 'sotol', 'mezcal', 'rye', 'bourbon', 'singani', 'flying king rum', "g'vine", 'shochu', 'vodka', 'brandy', 'apple jack'];
const SLOT_3 = ['fernet hunter', 'dolin dry', 'angostura', 'amontillado', 'manzanilla', 'Montenegro', 'heering', 'disaronno', 'bonal', 'benedictine', 'ancho reyes', 'frangelico', 'averna', 'cynar', 'campari', 'bigallet china-china', 'maraschino', 'fernet branca', 'Tanqueray Gin', 'Glen grant', 'sotol', 'mezcal', 'rye', 'bourbon', 'singani', 'flying king rum', "g'vine", 'shochu', 'vodka', 'brandy', 'apple jack'];
const SLOT_4 = ['fernet hunter', 'dolin dry', 'angostura', 'amontillado', 'manzanilla', 'Montenegro', 'heering', 'disaronno', 'bonal', 'benedictine', 'ancho reyes', 'frangelico', 'averna', 'cynar', 'campari', 'bigallet china-china', 'maraschino', 'fernet branca', 'Tanqueray Gin', 'Glen grant', 'sotol', 'mezcal', 'rye', 'bourbon', 'singani', 'flying king rum', "g'vine", 'shochu', 'vodka', 'brandy', 'apple jack'];

export const Notebook: React.FC<NotebookProps> = ({ onBack, unlockedBlogs, onUnlockBlog, onViewChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuccess, setShowSuccess] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

    // Easter Egg State
    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const [isUnlockingEasterEgg, setIsUnlockingEasterEgg] = useState(false);
    const [slotValues, setSlotValues] = useState<string[]>(['???', '???', '???', '???']);
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinCount, setSpinCount] = useState(0);
    const [showNovel, setShowNovel] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);

    const introEntry = BLOG_ENTRIES.find(e => e.id === 'intro');

    // Notify parent when view changes between index and detail
    useEffect(() => {
        onViewChange?.(selectedEntryId !== null);
    }, [selectedEntryId, onViewChange]);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return;

        // Check for Easter Egg Trigger
        if (query === 'dram elysium') {
            setIsUnlockingEasterEgg(true);
            setTimeout(() => {
                setShowEasterEgg(true);
                setIsUnlockingEasterEgg(false);
                setSearchQuery('');
                setErrorMsg('');
                // Reset slots
                setSlotValues(['READY', 'TO', 'SPIN', '...']);
            }, 800);
            return;
        }

        // Normalize query to handle Chinese/English punctuation (！ -> !)
        const normalizedQuery = query.replace('！', '!');
        const foundEntry = BLOG_ENTRIES.find(entry => entry.password.toLowerCase() === normalizedQuery);

        if (foundEntry) {
            if (!unlockedBlogs.includes(foundEntry.id)) {
                onUnlockBlog(foundEntry.id);
                // Trigger visual success effect
                setShowSuccess(foundEntry.title);
                setTimeout(() => setShowSuccess(null), 1500);
                setErrorMsg('');
                // Auto open the new entry
                setSelectedEntryId(foundEntry.id);
            } else {
                setErrorMsg('该日志已解锁。');
                setSelectedEntryId(foundEntry.id);
            }
            setSearchQuery('');
        } else {
            setErrorMsg('鸡尾酒配方没10000个也有9000个，这么试是学不到真本事的');
        }
    };

    const spinSlots = () => {
        if (isSpinning) return;
        setIsSpinning(true);
        setSpinCount(prev => prev + 1);

        // Animation simulation
        let cycles = 0;
        const maxCycles = 20; // Longer spin
        const interval = setInterval(() => {
            setSlotValues([
                SLOT_1[Math.floor(Math.random() * SLOT_1.length)],
                SLOT_2[Math.floor(Math.random() * SLOT_2.length)],
                SLOT_3[Math.floor(Math.random() * SLOT_3.length)],
                SLOT_4[Math.floor(Math.random() * SLOT_4.length)]
            ]);
            cycles++;
            if (cycles >= maxCycles) {
                clearInterval(interval);
                setIsSpinning(false);
            }
        }, 80);
    };

    // Function to parse text and highlight phrases wrapped in __
    const renderContentWithHighlights = (content: string) => {
        // Split by the delimiter __
        const parts = content.split(/__([^_]+)__/g);

        return parts.map((part, index) => {
            // Every odd index is the content inside the delimiters
            if (index % 2 === 1) {
                return (
                    <span key={index} className="font-bold text-red-600 border-b-2 border-red-500/40 px-1 transform -rotate-2 inline-block">
                        {part}
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    const renderBlogBody = (entry: BlogEntry) => {
        const { content } = entry;

        // 1. Separate "Update" section
        const updateMarker = "💡 更新";
        const parts = content.split(updateMarker);
        const mainContent = parts[0];
        const updateContent = parts.length > 1 ? parts.slice(1).join(updateMarker) : null;

        // 2. Separate Recipe vs Description in mainContent
        // Heuristic: The first block separated by double newline is likely the recipe if it looks like one.
        const splitIndex = mainContent.indexOf('\n\n');
        let recipeBlock = "";
        let descriptionBlock = mainContent;

        if (splitIndex !== -1) {
            const firstPart = mainContent.substring(0, splitIndex).trim();
            // Heuristic: Check if first part contains digits (quantities) and is short enough or formatted like list
            if (/[0-9]/.test(firstPart) && /[a-zA-Z]/.test(firstPart)) {
                recipeBlock = firstPart;
                descriptionBlock = mainContent.substring(splitIndex).trim();
            }
        }

        return (
            <>
                {/* Recipe Section - Distinct Serif Font, Clean Layout */}
                {recipeBlock && (
                    <div className="mb-8 border border-stone-300 p-6 bg-[#fcfbf9] shadow-sm relative mx-2 text-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[10px] font-mono tracking-widest text-stone-400 uppercase">
                            COCKTAIL RECIPE
                        </div>
                        {(() => {
                            const lines = recipeBlock.split('\n');
                            const title = lines[0];
                            const rest = lines.slice(1).join('\n');
                            return (
                                <>
                                    <div className="mb-4">
                                        <h3 className="text-xl md:text-2xl font-black text-stone-900 font-serif-film uppercase tracking-widest border-b-2 border-stone-900/10 pb-2 inline-block px-8 transform -rotate-1">
                                            {renderContentWithHighlights(title)}
                                        </h3>
                                    </div>
                                    <div className="text-sm md:text-base font-serif-film text-stone-800 whitespace-pre-wrap leading-loose tracking-wide">
                                        {renderContentWithHighlights(rest)}
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                )}

                {/* Description/Narrative Section */}
                <div className="text-base md:text-lg leading-relaxed text-indigo-900 whitespace-pre-wrap font-hand font-bold tracking-wide opacity-90 px-2">
                    {descriptionBlock.startsWith('（') && descriptionBlock.indexOf('）') !== -1 ? (() => {
                        const closingIndex = descriptionBlock.indexOf('）');
                        const prologue = descriptionBlock.substring(1, closingIndex);
                        const rest = descriptionBlock.substring(closingIndex + 1);

                        // Split prologue by punctuation for "Stage Direction" look
                        const prologueLines = prologue.split(/([，。；！])/).reduce((acc, curr, i, arr) => {
                            if (curr.match(/[，。；！]/) && i > 0) {
                                acc[acc.length - 1] += curr;
                            } else if (curr.trim()) {
                                acc.push(curr);
                            }
                            return acc;
                        }, [] as string[]);

                        return (
                            <>
                                <div className="mb-8 pl-4 border-l-2 border-indigo-300/50 italic text-indigo-700/80 font-serif text-sm md:text-base space-y-2">
                                    {prologueLines.map((line, idx) => (
                                        <div key={idx}>
                                            {line.trim()}
                                        </div>
                                    ))}
                                </div>
                                {renderContentWithHighlights(rest.trim())}
                            </>
                        );
                    })() : (
                        renderContentWithHighlights(descriptionBlock)
                    )}
                </div>

                {/* Update Section - Same Purple Handwriting but separated */}
                {updateContent && (
                    <>
                        <div className="my-6 border-t-2 border-dashed border-indigo-300 relative mx-2">
                            <span className="absolute -top-3 left-0 bg-white pr-2 text-xs font-bold text-indigo-400 font-mono tracking-widest">
                                LATER ADDED
                            </span>
                        </div>

                        <div className="relative pl-4 border-l-4 border-indigo-900/20 mx-2">
                            <h3 className="font-hand text-indigo-800 font-bold text-lg mb-2 flex items-center gap-2">
                                💡 更新:
                            </h3>
                            <div className="text-sm md:text-base leading-relaxed text-indigo-900/90 whitespace-pre-wrap font-hand tracking-wide font-bold">
                                {renderContentWithHighlights(updateContent.startsWith('：') ? updateContent.substring(1) : updateContent)}
                            </div>
                        </div>
                    </>
                )}

                {/* Attachment: Novel */}
                {entry.attachments && entry.attachments.length > 0 && entry.attachmentType === 'novel' && (
                    <button
                        onClick={() => { setShowNovel(true); setPageIndex(0); }}
                        className="mt-8 w-full relative group cursor-pointer text-left focus:outline-none"
                    >
                        <div className="absolute inset-0 bg-stone-800 shadow-md transform rotate-1 rounded-sm translate-y-1 translate-x-1"></div>
                        <div className="relative bg-[#f5f5f0] border-l-4 border-stone-800 p-4 h-32 flex items-center justify-between overflow-hidden hover:bg-white transition-colors border border-stone-300">
                            <div className="flex flex-col z-10">
                                <span className="font-serif text-xl text-stone-900 tracking-widest font-black uppercase mb-1">
                                    {entry.title}
                                </span>
                                <span className="text-xs font-sans text-stone-500 font-normal">
                                    Scanned Document • PDF Source
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-900 transition-colors">
                                    READ ATTACHMENT
                                </span>
                                <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                    ↗
                                </div>
                            </div>

                            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f5f5f0] to-transparent pointer-events-none"></div>
                        </div>
                    </button>
                )}
            </>

        );
    };

    const currentEntry = selectedEntryId ? BLOG_ENTRIES.find(e => e.id === selectedEntryId) : null;

    return (
        <div className="flex-1 bg-stone-200 flex flex-col relative overflow-hidden text-stone-800 font-sans">
            {/* Blog Header */}
            <div className="bg-sky-700 text-white p-4 border-b-4 border-sky-900 flex justify-between items-center shadow-lg relative z-20">
                <div>
                    <h1 className="text-xl font-bold tracking-tight">Apple's Secret Space</h1>
                    <p className="text-xs text-sky-200 mt-1">只记录真实的感受。</p>
                </div>
                <button onClick={onBack} className="text-xs bg-sky-800 hover:bg-sky-600 px-3 py-1 rounded border border-sky-400">退出登录</button>
            </div>

            {/* Success Overlay (Unlock Reward) */}
            {showSuccess && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-none">
                    <div className="bg-white p-8 border-4 border-green-600 shadow-2xl transform rotate-3 flex flex-col items-center">
                        <div className="text-green-600 font-bold border-2 border-green-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4 animate-bounce">
                            ✓
                        </div>
                        <h2 className="text-2xl font-black text-stone-800 uppercase tracking-widest">New Entry</h2>
                        <p className="text-stone-600 mt-2 font-serif text-lg italic">"{showSuccess}"</p>
                        <p className="text-xs text-stone-400 mt-4 font-mono">UNLOCKED</p>
                    </div>
                </div>
            )}

            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-stone-200 relative z-10">
                {/* Background texture - only show on index view with reduced opacity */}
                {!currentEntry && (
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-10 pointer-events-none z-0"></div>
                )}
                <div className="max-w-2xl mx-auto space-y-8 pb-20 relative z-10">

                    {/* EASTER EGG: DRAM ELYSIUM SLOT MACHINE */}
                    {showEasterEgg ? (
                        <div className="animate-in zoom-in-95 duration-500 relative">
                            <button
                                onClick={() => setShowEasterEgg(false)}
                                className="mb-6 text-xs font-mono font-bold text-stone-500 hover:text-sky-700 flex items-center gap-1 uppercase tracking-widest transition-colors"
                            >
                                ← Back to Blog
                            </button>

                            {/* Dram Elysium - Flat Paper Style (Enhanced) */}
                            <div className="relative p-8 bg-[#f5f0e6] rounded-sm border-2 border-stone-800 shadow-[4px_4px_0px_rgba(40,30,20,1)] max-w-3xl mx-auto rotate-1">

                                {/* Background Pattern: Subtle Grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-sm overflow-hidden"></div>

                                {/* Decor: Coffee Stain */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 border-[16px] border-[#8b451310] rounded-full blur-[2px] pointer-events-none"></div>

                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber-100/80 backdrop-blur-sm shadow-sm rotate-1 z-10 box-decoration-clone">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20"></div>
                                </div>

                                {/* Custom Hand-drawn Animations */}
                                <style>{`
                                    /* Fast efficient shake for the mixer */
                                    @keyframes shake-fast {
                                        0% { transform: translate(0, 0) rotate(0deg); }
                                        25% { transform: translate(-1px, 1px) rotate(-2deg); }
                                        50% { transform: translate(1px, -1px) rotate(2deg); }
                                        75% { transform: translate(-1px, -1px) rotate(-1deg); }
                                        100% { transform: translate(0, 0) rotate(0deg); }
                                    }
                                    
                                    /* Pinwheel/Windmill rotation for the logo - 10x faster */
                                    @keyframes pinwheel-spin {
                                        0% { transform: rotate(0deg); }
                                        100% { transform: rotate(360deg); }
                                    }
                                    
                                    /* Camera flash overlay fade-out */
                                    @keyframes flash-overlay {
                                        0% { opacity: 1; }
                                        15% { opacity: 0.8; }
                                        40% { opacity: 0.4; }
                                        70% { opacity: 0.15; }
                                        100% { opacity: 0; }
                                    }

                                    .animate-shake-mixer {
                                        animation: shake-fast 0.2s linear infinite;
                                        transform-origin: center center;
                                    }

                                    .animate-shake-logo {
                                        animation: pinwheel-spin 0.04s ease-in-out infinite;
                                        transform-origin: 70% center;
                                    }
                                    
                                    .animate-flash-overlay {
                                        animation: flash-overlay 2.5s ease-out forwards;
                                    }

                                    .hand-drawn-border {
                                        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                                    }
                                `}</style>

                                <div className="text-center mb-10 relative z-10">
                                    {/* Flash overlay - appears when spinning */}
                                    {isSpinning && (
                                        <div className="absolute inset-0 bg-white pointer-events-none animate-flash-overlay z-50 rounded-lg"></div>
                                    )}

                                    <h2 className="font-serif-film text-4xl text-stone-900 mb-4 tracking-tight" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>Dram Elysium</h2>
                                    <div className="relative inline-block">
                                        <p className="font-hand text-stone-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto bg-white/60 p-4 border-2 border-stone-800 hand-drawn-border shadow-sm transform -rotate-1">
                                            "你找到了彩蛋！这是一个随机配方工具，不知道做什么的调酒师们，请感受一下幸运！"
                                            <br />
                                            <span className="block mt-2 font-bold text-stone-800 text-right">——来自不吃苹果的苹果大王</span>
                                        </p>
                                    </div>
                                </div>

                                {/* The Slots Grid (Flat Style - Single Row) */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 mb-12 px-4 relative z-10">
                                    {[0, 1, 2, 3].map((idx) => (
                                        <div key={idx} className="bg-white border-2 border-stone-800 p-2 flex flex-col items-center justify-center h-28 relative shadow-[3px_3px_0px_#2c2c2c] hand-drawn-border transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2c2c2c]">
                                            {/* Note Tag */}
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[9px] px-2 py-0.5 min-w-[50px] text-center transform rotate-1 rounded-sm">
                                                ITEM #{idx + 1}
                                            </div>

                                            <span className={`
                                                font-hand text-lg md:text-xl text-stone-900 text-center leading-tight font-bold
                                                ${isSpinning ? 'opacity-40 blur-[1px]' : ''}
                                                transition-all duration-100
                                                break-all
                                            `}>
                                                {slotValues[idx]}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* The Cute Shaker Button */}
                                <div className="flex justify-center -mb-12 relative z-30">
                                    <button
                                        onClick={spinSlots}
                                        disabled={isSpinning}
                                        className={`
                                            group relative w-24 h-24 md:w-32 md:h-32
                                            transition-all duration-200 
                                            ${isSpinning ? 'animate-shake-mixer cursor-default' : 'hover:scale-105 active:scale-95 cursor-pointer'}
                                        `}
                                    >
                                        <img
                                            src="/assets/shaker_cute.png"
                                            alt="Shake for Luck"
                                            className="w-full h-full object-contain drop-shadow-md opacity-90 contrast-125 sepia-[.2]"
                                        />

                                        {/* Speech Bubble */}
                                        <div className={`
                                            absolute top-0 -right-8 bg-white border-2 border-stone-800 px-3 py-2 rounded-2xl rounded-bl-none shadow-[2px_2px_0_rgba(0,0,0,0.1)]
                                            transition-all duration-300 transform
                                            ${isSpinning ? 'opacity-100 scale-105 rotate-12' : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-2'}
                                        `}>
                                            <span className="font-hand text-stone-800 text-xs font-bold block whitespace-nowrap">
                                                {isSpinning ? "Mixing..." : "Shake me!"}
                                            </span>
                                        </div>
                                    </button>
                                </div>

                                {/* Corner Logo */}
                                <div className={`absolute bottom-6 right-6 w-14 h-14 md:w-20 md:h-20 transition-transform duration-200 z-40 ${isSpinning ? 'animate-shake-logo' : 'hover:rotate-12'}`}>
                                    <img
                                        src="/assets/dram_logo.png"
                                        alt="Dram Logo"
                                        className="w-full h-full object-contain opacity-90 drop-shadow-sm"
                                    />
                                </div>

                            </div>
                        </div>
                    ) : !currentEntry ? (
                        /* INDEX VIEW */
                        <div className={`space-y-8 animate-in slide-in-from-left-4 duration-300 ${isUnlockingEasterEgg ? 'opacity-0 scale-95 transition-all duration-700' : ''}`}>

                            {/* INTRO NOTE (Pinned at top of Index) */}
                            {introEntry && (
                                <div className="relative transform rotate-[-1deg] mb-8">
                                    <div className="absolute top-1 left-1 w-full h-full bg-black/10 rounded-sm"></div>
                                    <div className="relative bg-[#f0eadd] p-6 border border-[#d6cbb8] shadow-md rounded-sm">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-red-900/10 blur-[1px] transform rotate-1"></div>
                                        <div className="border-b border-stone-300 pb-2 mb-2 flex justify-between">
                                            <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">README.TXT</span>
                                            <span className="text-xs font-mono text-stone-400">2020.05.20</span>
                                        </div>
                                        <p className="font-hand text-lg text-stone-800 leading-relaxed font-bold">
                                            {introEntry.content}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Search/Unlock Box */}
                            <div className="bg-stone-900 border-2 border-stone-700 p-4 shadow-md rounded-sm caret-slow">
                                <label className="block text-xs font-bold text-stone-400 uppercase mb-2">学习检索 (输入鸡尾酒名):</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="例如: Boiler Maker"
                                        className={`flex-1 bg-stone-800 text-stone-200 border border-stone-600 p-2 text-sm focus:outline-none focus:border-sky-500 font-mono ${isUnlockingEasterEgg ? 'border-amber-400 bg-amber-50 text-amber-600 shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-105 transition-all duration-300' : ''}`}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    />
                                    <button
                                        onClick={handleSearch}
                                        className="bg-stone-200 border border-stone-400 px-4 text-xs font-bold hover:bg-stone-300 text-stone-700 transition-colors"
                                    >
                                        解锁
                                    </button>
                                </div>
                                {errorMsg && <p className="text-xs text-red-400 mt-2">{errorMsg}</p>}
                            </div>

                            {/* Directory List */}
                            <div>
                                <h3 className="text-stone-500 font-mono text-xs uppercase tracking-widest mb-4 border-b border-stone-300 pb-2">
                                    Archived Entries ({unlockedBlogs.filter(id => id !== 'intro').length})
                                </h3>
                                <div className="grid gap-3">
                                    {BLOG_ENTRIES.map(entry => {
                                        if (!unlockedBlogs.includes(entry.id) || entry.id === 'intro') return null;
                                        return (
                                            <button
                                                key={entry.id}
                                                onClick={() => setSelectedEntryId(entry.id)}
                                                className="bg-white border border-stone-300 p-4 shadow-sm hover:shadow-md hover:border-sky-400 transition-all text-left flex items-center group relative overflow-hidden"
                                            >
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-stone-300 group-hover:bg-sky-500 transition-colors"></div>
                                                <div className="w-10 h-10 bg-stone-100 flex items-center justify-center mr-4 rounded-sm border border-stone-200">
                                                    <span className="text-xl">📄</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-stone-700 group-hover:text-sky-700 font-mono">{entry.title}</h4>
                                                    <p className="text-[10px] text-stone-400 font-mono uppercase">2020 ARCHIVE</p>
                                                </div>
                                                <span className="ml-auto text-stone-300 group-hover:text-sky-500 font-mono text-xs">OPEN →</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* DETAIL VIEW */
                        <div className="relative group no-caret">
                            <button
                                onClick={() => setSelectedEntryId(null)}
                                className="mb-4 text-xs font-mono text-stone-500 hover:text-sky-600 flex items-center gap-1"
                            >
                                ← BACK TO INDEX
                            </button>

                            <div className="bg-white border border-stone-300 p-6 shadow-sm relative z-20">
                                <div className="border-b border-dashed border-stone-300 pb-2 mb-4 flex justify-between items-baseline">
                                    <h2 className="text-lg font-bold text-sky-800 font-mono">{currentEntry.title}</h2>
                                    <span className="text-xs text-stone-400 font-mono">2020</span>
                                </div>

                                {/* Render Body */}
                                {renderBlogBody(currentEntry)}

                                <div className="mt-6 pt-4 border-t border-stone-100 text-[10px] text-stone-400 text-right font-mono">
                                    Posted by Apple
                                </div>
                            </div>

                            {/* Sticky Note Rendering */}
                            {currentEntry.stickyNote && (
                                <div className="
                                relative w-full md:w-64 md:ml-auto
                                bg-yellow-200 p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.2)] 
                                transform rotate-1 md:rotate-2 border border-yellow-300
                                mt-8 mb-4 font-hand text-stone-800 text-xs leading-relaxed z-20
                           ">
                                    <div className="w-8 h-3 bg-yellow-400/50 absolute -top-1 left-1/2 -translate-x-1/2 opacity-50"></div>
                                    <h4 className="font-bold border-b border-yellow-700/20 pb-1 mb-2 text-yellow-900/80">IMPORTANT TIPS:</h4>
                                    <div className="space-y-3">
                                        {currentEntry.stickyNote.split('\n').map((line, idx) => (
                                            <div key={idx} className="relative">
                                                <p className={`relative z-10 ${idx === 4 ? 'font-bold text-stone-900' : ''}`}>
                                                    {line}
                                                </p>
                                                {/* Pencil Circle for the 5th tip */}
                                                {idx === 4 && (
                                                    <div className="absolute -inset-2 pointer-events-none select-none">
                                                        <svg className="w-full h-full overflow-visible opacity-80" viewBox="0 0 300 60" preserveAspectRatio="none">
                                                            {/* Rough hand-drawn circle path */}
                                                            <path
                                                                d="M5,30 Q30,5 150,5 Q270,5 290,30 Q300,55 150,55 Q10,55 5,30 M10,32 Q50,60 120,58"
                                                                fill="none"
                                                                stroke="#c2410c"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                vectorEffect="non-scaling-stroke"
                                                            />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Novel Attachment Modal */}
            {showNovel && currentEntry?.attachments && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={() => setShowNovel(false)}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-full flex flex-col items-center my-8"
                        onClick={e => e.stopPropagation()}
                    >


                        {/* Content Viewer - Flex Layout */}
                        <div className="relative w-full max-h-[85vh] shadow-2xl bg-white rounded-sm flex flex-col md:flex-row overflow-hidden">
                            {/* Previous Button (Desktop) */}
                            <div className="hidden md:flex flex-none w-16 items-center justify-center bg-stone-50 border-r border-stone-100 z-10 cursor-pointer hover:bg-stone-100 transition-colors" onClick={(e) => { e.stopPropagation(); if (pageIndex > 0) setPageIndex(p => p - 1); }}>
                                {pageIndex > 0 ? (
                                    <button
                                        className="p-4 text-stone-400 hover:text-stone-800 transition-colors"
                                        aria-label="Previous Page"
                                    >
                                        <span className="text-4xl font-light leading-none">←</span>
                                    </button>
                                ) : <div className="w-16"></div>}
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="relative flex-1 overflow-y-auto p-8 md:p-16 scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent">
                                {/* Close Button (Inside Content) */}
                                <button
                                    onClick={() => setShowNovel(false)}
                                    className="absolute top-4 right-6 z-20 text-stone-300 hover:text-stone-500 font-serif italic text-sm transition-colors flex items-center gap-1"
                                >
                                    <span>CLOSE</span> ✕
                                </button>

                                {currentEntry.attachments[pageIndex].endsWith('.png') || currentEntry.attachments[pageIndex].endsWith('.jpg') ? (
                                    <img
                                        src={currentEntry.attachments[pageIndex]}
                                        alt={`Page ${pageIndex + 1}`}
                                        className="w-full h-auto block rounded-sm opacity-90 transition-opacity duration-500"
                                    />
                                ) : (
                                    <div className="max-w-2xl mx-auto font-serif text-stone-800 leading-relaxed text-lg whitespace-pre-wrap pb-12">
                                        <div className="flex justify-between items-center border-b border-stone-200 pb-2 mb-8">
                                            <h3 className="text-sm font-sans text-stone-400 uppercase tracking-widest">Page {pageIndex + 1}</h3>
                                            <span className="text-xs font-mono text-stone-300">{currentEntry.attachments[pageIndex].length} chars</span>
                                        </div>
                                        {/* Inline Logo Logic */}
                                        {currentEntry.attachments[pageIndex].includes('「所以，你找到真相了吗？」') ? (
                                            <>
                                                {currentEntry.attachments[pageIndex].replace('「所以，你找到真相了吗？」', '')}
                                                <div className="flex items-center gap-4 mt-8 justify-end">
                                                    <span className="font-serif italic">「所以，你找到真相了吗？」</span>
                                                    <img
                                                        src="/hunstler_logo.jpg"
                                                        alt="Hunstler Klub"
                                                        className="w-16 h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            currentEntry.attachments[pageIndex]
                                        )}
                                    </div>
                                )}

                                {/* Mobile Navigation (Bottom) */}
                                <div className="flex md:hidden justify-between mt-12 pt-8 border-t border-stone-100">
                                    <button
                                        disabled={pageIndex === 0}
                                        onClick={(e) => { e.stopPropagation(); setPageIndex(p => p - 1); }}
                                        className={`px-4 py-2 rounded-sm border ${pageIndex === 0 ? 'border-stone-100 text-stone-200' : 'border-stone-300 text-stone-600'}`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        disabled={pageIndex === currentEntry.attachments.length - 1}
                                        onClick={(e) => { e.stopPropagation(); setPageIndex(p => p + 1); }}
                                        className={`px-4 py-2 rounded-sm border ${pageIndex === currentEntry.attachments.length - 1 ? 'border-stone-100 text-stone-200' : 'border-stone-800 bg-stone-800 text-white'}`}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>

                            {/* Next Button (Desktop) */}
                            <div className="hidden md:flex flex-none w-16 items-center justify-center bg-stone-50 border-l border-stone-100 z-10 cursor-pointer hover:bg-stone-100 transition-colors" onClick={(e) => { e.stopPropagation(); if (pageIndex < currentEntry.attachments.length - 1) setPageIndex(p => p + 1); }}>
                                {pageIndex < currentEntry.attachments.length - 1 ? (
                                    <button
                                        className="p-4 text-stone-400 hover:text-stone-800 transition-colors"
                                        aria-label="Next Page"
                                    >
                                        <span className="text-4xl font-light leading-none">→</span>
                                    </button>
                                ) : <div className="w-16"></div>}
                            </div>
                        </div>





                        {/* Footer Info */}
                        <div className="mt-4 flex flex-col items-center gap-2">
                            <div className="flex gap-2">
                                {currentEntry.attachments.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === pageIndex ? 'bg-stone-200 scale-125' : 'bg-stone-700'}`}
                                    />
                                ))}
                            </div>
                            <div className="text-xs font-mono text-stone-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                <span>ITEM {pageIndex + 1}.{currentEntry.attachments.length}</span>
                                <span className="w-8 h-[1px] bg-stone-700"></span>
                                <span>SCANNED_DOC</span>
                            </div>
                        </div>
                    </div>

                </div>
            )
            }
        </div >
    );
};
