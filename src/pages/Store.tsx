import React from 'react';
import { MerchGrid } from '../components/MerchGrid';

export const Store = () => {
  const merchItems = [
    {
      id: 1,
      name: 'Tour T-Shirt 2024',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
      description: 'Official tour t-shirt featuring artwork from our latest album',
      category: 'clothing'
    },
    {
      id: 2,
      name: 'Limited Edition Vinyl',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&q=80',
      description: 'Electric Dreams album on 180g colored vinyl',
      category: 'music'
    },
    {
      id: 3,
      name: 'Band Hoodie',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
      description: 'Comfortable hoodie with embroidered band logo',
      category: 'clothing'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Merch Store</h1>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-l-lg hover:bg-purple-700">
            All
          </button>
          <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-white border border-purple-600 hover:bg-purple-50">
            Clothing
          </button>
          <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-white border border-purple-600 rounded-r-lg hover:bg-purple-50">
            Music
          </button>
        </div>
      </div>

      <MerchGrid items={merchItems} />
    </div>
  );
};