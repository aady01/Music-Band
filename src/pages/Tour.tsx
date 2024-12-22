import React from 'react';
import { TourDates } from '../components/TourDates';

export const Tour = () => {
  const tourDates = [
    {
      id: 1,
      date: '2024-04-15',
      venue: 'Madison Square Garden',
      city: 'New York',
      country: 'USA',
      ticketLink: 'https://tickets.com/1'
    },
    {
      id: 2,
      date: '2024-04-18',
      venue: 'O2 Arena',
      city: 'London',
      country: 'UK',
      ticketLink: 'https://tickets.com/2'
    },
    {
      id: 3,
      date: '2024-04-22',
      venue: 'AccorHotels Arena',
      city: 'Paris',
      country: 'France',
      ticketLink: 'https://tickets.com/3'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Tour Dates</h1>
      <TourDates tours={tourDates} />
    </div>
  );
};