import React, { useState } from 'react';
import { Menu, X, Music, ShoppingBag, Calendar, Image, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../constants/brand';
import { NavLink } from './NavLink';

const navItems = [
  { path: '/', label: 'Home', icon: Disc },
  { path: '/tour', label: 'Tour', icon: Calendar },
  { path: '/music', label: 'Music', icon: Music },
  { path: '/store', label: 'Store', icon: ShoppingBag },
  { path: '/gallery', label: 'Gallery', icon: Image },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-gradient-to-r from-black to-purple-900 text-white fixed w-full z-50 backdrop-blur-sm bg-opacity-95"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Disc className="w-8 h-8 mr-2 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {BRAND.name}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} icon={item.icon} label={item.label} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white border-opacity-10"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} icon={item.icon} label={item.label} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};