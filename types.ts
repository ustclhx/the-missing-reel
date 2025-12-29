
export enum ViewState {
  INTRO = 'INTRO',
  INVENTORY = 'INVENTORY',
  RECORDER = 'RECORDER',
  NOTEBOOK = 'NOTEBOOK',
  FILM_SELECT = 'FILM_SELECT',
  FILM_VIEW = 'FILM_VIEW',
  ENDING = 'ENDING',
  FILM_LOOP = 'FILM_LOOP',
  TITLE_SCREEN = 'TITLE_SCREEN',
  SAVE_SELECT = 'SAVE_SELECT'
}

export interface Item {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface AudioLog {
  id: string;
  searchId: string;
  title: string;
  content: string;
  locked: boolean;
  isAutoPlay?: boolean;
}

export interface BlogEntry {
  id: string;
  password: string;
  title: string;
  date?: string;
  content: string;
  locked: boolean;
  stickyNote?: string;
  attachments?: string[];
  attachmentType?: 'novel';
}

export interface FilmReel {
  id: string;
  reelNumber: number; // The visual number on the box (-1, 1, 2, etc)
  code: number[]; // The required icon combination [0,0,0,0]
  label: string;
  contentTitle?: string;
  contentDesc?: string;
  contentImage?: string | string[];
}
