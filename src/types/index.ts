export interface Tour {
  id: number;
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketLink: string;
}

export interface Album {
  id: number;
  title: string;
  coverUrl: string;
  releaseYear: number;
  tracks: Track[];
}

export interface Track {
  id: number;
  title: string;
  duration: string;
  audioUrl: string;
}

export interface MerchItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: 'clothing' | 'accessories' | 'music';
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  date: string;
}