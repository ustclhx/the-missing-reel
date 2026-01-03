// Internationalization utilities for bilingual support

export enum Language {
    Chinese = 'zh',
    English = 'en',
}

// UI Translation keys and values
export const uiTranslations = {
    // Title Screen
    title: {
        zh: 'The Missing Reel',
        en: 'The Missing Reel',
    },
    newGame: {
        zh: '新游戏',
        en: 'New Game',
    },
    continueGame: {
        zh: '继续游戏',
        en: 'Continue',
    },
    credits: {
        zh: '制作人员',
        en: 'Credits',
    },

    // Main Interface
    inventory: {
        zh: '物品',
        en: 'Inventory',
    },
    progress: {
        zh: '进度',
        en: 'Progress',
    },

    // Items
    recorder: {
        zh: '小型录音机',
        en: 'Voice Recorder',
    },
    recorderDesc: {
        zh: '里面有一盘磁带，似乎录了一些对话。',
        en: 'Contains a cassette tape with recorded conversations.',
    },
    notebook: {
        zh: '博客主页',
        en: 'Blog Archive',
    },
    notebookDesc: {
        zh: '需要密码才能访问的历史日志归档。',
        en: 'Password-protected archive of historical logs.',
    },
    film: {
        zh: '8mm 胶卷',
        en: '8mm Film Reels',
    },
    filmDesc: {
        zh: '共计40个，以4个不同形状的酒杯标记顺序，且每个胶卷上所绘制杯子形状不超过2种。',
        en: '40 reels total, marked with 4 different glass shapes for ordering. Each reel shows no more than 2 glass types.',
    },

    // Recorder Interface
    audioLogs: {
        zh: '录音档案',
        en: 'Audio Logs',
    },
    play: {
        zh: '播放',
        en: 'Play',
    },
    pause: {
        zh: '暂停',
        en: 'Pause',
    },
    close: {
        zh: '关闭',
        en: 'Close',
    },
    back: {
        zh: '返回',
        en: 'Back',
    },

    // Blog Interface
    blogTitle: {
        zh: "Apple's Secret Space",
        en: "Apple's Secret Space",
    },
    blogSubtitle: {
        zh: '只记录真实的感受。',
        en: 'Recording genuine feelings only.',
    },
    searchPlaceholder: {
        zh: '例如: Boiler Maker',
        en: 'e.g.: Boiler Maker',
    },
    unlock: {
        zh: '解锁',
        en: 'Unlock',
    },
    logout: {
        zh: '退出登录',
        en: 'Logout',
    },
    archivedEntries: {
        zh: '已归档条目',
        en: 'Archived Entries',
    },
    backToIndex: {
        zh: '← 返回索引',
        en: '← BACK TO INDEX',
    },
    postedBy: {
        zh: '发布者',
        en: 'Posted by',
    },
    readme: {
        zh: '主页',
        en: 'README',
    },
    searchLabel: {
        zh: '学习检索 (输入鸡尾酒名):',
        en: 'LEARNING SEARCH (ENTER COCKTAIL NAME):',
    },
    blogIntro: {
        zh: '亲爱的朋友，这是一个不公开博客。 如果你想学习鸡尾酒，请输入酒名查看； 如果你只是想要偷窥我的树洞，那请你转身离开，去看综艺节目吧。',
        en: 'Dear friend, this is a private blog. If you want to learn about cocktails, enter the drink name to search. If you just want to peek into my secrets, please turn around and go watch variety shows instead.',
    },
    searchError: {
        zh: '鸡尾酒配方没10000个也有9000个，这么试是学不到真本事的',
        en: "There are thousands of cocktail recipes - you won't master them by random guessing",
    },
    alreadyUnlocked: {
        zh: '该日志已解锁。',
        en: 'Already unlocked.',
    },

    // Film Interface
    filmArchive: {
        zh: '胶片档案',
        en: 'Film Archive',
    },
    selectReel: {
        zh: '选择胶卷',
        en: 'Select Reel',
    },

    // Progress Tracker
    progressLabel: {
        zh: '进度',
        en: 'Progress',
    },

    // Thought Bubble (notebook tutorial)
    notebookTutorial: {
        zh: '都出来写博客了，怎么还要这样藏来藏去，看来我要在其他地方获得一些酒名的线索才能偷窥他的树洞。这个闪来闪去的特效又是什么，有没有考虑过读者的眼睛，算他有良心还放了个可以关闭的按钮。',
        en: "Writes a blog yet still hides like this... Looks like I'll need to find clues for drink names elsewhere to peek into his secret hole. And what is this flickering effect? Has he considered the readers' eyes? Suppose he has some conscience adding a close button.",
    },
    recorderTutorial: {
        zh: '苹果这家伙还藏了不少秘密，连一个录音机都设置了机关，看起来除了一个公开的录音外，其他的录音都需要按照对话对象+日期的格式检索才能暴露',
        en: 'Apple has hidden quite a few secrets; even the recorder is rigged. It seems apart from one public log, other logs require searching by "Contact + Date" format to be revealed.',
    },
    thoughtBubbleLabel: {
        zh: '我 / 调查者',
        en: 'Me / Investigator',
    },

    // Briefing View
    briefingSkip: {
        zh: '跳过',
        en: 'Skip',
    },

    // Ending
    endingNextPage: {
        zh: '下一页',
        en: 'Next Page',
    },
    endingClose: {
        zh: '关闭',
        en: 'Close',
    },

    // Credits
    creditsTitle: {
        zh: '制作人员',
        en: 'Credits',
    },
    creditsRole: {
        zh: '游戏设计与开发',
        en: 'Game Design & Development',
    },

    // Effects toggle
    effectsOn: {
        zh: '特效: ON',
        en: 'Effects: ON',
    },
    effectsOff: {
        zh: '特效: OFF',
        en: 'Effects: OFF',
    },

    // Intro Slides
    introSlide1Line1: {
        zh: '"苹果"是我在摄影社最好的朋友。',
        en: '"Apple" is my best friend from the photography club.',
    },
    introSlide1Line2: {
        zh: '到今天，他已经不告而别一周了。',
        en: 'As of today, he has been missing for a week without a word.',
    },
    introSlide2Line1: {
        zh: '这几年，苹果总是昼伏夜出，行踪神秘。',
        en: 'These past years, Apple has been active at night, his whereabouts mysterious.',
    },
    introSlide2Line2: {
        zh: '如今玩失踪，女友再也受不了，决定同他分手。',
        en: 'Now with him missing, his girlfriend couldn\'t take it anymore and decided to break up.',
    },
    introSlide2Line3: {
        zh: '离开前，她将苹果寄放的背包交给了我。',
        en: 'Before leaving, she gave me the backpack Apple had left with her.',
    },
    introSlide3Header: {
        zh: '我打开背包，里面躺着：',
        en: 'I OPENED THE BACKPACK, INSIDE LAY:',
    },
    introSlide3Item1: {
        zh: '📹 一台老式 8mm 摄影机',
        en: '📹 An old 8mm camera',
    },
    introSlide3Item2: {
        zh: '🎞️ 数不清的 8mm 胶卷，有些做了标记，有些是新的',
        en: '🎞️ Countless 8mm film reels, some marked, some new',
    },
    introSlide3Item3: {
        zh: '📼 一支小型录音机',
        en: '📼 A small voice recorder',
    },
    introSlide4Line1: {
        zh: '苹果有一个秘密，只有我知道。',
        en: 'Apple has a secret that only I know.',
    },
    introSlide4Line2: {
        zh: '这些年，他其实一直在酒吧兼职打工。',
        en: 'All these years, he\'s actually been working part-time at a bar.',
    },
    introSlide4Line3: {
        zh: '他干得很有热情，在个人博客上写学习日记，',
        en: 'He worked passionately, writing learning journals on his personal blog,',
    },
    introSlide4Line4: {
        zh: '但却从未把这件事告诉过生活中的其他朋友。',
        en: 'but never told any of his other friends about this.',
    },
    introSlide5Line1: {
        zh: '所以自始至终，我也没能探明那家酒吧究竟在哪。',
        en: 'So from beginning to end, I never found out where that bar actually was.',
    },
    introSlide5Line2: {
        zh: '如今，胶卷、录音机和博客，就成了找到苹果的唯一线索。',
        en: 'Now, the film reels, recorder, and blog have become the only clues to finding Apple.',
    },
    introClickContinue: {
        zh: '[ 点击继续 ]',
        en: '[ CLICK TO CONTINUE ]',
    },
    introClickStart: {
        zh: '[ 点击开始调查 ]',
        en: '[ CLICK TO BEGIN INVESTIGATION ]',
    },
    introSkip: {
        zh: 'SKIP',
        en: 'SKIP',
    },

    // Dram Elysium Easter Egg
    dramElysiumIntro: {
        zh: '你找到了彩蛋！这是一个随机配方工具，不知道做什么的调酒师们，请感受一下幸运！',
        en: 'You found the Easter egg! This is a random recipe tool. Bartenders who don\'t know what to make, let\'s seek some luck!',
    },
    dramElysiumSignature: {
        zh: '——来自不吃苹果的苹果大王',
        en: '—From The Apple King Who Doesn\'t Eat Apples',
    },

    // Ending
    endingLine1: {
        zh: '亲爱的朋友，感谢你为「苹果」付出的时光。',
        en: 'Dear friend, thank you for the time you spent searching for \'Apple\'.',
    },
    endingLine2: {
        zh: '虽然眼下仍未寻得他的踪迹，但已经大致窥见了事件全貌。',
        en: 'Though we still haven\'t found his whereabouts, we\'ve glimpsed the full picture of events.',
    },
    endingLine3: {
        zh: '我们的故事还未结束，仅是暂告段落。现在，请在博客中搜索 \'dram elysium\'，这是苹果截至最后一篇未被开启的博客内容，给陌生读者的小小礼物。',
        en: 'Our story isn\'t over, merely paused for now. Search for \'dram elysium\' in the blog—this is Apple\'s final unopened blog entry, a small gift to unknown readers.',
    },
    endingClickReturn: {
        zh: '[ 点击返回游戏 ]',
        en: '[ CLICK TO RETURN TO GAME ]',
    },
} as const;

