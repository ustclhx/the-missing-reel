// Save Manager for The Missing Reel
// Handles game state persistence using localStorage

export interface GameSaveData {
    unlockedLogs: string[];
    unlockedBlogs: string[];
    unlockedReels: string[];
    hasAutoPlayedRecorder: boolean;
    hasEndingMusicFinished: boolean;
    timestamp: number;
    version: string; // For future save compatibility
}

const SAVE_KEY = 'the-missing-reel-save';
const SAVE_VERSION = '1.0.0';

export class SaveManager {
    /**
     * Save game state to localStorage
     */
    static saveGame(data: Omit<GameSaveData, 'timestamp' | 'version'>): void {
        try {
            const saveData: GameSaveData = {
                ...data,
                timestamp: Date.now(),
                version: SAVE_VERSION,
            };

            localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
            console.log('[SaveManager] Game saved successfully', saveData);
        } catch (error) {
            console.error('[SaveManager] Failed to save game:', error);
        }
    }

    /**
     * Load game state from localStorage
     */
    static loadGame(): GameSaveData | null {
        try {
            const savedData = localStorage.getItem(SAVE_KEY);

            if (!savedData) {
                console.log('[SaveManager] No save data found');
                return null;
            }

            const data: GameSaveData = JSON.parse(savedData);

            // Validate save data
            if (!data.version || !data.timestamp) {
                console.warn('[SaveManager] Invalid save data format');
                return null;
            }

            console.log('[SaveManager] Game loaded successfully', data);
            return data;
        } catch (error) {
            console.error('[SaveManager] Failed to load game:', error);
            return null;
        }
    }

    /**
     * Check if save data exists
     */
    static hasSaveData(): boolean {
        try {
            const savedData = localStorage.getItem(SAVE_KEY);
            return savedData !== null;
        } catch (error) {
            console.error('[SaveManager] Failed to check save data:', error);
            return false;
        }
    }

    /**
     * Clear save data
     */
    static clearSave(): void {
        try {
            localStorage.removeItem(SAVE_KEY);
            console.log('[SaveManager] Save data cleared');
        } catch (error) {
            console.error('[SaveManager] Failed to clear save data:', error);
        }
    }

    /**
     * Get save timestamp
     */
    static getSaveTimestamp(): number | null {
        const data = this.loadGame();
        return data ? data.timestamp : null;
    }
}
