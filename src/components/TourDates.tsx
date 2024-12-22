import React from 'react';
import { format } from 'date-fns';
import { Tour } from '../types';
import { MapPin, Calendar } from 'lucide-react';

interface TourDatesProps {
  tours: Tour[];
}

export const TourDates: React.FC<TourDatesProps> = ({ tours }) => {
  return (
    <div className="space-y-4">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span className="text-lg font-semibold">
                  {format(new Date(tour.date), 'MMM dd, yyyy')}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium">{tour.venue}</p>
                  <p className="text-gray-600">
                    {tour.city}, {tour.country}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={tour.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Get Tickets
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};