export type TranslationKey = keyof typeof uiTranslations;

// Get translated text based on current language
export function t(key: TranslationKey, language: Language): string {
    return uiTranslations[key][language];
}

// Character name translations
export const characterNames = {
    苹果: { zh: '苹果', en: 'Apple' },
    阿山: { zh: '阿山', en: 'Ash' },
    阿文: { zh: '阿文', en: 'Vin' },
    孟奇: { zh: '孟奇', en: 'Monty' },
    玲: { zh: '玲', en: 'Lynn' },
    老莫: { zh: '老莫', en: 'Old Mo' },
    老陈: { zh: '老陈', en: 'Chen' },
    小树: { zh: '小树', en: 'Sprout' },
    梓荀: { zh: '梓荀', en: 'Xun' },
    宋阳: { zh: '宋阳', en: 'Song' },
    阿昭: { zh: '阿昭', en: 'Zhao' },
    大白: { zh: '大白', en: 'Big White' },
} as const;

// Helper to translate character names in text
export function translateCharacterNames(text: string, language: Language): string {
    if (language === Language.Chinese) return text;

    let translated = text;
    Object.entries(characterNames).forEach(([zh, names]) => {
        const regex = new RegExp(zh, 'g');
        translated = translated.replace(regex, names.en);
    });

    return translated;
}
