
import React, { useState, useRef, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Inventory } from './components/Inventory';
import { Recorder } from './components/Recorder';
import { Notebook } from './components/Notebook';
import { FilmViewer } from './components/FilmViewer';
import { ShreddedFilmViewer } from './components/ShreddedFilmViewer';
import { FilmSelector } from './components/FilmSelector';
import { Intro } from './components/Intro';
import { FilmLoopIntro } from './components/FilmLoopIntro';
import { BackgroundMusic } from './components/BackgroundMusic';
import { TitleScreen } from './components/TitleScreen';
import { SaveSelectScreen } from './components/SaveSelectScreen';
import { Ending } from './components/Ending';
import { ViewState, FilmReel } from './types';
import { INITIAL_ITEMS, MUSIC_TRACKS } from './constants';
import { SaveManager } from './utils/SaveManager';
import { getAssetPath } from './utils/assetPath';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.FILM_LOOP);
  const [unlockedLogs, setUnlockedLogs] = useState<string[]>(['log_auto']); // First log unlocked
  const [unlockedBlogs, setUnlockedBlogs] = useState<string[]>(['intro']); // Intro blog unlocked
  const [unlockedReels, setUnlockedReels] = useState<string[]>([]); // Track unlocked film reels
  const [hasAutoPlayedRecorder, setHasAutoPlayedRecorder] = useState(false);

  // Track which film is currently loaded in the viewer
  const [currentFilm, setCurrentFilm] = useState<FilmReel | null>(null);

  // Global music mute state (shared by all music systems)
  const [isMusicMuted, setIsMusicMuted] = useState(false);

  // Track if we're viewing an article detail in Notebook
  const [isNotebookDetailView, setIsNotebookDetailView] = useState(false);
  // User preference to separate toggle for flickering/film effects in Notebook
  const [isFlickerDisabled, setIsFlickerDisabled] = useState(false);

  // Recorder background music state and management
  const [recorderMusicActive, setRecorderMusicActive] = useState(false);
  const recorderAudioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Film module background music state and management
  const filmAudioRef = useRef<HTMLAudioElement | null>(null);
  const filmFadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Ending music state and management
  const endingAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isEndingMusicPlaying, setIsEndingMusicPlaying] = useState(false);
  const [hasEndingMusicFinished, setHasEndingMusicFinished] = useState(false);
  const endingFadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load game from save on mount
  const loadGameFromSave = () => {
    const saveData = SaveManager.loadGame();
    if (saveData) {
      setUnlockedLogs(saveData.unlockedLogs);
      setUnlockedBlogs(saveData.unlockedBlogs);
      setUnlockedReels(saveData.unlockedReels);
      setHasAutoPlayedRecorder(saveData.hasAutoPlayedRecorder);
      setHasEndingMusicFinished(saveData.hasEndingMusicFinished);
      console.log('[App] Game loaded from save');
    }
  };

  // Load save data on mount
  useEffect(() => {
    loadGameFromSave();
  }, []);

  // Auto-save game state (with debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SaveManager.saveGame({
        unlockedLogs,
        unlockedBlogs,
        unlockedReels,
        hasAutoPlayedRecorder,
        hasEndingMusicFinished,
      });
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [unlockedLogs, unlockedBlogs, unlockedReels, hasAutoPlayedRecorder, hasEndingMusicFinished]);

  // Initialize Recorder audio element
  useEffect(() => {
    if (!recorderAudioRef.current) {
      const audio = new Audio(getAssetPath('/assets/recorder_music.mp3'));
      audio.loop = true;
      audio.volume = 0.7; // 70% volume
      recorderAudioRef.current = audio;
    }

    return () => {
      if (recorderAudioRef.current) {
        recorderAudioRef.current.pause();
        recorderAudioRef.current = null;
      }
    };
  }, []);

  // Initialize Film audio element
  useEffect(() => {
    if (!filmAudioRef.current) {
      const audio = new Audio(getAssetPath('/assets/film_music.mp3'));
      audio.loop = true;
      audio.volume = 0.7; // 70% volume
      filmAudioRef.current = audio;
    }

    return () => {
      if (filmAudioRef.current) {
        filmAudioRef.current.pause();
        filmAudioRef.current = null;
      }
    };
  }, []);

  // Initialize Ending audio element
  useEffect(() => {
    if (!endingAudioRef.current) {
      const audio = new Audio(getAssetPath('/assets/end_music.mp3'));
      audio.loop = false; // Play once, don't loop
      audio.volume = 0.7; // 70% volume

      // Track when music finishes
      audio.addEventListener('ended', () => {
        setHasEndingMusicFinished(true);
        setIsEndingMusicPlaying(false);
      });

      endingAudioRef.current = audio;
    }

    return () => {
      if (endingAudioRef.current) {
        endingAudioRef.current.pause();
        endingAudioRef.current = null;
      }
    };
  }, []);

  // Handle Recorder music playback
  useEffect(() => {
    const audio = recorderAudioRef.current;
    if (!audio) return;

    // Only play when recorderMusicActive is true (set by onMusicStart callback)
    const shouldPlayRecorder = recorderMusicActive && !isMusicMuted;

    // Check if ending music is playing and should take priority
    const endingHasPriority = isEndingMusicPlaying && !hasEndingMusicFinished;

    if (shouldPlayRecorder) {
      // If ending music is active, we need to cross-fade
      if (endingHasPriority) {
        // Cross-fade: fade out ending, fade in recorder
        const endingAudio = endingAudioRef.current;
        if (endingAudio && endingAudio.volume > 0) {
          // Fade out ending music
          if (endingFadeIntervalRef.current) clearInterval(endingFadeIntervalRef.current);
          const endingStartVol = endingAudio.volume;
          let endingStep = 0;
          endingFadeIntervalRef.current = setInterval(() => {
            endingStep++;
            endingAudio.volume = Math.max(0, endingStartVol - (endingStartVol / 20 * endingStep));
            if (endingStep >= 20) {
              endingAudio.pause();
              if (endingFadeIntervalRef.current) {
                clearInterval(endingFadeIntervalRef.current);
                endingFadeIntervalRef.current = null;
              }
            }
          }, 50);
        }
      }

      // Start or resume recorder playback
      audio.volume = 0.7;
      audio.play().catch(err => console.warn('Recorder music play failed:', err));
    } else {
      // Fade out when exiting or deactivating
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      const startVolume = audio.volume;
      const fadeSteps = 20; // 20 steps over 1 second = 50ms per step
      const volumeDecrement = startVolume / fadeSteps;
      let step = 0;

      fadeIntervalRef.current = setInterval(() => {
        step++;
        const newVolume = Math.max(0, startVolume - (volumeDecrement * step));
        audio.volume = newVolume;

        if (step >= fadeSteps || newVolume <= 0) {
          audio.pause();
          if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          }

          // If ending music was paused and hasn't finished, resume it
          if (isEndingMusicPlaying && !hasEndingMusicFinished) {
            const endingAudio = endingAudioRef.current;
            if (endingAudio && endingAudio.paused) {
              // Fade in ending music
              endingAudio.volume = 0;
              endingAudio.play().catch(err => console.warn('Ending music resume failed:', err));
              let fadeInStep = 0;
              const fadeInInterval = setInterval(() => {
                fadeInStep++;
                endingAudio.volume = Math.min(0.7, 0.7 / 20 * fadeInStep);
                if (fadeInStep >= 20) {
                  clearInterval(fadeInInterval);
                }
              }, 50);
            }
          }
        }
      }, 50); // 50ms intervals for 1 second total fade
    }

    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, [recorderMusicActive, view, isMusicMuted, isEndingMusicPlaying, hasEndingMusicFinished]);

  // Handle Film music playback
  useEffect(() => {
    const audio = filmAudioRef.current;
    if (!audio) return;

    const isInFilmView = view === ViewState.FILM_SELECT || view === ViewState.FILM_VIEW;
    const shouldPlayFilm = isInFilmView && !isMusicMuted;

    // Check if ending music is playing and should take priority
    const endingHasPriority = isEndingMusicPlaying && !hasEndingMusicFinished;

    if (shouldPlayFilm) {
      // If ending music is active, we need to cross-fade
      if (endingHasPriority) {
        // Cross-fade: fade out ending, fade in film
        const endingAudio = endingAudioRef.current;
        if (endingAudio && endingAudio.volume > 0) {
          // Fade out ending music
          if (endingFadeIntervalRef.current) clearInterval(endingFadeIntervalRef.current);
          const endingStartVol = endingAudio.volume;
          let endingStep = 0;
          endingFadeIntervalRef.current = setInterval(() => {
            endingStep++;
            endingAudio.volume = Math.max(0, endingStartVol - (endingStartVol / 20 * endingStep));
            if (endingStep >= 20) {
              endingAudio.pause();
              if (endingFadeIntervalRef.current) {
                clearInterval(endingFadeIntervalRef.current);
                endingFadeIntervalRef.current = null;
              }
            }
          }, 50);
        }
      }

      // Start or resume film playback
      audio.volume = 0.7;
      audio.play().catch(err => console.warn('Film music play failed:', err));
    } else {
      // Fade out when exiting or muting
      if (filmFadeIntervalRef.current) {
        clearInterval(filmFadeIntervalRef.current);
      }

      const startVolume = audio.volume;
      const fadeSteps = 20; // 20 steps over 1 second
      const volumeDecrement = startVolume / fadeSteps;
      let step = 0;

      filmFadeIntervalRef.current = setInterval(() => {
        step++;
        const newVolume = Math.max(0, startVolume - (volumeDecrement * step));
        audio.volume = newVolume;

        if (step >= fadeSteps || newVolume <= 0) {
          audio.pause();
          if (filmFadeIntervalRef.current) {
            clearInterval(filmFadeIntervalRef.current);
            filmFadeIntervalRef.current = null;
          }

          // If ending music was paused and hasn't finished, resume it
          if (isEndingMusicPlaying && !hasEndingMusicFinished) {
            const endingAudio = endingAudioRef.current;
            if (endingAudio && endingAudio.paused) {
              // Fade in ending music
              endingAudio.volume = 0;
              endingAudio.play().catch(err => console.warn('Ending music resume failed:', err));
              let fadeInStep = 0;
              const fadeInInterval = setInterval(() => {
                fadeInStep++;
                endingAudio.volume = Math.min(0.7, 0.7 / 20 * fadeInStep);
                if (fadeInStep >= 20) {
                  clearInterval(fadeInInterval);
                }
              }, 50);
            }
          }
        }
      }, 50); // 50ms intervals for 1 second total fade
    }

    return () => {
      if (filmFadeIntervalRef.current) {
        clearInterval(filmFadeIntervalRef.current);
      }
    };
  }, [view, isMusicMuted, isEndingMusicPlaying, hasEndingMusicFinished]);

  // Handle Ending music playback - Trigger state when entering view
  useEffect(() => {
    const isInEndingView = view === ViewState.ENDING;

    // Trigger music when entering ENDING view (once)
    if (isInEndingView && !isEndingMusicPlaying && !hasEndingMusicFinished) {
      console.log('Entering ENDING view, setting ending music to play');
      setIsEndingMusicPlaying(true);
    }
  }, [view, isEndingMusicPlaying, hasEndingMusicFinished]);

  // Handle Ending music playback - Control audio playback
  useEffect(() => {
    const audio = endingAudioRef.current;
    if (!audio) return;

    console.log('Ending music effect:', {
      isEndingMusicPlaying,
      hasEndingMusicFinished,
      isMusicMuted,
      recorderMusicActive,
      view
    });

    // Control playback based on state
    if (isMusicMuted) {
      // When muted, pause immediately
      if (!audio.paused) {
        console.log('Pausing ending music (muted)');
        audio.pause();
      }
    } else if (isEndingMusicPlaying && !hasEndingMusicFinished) {
      // Check if Recorder or Film is currently playing (they take priority)
      const isRecorderActive = recorderMusicActive && view === ViewState.RECORDER;
      const isFilmActive = (view === ViewState.FILM_SELECT || view === ViewState.FILM_VIEW);

      console.log('Ending music should play?', { isRecorderActive, isFilmActive });

      // Only play ending music if not in priority modules
      if (!isRecorderActive && !isFilmActive) {
        if (audio.paused) {
          console.log('Starting ending music playback');
          audio.volume = 0.7;
          audio.play().catch(err => console.warn('Ending music play failed:', err));
        }
      } else {
        // Priority module is active, pause ending music
        if (!audio.paused) {
          console.log('Pausing ending music (priority module active)');
          audio.pause();
        }
      }
    }
  }, [isEndingMusicPlaying, hasEndingMusicFinished, isMusicMuted, recorderMusicActive, view]);

  // Determine current music track
  let currentMusic = null;
  if (view === ViewState.RECORDER) {
    currentMusic = MUSIC_TRACKS.recorder;
  } else if (view === ViewState.NOTEBOOK) {
    currentMusic = null; // No music in blog, only ending music can continue
  } else if (view === ViewState.FILM_SELECT || view === ViewState.FILM_VIEW) {
    currentMusic = MUSIC_TRACKS.film;
  } else if (view === ViewState.INVENTORY) {
    currentMusic = null; // No music on main inventory screen
  } else if (view === ViewState.INTRO || view === ViewState.FILM_LOOP || view === ViewState.ENDING) {
    currentMusic = null; // No music in intro and ending
  }

  const handleSelectItem = (id: string) => {
    switch (id) {
      case 'recorder': setView(ViewState.RECORDER); break;
      case 'notebook': setView(ViewState.NOTEBOOK); break;
      case 'film': setView(ViewState.FILM_SELECT); break;
      default: break;
    }
  };

  const handleUnlockLog = (logId: string) => {
    if (!unlockedLogs.includes(logId)) {
      setUnlockedLogs(prev => [...prev, logId]);
    }
  };

  const handleUnlockBlog = (blogId: string) => {
    if (!unlockedBlogs.includes(blogId)) {
      setUnlockedBlogs(prev => [...prev, blogId]);
    }
  };

  const handleUnlockReel = (reelId: string) => {
    if (!unlockedReels.includes(reelId)) {
      setUnlockedReels(prev => [...prev, reelId]);
    }
  };

  const handleStopEndingMusic = () => {
    setIsEndingMusicPlaying(false);
    setHasEndingMusicFinished(true);
    const audio = endingAudioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  // Reset game state for new game
  const resetGameState = () => {
    console.log('[App] Resetting game state for new game');
    localStorage.removeItem('the-missing-reel-tutorial-seen'); // Reset tutorial bubble flag
    setUnlockedLogs(['log_auto']); // Reset to initial state
    setUnlockedBlogs(['intro']); // Reset to initial state
    setUnlockedReels([]); // Clear all unlocked reels
    setHasAutoPlayedRecorder(false); // Reset auto-play flag
    setHasEndingMusicFinished(false); // Reset ending music flag
    setCurrentFilm(null); // Clear current film
    setView(ViewState.INTRO); // Start from intro
  };

  return (
    <Layout disableFilmEffects={isFlickerDisabled || (view === ViewState.NOTEBOOK && isNotebookDetailView)}>
      <BackgroundMusic
        currentTrack={currentMusic}
        isMuted={isMusicMuted}
        onToggleMute={() => setIsMusicMuted(!isMusicMuted)}
        isEndingMusicPlaying={isEndingMusicPlaying}
        onStopEndingMusic={handleStopEndingMusic}
      />

      {view === ViewState.FILM_LOOP && (
        <FilmLoopIntro onComplete={() => setView(ViewState.TITLE_SCREEN)} />
      )}

      {view === ViewState.TITLE_SCREEN && (
        <TitleScreen onStart={() => setView(ViewState.SAVE_SELECT)} />
      )}

      {view === ViewState.SAVE_SELECT && (
        <SaveSelectScreen
          onNewGame={resetGameState}
          onContinue={() => setView(ViewState.INVENTORY)}
        />
      )}

      {view === ViewState.INTRO && (
        <Intro onComplete={() => setView(ViewState.INVENTORY)} />
      )}

      {view === ViewState.INVENTORY && (
        <Inventory
          items={INITIAL_ITEMS}
          onSelectItem={handleSelectItem}
          unlockedLogs={unlockedLogs}
          unlockedBlogs={unlockedBlogs}
          unlockedReels={unlockedReels}
        />
      )}

      {view === ViewState.RECORDER && (
        <Recorder
          onBack={() => {
            setRecorderMusicActive(false);
            setView(ViewState.INVENTORY);
          }}
          unlockedLogs={unlockedLogs}
          onUnlockLog={handleUnlockLog}
          hasAutoPlayed={hasAutoPlayedRecorder}
          setHasAutoPlayed={setHasAutoPlayedRecorder}
          onTriggerEnding={() => {
            setRecorderMusicActive(false);
            setView(ViewState.ENDING);
          }}
          onMusicStart={() => setRecorderMusicActive(true)}
        />
      )}

      {view === ViewState.NOTEBOOK && (
        <Notebook
          onBack={() => setView(ViewState.INVENTORY)}
          unlockedBlogs={unlockedBlogs}
          onUnlockBlog={handleUnlockBlog}
          onViewChange={setIsNotebookDetailView}
          isFlickerDisabled={isFlickerDisabled}
          onToggleFlicker={() => setIsFlickerDisabled(prev => !prev)}
        />
      )}

      {view === ViewState.FILM_SELECT && (
        <FilmSelector
          onBack={() => setView(ViewState.INVENTORY)}
          onSelectReel={(film) => {
            setCurrentFilm(film);
            setView(ViewState.FILM_VIEW);
          }}
          unlockedReels={unlockedReels}
          onUnlockReel={handleUnlockReel}
        />
      )}


      {view === ViewState.FILM_VIEW && currentFilm && (
        currentFilm.id === 'reel_00' ? (
          <ShreddedFilmViewer
            film={currentFilm}
            onBack={() => setView(ViewState.FILM_SELECT)}
          />
        ) : (
          <FilmViewer
            film={currentFilm}
            onBack={() => setView(ViewState.FILM_SELECT)}
          />
        )
      )}

      {view === ViewState.ENDING && (
        <Ending onComplete={() => setView(ViewState.INVENTORY)} />
      )}
    </Layout>
  );
};

export default App;
