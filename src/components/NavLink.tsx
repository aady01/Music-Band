import { NavLink as RouterNavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

export const NavLink = ({ to, icon: Icon, label }: NavLinkProps) => {
  return (
    <RouterNavLink to={to}>
      {({ isActive }) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-4 py-2 flex items-center space-x-2 rounded-lg transition-colors ${
            isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{label}</span>
          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white bg-opacity-10 rounded-lg"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.div>
      )}
    </RouterNavLink>
  );
};