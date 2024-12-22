import React from 'react';
import { MusicPlayer } from '../components/MusicPlayer';
import { tracks } from '../data/tracks';

export const Music = () => {
  const albums = [
    {
      id: 1,
      title: 'Electric Dreams',
      coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
      releaseYear: 2024,
      tracks: [
        tracks.electricDreams,
        tracks.neonNights,
        tracks.cyberHeart
      ]
    },
    {
      id: 2,
      title: 'Midnight Symphony',
      coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80',
      releaseYear: 2023,
      tracks: [
        { ...tracks.electricDreams, id: 4, title: "Starlight" },
        { ...tracks.neonNights, id: 5, title: "Moon Dance" },
        { ...tracks.cyberHeart, id: 6, title: "Night Sky" }
      ]
    }
  ];

  const [selectedAlbum, setSelectedAlbum] = React.useState(albums[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentTrackIndex((prev) =>
      prev === selectedAlbum.tracks.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? selectedAlbum.tracks.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Music</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {albums.map((album) => (
          <div
            key={album.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              selectedAlbum.id === album.id ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => {
              setSelectedAlbum(album);
              setCurrentTrackIndex(0);
            }}
          >
            <img
              src={album.coverUrl}
              alt={album.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{album.title}</h2>
              <p className="text-gray-600">{album.releaseYear}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Now Playing: {selectedAlbum.title}
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <MusicPlayer
            track={selectedAlbum.tracks[currentTrackIndex]}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Track List</h3>
            <div className="space-y-2">
              {selectedAlbum.tracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`p-3 rounded-lg cursor-pointer ${
                    currentTrackIndex === index
                      ? 'bg-purple-100 text-purple-700'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setCurrentTrackIndex(index)}
                >
                  <div className="flex justify-between items-center">
                    <span>{track.title}</span>
                    <span className="text-gray-600">{track.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};