import React from 'react';

interface ProgressTrackerProps {
    unlockedLogs: string[];
    unlockedBlogs: string[];
    unlockedReels: string[];
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
    unlockedLogs,
    unlockedBlogs,
    unlockedReels,
}) => {
    // Total unlockable content counts
    const TOTAL_LOGS = 19;
    const TOTAL_BLOGS = 19;  // 19 total blogs (intro is always unlocked and counted in unlockedBlogs)
    const TOTAL_REELS = 12;
    const TOTAL_ITEMS = TOTAL_LOGS + TOTAL_BLOGS + TOTAL_REELS; // 50

    // Calculate current progress
    const unlockedCount = unlockedLogs.length + unlockedBlogs.length + unlockedReels.length;
    const progressPercentage = Math.round((unlockedCount / TOTAL_ITEMS) * 100);

    return (
        <div className="w-full bg-[#0f0e0d]/30 border border-[#3d342b] rounded-sm px-3 sm:px-4 py-3">
            {/* Responsive layout - wraps on small screens */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Progress label and percentage */}
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[9px] font-mono text-[#8c8273] uppercase tracking-wider">
                        Progress
                    </span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#d6cbb8]">
                        {progressPercentage}%
                    </span>
                </div>

                {/* Progress Bar - takes remaining space, min width to prevent squeeze */}
                <div className="flex-1 min-w-[120px] h-2 bg-[#1a1816] border border-[#3d342b] overflow-hidden rounded-sm">
                    <div
                        className="h-full bg-gradient-to-r from-[#8c8273] via-[#a89078] to-[#d6cbb8] transition-all duration-500 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>

                {/* Compact stats - prevent shrinking */}
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono text-[#8c8273] shrink-0">
                    <span className="whitespace-nowrap">
                        <span className="text-[#d6cbb8] font-bold">{unlockedLogs.length}</span>/{TOTAL_LOGS}R
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="text-[#d6cbb8] font-bold">{unlockedBlogs.length}</span>/{TOTAL_BLOGS}B
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="text-[#d6cbb8] font-bold">{unlockedReels.length}</span>/{TOTAL_REELS}F
                    </span>
                </div>
            </div>
        </div>
    );
};
