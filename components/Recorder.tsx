
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AudioLog } from '../types';
import { AUDIO_LOGS } from '../constants';
import { ThoughtBubble } from './ThoughtBubble';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/i18n';

interface RecorderProps {
    onBack: () => void;
    unlockedLogs: string[];
    onUnlockLog: (id: string) => void;
    hasAutoPlayed: boolean;
    setHasAutoPlayed: (played: boolean) => void;
    onTriggerEnding?: () => void;
    onMusicStart?: () => void;
}

interface ScriptLine {
    id: number;
    speaker: string | null;
    text: string;
    type: 'dialogue' | 'direction';
}

const LINES_PER_PAGE = 4;

export const Recorder: React.FC<RecorderProps> = ({
    onBack,
    unlockedLogs,
    onUnlockLog,
    hasAutoPlayed,
    setHasAutoPlayed,
    onTriggerEnding,
    onMusicStart
}) => {
    const [currentLog, setCurrentLog] = useState<AudioLog | null>(null);
    const [searchName, setSearchName] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [message, setMessage] = useState('等待输入...');

    // Script Player State
    const [scriptLines, setScriptLines] = useState<ScriptLine[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    // Tutorial Bubble State
    const [showTutorial, setShowTutorial] = useState(false);

    useEffect(() => {
        // Check if tutorial has been seen
        const hasSeenTutorial = localStorage.getItem('the-missing-reel-tutorial-seen');
        if (!hasSeenTutorial) {
            // Delay slightly for effect
            const timer = setTimeout(() => setShowTutorial(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismissTutorial = () => {
        setShowTutorial(false);
        localStorage.setItem('the-missing-reel-tutorial-seen', 'true');
    };

    // Sidebar Pagination State
    const [tapePage, setTapePage] = useState(0);
    const TAPES_PER_PAGE = 5;

    const unlockedLogItems = useMemo(() => {
        return AUDIO_LOGS.filter(log => unlockedLogs.includes(log.id));
    }, [unlockedLogs]);

    const totalTapePages = Math.ceil(unlockedLogItems.length / TAPES_PER_PAGE);

    const visibleTapes = useMemo(() => {
        const start = tapePage * TAPES_PER_PAGE;
        return unlockedLogItems.slice(start, start + TAPES_PER_PAGE);
    }, [unlockedLogItems, tapePage]);

    // Prologue Animation State
    const [prologueLines, setPrologueLines] = useState<string[]>([]);
    const [visibleCharCount, setVisibleCharCount] = useState(0);
    const [isPrologueFinished, setIsPrologueFinished] = useState(true);
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Parse script content into structured lines
    const parseScript = (content: string) => {
        const rawLines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        return rawLines.map((line, index) => {
            // Check for Stage Directions (wrapped in parentheses)
            if (line.startsWith('（') || line.startsWith('(')) {
                return { id: index, speaker: null, text: line, type: 'direction' as const };
            }

            // Check for Dialogue (Speaker: Text)
            const match = line.match(/^([^：:]+)[：:](.+)$/);
            if (match) {
                return { id: index, speaker: match[1].trim(), text: match[2].trim(), type: 'dialogue' as const };
            }

            // Fallback
            return { id: index, speaker: null, text: line, type: 'direction' as const };
        });
    };

    const handleSearch = () => {
        const name = searchName.trim();
        const date = searchDate.trim();

        if (!name || !date) {
            setMessage('请输入完整的姓名和日期。');
            return;
        }

        const query = `${name}_${date}`.toLowerCase();

        const foundLog = AUDIO_LOGS.find(log => log.searchId.toLowerCase() === query);
        if (foundLog) {
            if (!unlockedLogs.includes(foundLog.id)) {
                onUnlockLog(foundLog.id);
                setMessage('检索成功。加载中...');
                setTimeout(() => {
                    handlePlayLog(foundLog);
                    setSearchName('');
                    setSearchDate('');
                }, 1000);
            } else {
                setMessage('该录音已存在于列表中。');
                handlePlayLog(foundLog);
            }
        } else {
            setMessage('错误：未找到对应编号的录音。');
        }
    };

    const handlePlayLog = (log: AudioLog) => {
        // Clear any existing typing animation
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        const parsed = parseScript(log.content);
        setScriptLines(parsed);
        setCurrentPage(0);
        setCurrentLog(log);

        // Prologue Animation Logic
        if (parsed.length > 0 && parsed[0].type === 'direction') {
            const fullText = parsed[0].text;
            // Split by punctuation
            const lines = fullText.split(/([，。；！])/).reduce((acc, curr, i) => {
                if (curr.match(/[，。；！]/) && i > 0) {
                    acc[acc.length - 1] += curr;
                } else if (curr.trim()) {
                    acc.push(curr);
                }
                return acc;
            }, [] as string[]);

            setPrologueLines(lines);
            setVisibleCharCount(0);
            setIsPrologueFinished(false);

            // Typewriter Animation
            const totalChars = lines.join('').length;
            // We need to map global char index to lines later.

            let currentChar = 0;
            const typeTick = () => {
                currentChar++;
                setVisibleCharCount(currentChar);

                if (currentChar < totalChars) {
                    // Speed: Fast (30-60ms)
                    const speed = Math.random() * 30 + 30;
                    typingTimeoutRef.current = setTimeout(typeTick, speed);
                } else {
                    setTimeout(() => {
                        setIsPrologueFinished(true);
                        onMusicStart?.();
                    }, 500);
                }
            };
            typeTick();

        } else {
            // No prologue direction found, just show everything
            setPrologueLines([]);
            setIsPrologueFinished(true);
            onMusicStart?.();
        }
    };

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        };
    }, []);

    // Auto-play logic (Only once per app session)
    useEffect(() => {
        if (hasAutoPlayed) return;

        const autoLog = AUDIO_LOGS.find(l => l.isAutoPlay);
        if (autoLog && unlockedLogs.includes(autoLog.id)) {
            setHasAutoPlayed(true);
            setTimeout(() => {
                handlePlayLog(autoLog);
            }, 500);
        }
    }, [hasAutoPlayed, unlockedLogs, setHasAutoPlayed]);

    // Derived state for current page content
    const visibleLines = useMemo(() => {
        const start = currentPage * LINES_PER_PAGE;
        return scriptLines.slice(start, start + LINES_PER_PAGE);
    }, [scriptLines, currentPage]);

    const totalPages = Math.ceil(scriptLines.length / LINES_PER_PAGE);

    const getSpeakerDisplay = (lineIndex: number, speaker: string) => {
        const previousAppearance = scriptLines.find((l, idx) => idx < lineIndex && l.speaker === speaker);
        return previousAppearance ? null : speaker;
    };

    const renderTextWithHighlights = (text: string) => {
        const parts = text.split(/__([^_]+)__/g);
        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return (
                    <span key={index} className="text-red-400 border-b border-red-500/40 pb-0.5 mx-1 font-bold tracking-wider">
                        {part}
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    const getSpeakerStyle = (speaker: string) => {
        // Support both Chinese and English names for bilingual compatibility
        if (speaker.includes('陌生人1') || speaker.includes('Stranger 1')) return 'text-red-600 font-bold';
        if (speaker.includes('苹果') || speaker.includes('Apple')) return 'text-stone-400';
        return 'text-amber-700';
    };

    const getDialogueStyle = (speaker: string) => {
        // Support both Chinese and English names for bilingual compatibility
        if (speaker.includes('陌生人1') || speaker.includes('Stranger 1')) return 'text-red-500/90 border-red-900/50 glitch-text';
        if (speaker.includes('苹果') || speaker.includes('Apple')) return 'text-stone-200 border-stone-600';
        return 'text-amber-500/90 border-amber-900/50';
    };

    const { language } = useLanguage();

    return (
        <div className="flex-1 flex flex-col bg-stone-900 relative">
            {/* Header / Controls */}
            <div className="h-14 sm:h-16 border-b border-stone-800 flex items-center justify-between px-3 sm:px-6 bg-stone-900 shadow-md z-10">
                <button onClick={onBack} className="text-stone-400 hover:text-white text-[10px] sm:text-xs font-mono tracking-widest uppercase shrink-0">
                    [ OFF ]
                </button>
                <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest hidden lg:inline">Tape Index:</span>
                    <div className="flex bg-stone-800/80 border border-stone-700 rounded-sm overflow-hidden group focus-within:border-stone-500 transition-colors items-center">
                        <input
                            type="text"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            placeholder={t('placeholderName', language)}
                            className="bg-transparent text-stone-100 px-1.5 sm:px-2 py-1 text-xs sm:text-sm focus:outline-none w-14 sm:w-20 text-center font-serif-film placeholder-stone-600"
                        />
                        <span className="text-stone-400 font-mono select-none text-xs">_</span>
                        <input
                            type="text"
                            value={searchDate}
                            onChange={(e) => setSearchDate(e.target.value)}
                            placeholder={t('placeholderDate', language)}
                            className="bg-transparent text-stone-100 px-1.5 sm:px-2 py-1 text-xs sm:text-sm focus:outline-none w-16 sm:w-24 text-center font-serif-film placeholder-stone-600"
                        />
                        <button
                            onClick={handleSearch}
                            className="text-stone-300 bg-stone-700 px-2 sm:px-3 py-1 text-[10px] sm:text-xs border-l border-stone-600 hover:bg-stone-600 hover:text-white transition-colors h-full"
                        >
                            PLAY
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative">

                {/* Sidebar: Tape List */}
                <div className={`
            w-full md:w-64 bg-stone-900 border-r border-stone-800 flex flex-col z-20 
            ${currentLog ? 'hidden md:flex' : 'flex'}
        `}>
                    <div className="p-4 border-b border-stone-800 text-[10px] text-stone-400 font-mono text-center tracking-widest">
                        ARCHIVED RECORDINGS
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-hide">
                        {message !== '等待输入...' && message !== 'WAITING FOR INPUT...' && (
                            <div className="text-xs text-amber-500 p-2 font-mono text-center animate-pulse">{message}</div>
                        )}
                        {visibleTapes.map(log => {
                            const isActive = currentLog?.id === log.id;
                            return (
                                <button
                                    key={log.id}
                                    onClick={() => handlePlayLog(log)}
                                    className={`
                                w-full text-left p-3 border rounded-sm transition-all group relative overflow-hidden
                                ${isActive
                                            ? 'bg-stone-800 border-amber-900/50 text-amber-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]'
                                            : 'bg-stone-950/30 border-stone-800 text-stone-400 hover:bg-stone-800 hover:border-stone-600'
                                        }
                            `}
                                >
                                    <div className="flex items-baseline justify-between relative z-10">
                                        <span className={`font-mono text-xs ${isActive ? 'text-amber-500' : 'text-stone-600 group-hover:text-stone-500'}`}>
                                            {isActive ? '● PLAYING' : '○ READY'}
                                        </span>
                                        {isActive && <span className="text-[10px] animate-pulse">00:0{Math.floor(Math.random() * 9)}...</span>}
                                    </div>
                                    <div className="mt-2 font-serif-film text-sm tracking-wide truncate relative z-10">
                                        {log.title}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Sidebar Pagination */}
                    {totalTapePages > 1 && (
                        <div className="p-2 border-t border-stone-800 flex justify-between items-center bg-stone-900">
                            <button
                                onClick={() => setTapePage(p => Math.max(0, p - 1))}
                                disabled={tapePage === 0}
                                className="text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:hover:text-stone-500 px-2 py-1 text-xs font-mono"
                            >
                                &lt; PREV
                            </button>
                            <span className="text-[10px] text-stone-600 font-mono">
                                PG {tapePage + 1}/{totalTapePages}
                            </span>
                            <button
                                onClick={() => setTapePage(p => Math.min(totalTapePages - 1, p + 1))}
                                disabled={tapePage === totalTapePages - 1}
                                className="text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:hover:text-stone-500 px-2 py-1 text-xs font-mono"
                            >
                                NEXT &gt;
                            </button>
                        </div>
                    )}
                </div>

                {/* Main Area: Script Player */}
                <div className="flex-1 bg-black relative flex flex-col items-center justify-center p-6 overflow-y-auto">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,1)_0%,rgba(0,0,0,1)_100%)]"></div>

                    {currentLog ? (
                        <>
                            {/* Side Navigation (Only show after prologue) */}
                            {isPrologueFinished && totalPages > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                                        disabled={currentPage === 0}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 text-stone-600 hover:text-stone-300 disabled:opacity-0 transition-all opacity-50 hover:opacity-100"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (currentPage === totalPages - 1) {
                                                if (currentLog?.id === 'awen_20231103') {
                                                    onTriggerEnding?.();
                                                }
                                            } else {
                                                setCurrentPage(p => p + 1);
                                            }
                                        }}
                                        disabled={currentPage === totalPages - 1 && currentLog?.id !== 'awen_20231103'}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 text-stone-600 hover:text-stone-300 disabled:opacity-0 transition-all opacity-50 hover:opacity-100"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>

                                    {/* Bottom Progress Dots */}
                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-50">
                                        {Array.from({ length: totalPages }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`rounded-full transition-all duration-300 ${i === currentPage
                                                    ? 'w-2 h-2 bg-[#DA291C] shadow-[0_0_8px_rgba(218,41,28,0.6)]'
                                                    : 'w-1.5 h-1.5 bg-stone-800'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            <div className="w-full max-w-2xl relative z-10 flex flex-col h-full max-h-[70vh] sm:max-h-[600px] mb-8 sm:mb-12 px-4 sm:px-8 md:px-16">
                                <div className="text-center mb-8 opacity-70">
                                    <h2 className="text-stone-500 text-xs font-mono tracking-[0.5em] uppercase border-b border-stone-800 pb-2 inline-block">
                                        {currentLog.title} // PAGE {currentPage + 1}
                                    </h2>
                                </div>

                                <div className="flex-1 flex flex-col justify-center space-y-8 min-h-[300px]">
                                    {visibleLines.map((line) => {
                                        const isFirstLine = line.id === 0;
                                        const isHiddenByPrologue = !isPrologueFinished && !isFirstLine;

                                        if (isHiddenByPrologue) return null;

                                        return (
                                            <div key={line.id} className="w-full animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both">
                                                {line.type === 'direction' ? (
                                                    <div className="text-center flex flex-col gap-2 items-center">
                                                        {isFirstLine && !isPrologueFinished ? (
                                                            <div className="space-y-2">
                                                                {(() => {
                                                                    let runningCount = 0;
                                                                    return prologueLines.map((pLine, idx) => {
                                                                        const start = runningCount;
                                                                        const end = start + pLine.length;
                                                                        runningCount += pLine.length;

                                                                        // If we haven't reached this line yet
                                                                        if (visibleCharCount <= start) return null;

                                                                        // Calculate visible part of this line
                                                                        const visibleLength = Math.min(pLine.length, visibleCharCount - start);
                                                                        const visiblePart = pLine.slice(0, visibleLength);

                                                                        return (
                                                                            <p key={idx}
                                                                                className="text-stone-600 italic font-serif-film text-sm md:text-base leading-relaxed tracking-wider px-8"
                                                                            >
                                                                                {renderTextWithHighlights(visiblePart)}
                                                                                {/* Cursor only on the active typing line */}
                                                                                {visibleCharCount > start && visibleCharCount < end && (
                                                                                    <span className="inline-block w-2 h-4 bg-stone-500 ml-1 animate-pulse align-middle"></span>
                                                                                )}
                                                                            </p>
                                                                        );
                                                                    });
                                                                })()}
                                                            </div>
                                                        ) : (
                                                            /* Finished state or not first line */
                                                            <p className={`
                                                    text-stone-600 italic font-serif-film text-sm md:text-base leading-relaxed tracking-wider px-8
                                                    ${line.text.includes('意外中断') ? 'text-red-800 font-bold animate-pulse' : ''}
                                                `}>
                                                                {isFirstLine ? (
                                                                    /* Render all lines statically if finished */
                                                                    prologueLines.map((pLine, idx) => (
                                                                        <span key={idx} className="block mb-2">{renderTextWithHighlights(pLine)}</span>
                                                                    ))
                                                                ) : (
                                                                    renderTextWithHighlights(line.text)
                                                                )}
                                                            </p>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col gap-1">
                                                        {line.speaker && getSpeakerDisplay(line.id, line.speaker) && (
                                                            <span className={`
                                                    text-[10px] uppercase tracking-[0.2em] font-mono mb-1 ml-1
                                                    ${getSpeakerStyle(line.speaker)}
                                                `}>
                                                                {line.speaker}
                                                            </span>
                                                        )}
                                                        <p className={`
                                                font-serif-film text-lg md:text-xl leading-relaxed pl-4 border-l-2
                                                ${getDialogueStyle(line.speaker || '')}
                                            `}>
                                                            {renderTextWithHighlights(line.text)}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Footer Removed - Nav is now absolute */}

                            </div>
                        </>
                    ) : (
                        <div className="text-stone-700 font-mono text-xs tracking-widest text-center animate-pulse">
                            NO TAPE LOADED
                        </div>
                    )}
                </div>
            </div>
            {/* Tutorial Bubble */}
            <ThoughtBubble
                text={t('recorderTutorial', language)}
                isVisible={showTutorial}
                onClose={handleDismissTutorial}
            />
        </div>
    );
};
