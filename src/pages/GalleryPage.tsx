import React from 'react';
import { Gallery } from '../components/Gallery';

export const GalleryPage = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80',
      title: 'Live at Madison Square Garden',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      type: 'video',
      url: 'https://example.com/concert-video.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
      title: 'Behind the Scenes - Music Video',
      date: 'February 28, 2024'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80',
      title: 'Album Recording Sessions',
      date: 'January 10, 2024'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-l-lg hover:bg-purple-700">
            All
          </button>
          <button className="px-4 py-2 text-sm font-medium text- purple-600 bg-white border border-purple-600 hover:bg-purple-50">
            Photos
          </button>
          <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-white border border-purple-600 rounded-r-lg hover:bg-purple-50">
            Videos
          </button>
        </div>
      </div>

      <Gallery items={galleryItems} />
    </div>
  );
};