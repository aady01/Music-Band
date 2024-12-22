import React from 'react';
import { MerchItem } from '../types';
import { ShoppingCart } from 'lucide-react';

interface MerchGridProps {
  items: MerchItem[];
}

export const MerchGrid: React.FC<MerchGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};