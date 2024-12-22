import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer group"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="max-w-4xl w-full">
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-auto"
                />
              ) : (
                <video
                  src={selectedItem.url}
                  controls
                  className="w-full h-auto"
                />
              )}
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.date}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};