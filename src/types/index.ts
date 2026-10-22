export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  year: string;
  description: string;
  achievements: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  previewImage: string;
}

export type PhotoCategory = 'all' | 'landscapes' | 'architecture' | 'travel';

export interface Photo {
  id: string;
  title: string;
  category: 'landscapes' | 'architecture' | 'travel';
  country: string;
  location: string;
  year: string;
  camera?: string;
  lens?: string;
  url: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface CountryDestination {
  id: string;
  name: string;
  code: string; // ISO 2-letter
  region: string;
  lat: number;
  lng: number;
  yearVisited: string;
  travelNotes: string;
  photoUrl: string;
  highlights: string[];
}

export interface PersonalInterest {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  detailPoints: string[];
  hasAudio?: boolean;
  audioTrackName?: string;
}

export interface CareerMilestone {
  id: string;
  yearRange: string;
  role: string;
  company: string;
  division?: string;
  location: string;
  badge?: string;
  summary: string;
  achievements: string[];
  skills: string[];
  metrics?: { label: string; value: string }[];
  isEducation?: boolean;
}

