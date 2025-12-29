import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Inventory } from './components/Inventory';
import { Recorder } from './components/Recorder';
import { Notebook } from './components/Notebook';
import { FilmViewer } from './components/FilmViewer';
import { FilmSelector } from './components/FilmSelector';
import { Intro } from './components/Intro';
import { BackgroundMusic } from './components/BackgroundMusic';
import { ViewState, FilmReel } from './types';
import { INITIAL_ITEMS, MUSIC_TRACKS, FILM_ARCHIVE, AUDIO_LOGS, BLOG_ENTRIES } from './constants';

const TestPage: React.FC = () => {
    const [view, setView] = useState<ViewState>(ViewState.INTRO);
    const [unlockedLogs, setUnlockedLogs] = useState<string[]>(['log_auto']);
    const [unlockedBlogs, setUnlockedBlogs] = useState<string[]>(['intro']);
    const [unlockedReels, setUnlockedReels] = useState<string[]>([]);
    const [hasAutoPlayedRecorder, setHasAutoPlayedRecorder] = useState(false);
    const [currentFilm, setCurrentFilm] = useState<FilmReel | null>(null);
    const [showTestPanel, setShowTestPanel] = useState(true);

    // Determine current music track
    let currentMusic = null;
    if (view === ViewState.RECORDER) {
        currentMusic = MUSIC_TRACKS.recorder;
    } else if (view === ViewState.NOTEBOOK) {
        currentMusic = MUSIC_TRACKS.notebook;
    } else if (view === ViewState.FILM_SELECT || view === ViewState.FILM_VIEW) {
        currentMusic = MUSIC_TRACKS.film;
    } else if (view === ViewState.INVENTORY) {
        currentMusic = MUSIC_TRACKS.notebook;
    }

    const handleSelectItem = (id: string) => {
        switch (id) {
            case 'recorder': setView(ViewState.RECORDER); break;
            case 'notebook': setView(ViewState.NOTEBOOK); break;
            case 'film': setView(ViewState.FILM_SELECT); break;
            case 'camera': alert('这台机器很重,看起来是Bolex的H8系列。'); break;
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

    // Test functions
    const unlockAllLogs = () => {
        const allLogIds = AUDIO_LOGS.map(log => log.id);
        setUnlockedLogs(allLogIds);
    };

    const unlockAllBlogs = () => {
        const allBlogIds = BLOG_ENTRIES.map(blog => blog.id);
        setUnlockedBlogs(allBlogIds);
    };

    const unlockAllReels = () => {
        const allReelIds = FILM_ARCHIVE.map(reel => reel.id);
        setUnlockedReels(allReelIds);
    };

    const resetAllProgress = () => {
        setUnlockedLogs(['log_auto']);
        setUnlockedBlogs(['intro']);
        setUnlockedReels([]);
        setHasAutoPlayedRecorder(false);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Layout>
                <BackgroundMusic currentTrack={currentMusic} />

                {view === ViewState.INTRO && (
                    <Intro onComplete={() => setView(ViewState.INVENTORY)} />
                )}

                {view === ViewState.INVENTORY && (
                    <Inventory items={INITIAL_ITEMS} onSelectItem={handleSelectItem} />
                )}

                {view === ViewState.RECORDER && (
                    <Recorder
                        onBack={() => setView(ViewState.INVENTORY)}
                        unlockedLogs={unlockedLogs}
                        onUnlockLog={handleUnlockLog}
                        hasAutoPlayed={hasAutoPlayedRecorder}
                        setHasAutoPlayed={setHasAutoPlayedRecorder}
                    />
                )}

                {view === ViewState.NOTEBOOK && (
                    <Notebook
                        onBack={() => setView(ViewState.INVENTORY)}
                        unlockedBlogs={unlockedBlogs}
                        onUnlockBlog={handleUnlockBlog}
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
                    <FilmViewer
                        film={currentFilm}
                        onBack={() => setView(ViewState.FILM_SELECT)}
                    />
                )}
            </Layout>

            {/* Test Control Panel */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: showTestPanel ? 0 : -320,
                    width: '320px',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    color: '#fff',
                    padding: '20px',
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                    transition: 'right 0.3s ease',
                    zIndex: 10000,
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    borderLeft: '2px solid #444'
                }}
            >
                <h2 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#ffd700' }}>🧪 测试面板</h2>

                {/* Toggle Button */}
                <button
                    onClick={() => setShowTestPanel(!showTestPanel)}
                    style={{
                        position: 'absolute',
                        left: '-40px',
                        top: '20px',
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#000',
                        color: '#ffd700',
                        border: '2px solid #444',
                        borderRadius: '4px 0 0 4px',
                        cursor: 'pointer',
                        fontSize: '20px'
                    }}
                >
                    {showTestPanel ? '→' : '←'}
                </button>

                {/* View Navigation */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '14px', marginBottom: '10px', color: '#4fc3f7' }}>视图导航</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button onClick={() => setView(ViewState.INTRO)} style={buttonStyle}>
                            开场动画 (Intro)
                        </button>
                        <button onClick={() => setView(ViewState.INVENTORY)} style={buttonStyle}>
                            物品栏 (Inventory)
                        </button>
                        <button onClick={() => setView(ViewState.RECORDER)} style={buttonStyle}>
                            录音机 (Recorder)
                        </button>
                        <button onClick={() => setView(ViewState.NOTEBOOK)} style={buttonStyle}>
                            笔记本 (Notebook)
                        </button>
                        <button onClick={() => setView(ViewState.FILM_SELECT)} style={buttonStyle}>
                            胶片选择 (Film Select)
                        </button>
                    </div>
                </div>

                {/* Current State */}
                <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }}>
                    <h3 style={{ fontSize: '14px', marginBottom: '10px', color: '#4fc3f7' }}>当前状态</h3>
                    <div style={{ fontSize: '11px', lineHeight: '1.6' }}>
                        <div><strong>视图:</strong> {view}</div>
                        <div><strong>已解锁日志:</strong> {unlockedLogs.length}/{AUDIO_LOGS.length}</div>
                        <div><strong>已解锁博客:</strong> {unlockedBlogs.length}/{BLOG_ENTRIES.length}</div>
                        <div><strong>已解锁胶片:</strong> {unlockedReels.length}/{FILM_ARCHIVE.length}</div>
                        <div><strong>录音机自动播放:</strong> {hasAutoPlayedRecorder ? '是' : '否'}</div>
                    </div>
                </div>

                {/* Unlock Controls */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '14px', marginBottom: '10px', color: '#4fc3f7' }}>解锁控制</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button onClick={unlockAllLogs} style={buttonStyle}>
                            解锁所有日志 ({AUDIO_LOGS.length})
                        </button>
                        <button onClick={unlockAllBlogs} style={buttonStyle}>
                            解锁所有博客 ({BLOG_ENTRIES.length})
                        </button>
                        <button onClick={unlockAllReels} style={buttonStyle}>
                            解锁所有胶片 ({FILM_ARCHIVE.length})
                        </button>
                        <button onClick={resetAllProgress} style={{ ...buttonStyle, backgroundColor: '#d32f2f' }}>
                            重置所有进度
                        </button>
                    </div>
                </div>

                {/* Individual Item Unlocks */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '14px', marginBottom: '10px', color: '#4fc3f7' }}>单项解锁</h3>

                    <details style={{ marginBottom: '10px' }}>
                        <summary style={{ cursor: 'pointer', marginBottom: '5px', color: '#ffd700' }}>日志列表</summary>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '10px' }}>
                            {AUDIO_LOGS.map(log => (
                                <label key={log.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                                    <input
                                        type="checkbox"
                                        checked={unlockedLogs.includes(log.id)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                handleUnlockLog(log.id);
                                            } else {
                                                setUnlockedLogs(prev => prev.filter(id => id !== log.id));
                                            }
                                        }}
                                    />
                                    <span>{log.title}</span>
                                </label>
                            ))}
                        </div>
                    </details>

                    <details style={{ marginBottom: '10px' }}>
                        <summary style={{ cursor: 'pointer', marginBottom: '5px', color: '#ffd700' }}>博客列表</summary>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '10px' }}>
                            {BLOG_ENTRIES.map(blog => (
                                <label key={blog.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                                    <input
                                        type="checkbox"
                                        checked={unlockedBlogs.includes(blog.id)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                handleUnlockBlog(blog.id);
                                            } else {
                                                setUnlockedBlogs(prev => prev.filter(id => id !== blog.id));
                                            }
                                        }}
                                    />
                                    <span>{blog.title}</span>
                                </label>
                            ))}
                        </div>
                    </details>

                    <details style={{ marginBottom: '10px' }}>
                        <summary style={{ cursor: 'pointer', marginBottom: '5px', color: '#ffd700' }}>胶片列表</summary>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '10px' }}>
                            {FILM_ARCHIVE.map(reel => (
                                <label key={reel.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                                    <input
                                        type="checkbox"
                                        checked={unlockedReels.includes(reel.id)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                handleUnlockReel(reel.id);
                                            } else {
                                                setUnlockedReels(prev => prev.filter(id => id !== reel.id));
                                            }
                                        }}
                                    />
                                    <span>{reel.label}</span>
                                </label>
                            ))}
                        </div>
                    </details>
                </div>

                {/* Other Controls */}
                <div>
                    <h3 style={{ fontSize: '14px', marginBottom: '10px', color: '#4fc3f7' }}>其他控制</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button
                            onClick={() => setHasAutoPlayedRecorder(!hasAutoPlayedRecorder)}
                            style={buttonStyle}
                        >
                            切换录音机自动播放
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'rgba(76, 175, 80, 0.2)', borderRadius: '4px', fontSize: '11px' }}>
                    <strong>提示:</strong> 使用此面板可以快速测试游戏的各个功能和状态,无需完整游玩流程。
                </div>
            </div>
        </div>
    );
};

const buttonStyle: React.CSSProperties = {
    padding: '8px 12px',
    backgroundColor: '#333',
    color: '#fff',
    border: '1px solid #555',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'all 0.2s',
    textAlign: 'left'
};

export default TestPage;
