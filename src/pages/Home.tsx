import React from 'react';
import { MusicPlayer } from '../components/MusicPlayer';
import { tracks } from '../data/tracks';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { BRAND } from '../constants/brand';

export const Home = () => {
  return (
    <PageTransition>
      <div className="relative">
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60">
            <div className="h-full flex flex-col items-center justify-center text-white text-center px-4">
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                {BRAND.name}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl md:text-2xl mb-8"
              >
                {BRAND.description}
              </motion.p>
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="max-w-md w-full"
              >
                <MusicPlayer track={tracks.electricDreams} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};