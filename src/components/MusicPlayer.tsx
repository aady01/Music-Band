import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, AlertCircle } from 'lucide-react';
import { Track } from '../types';

interface MusicPlayerProps {
  track: Track;
  onNext?: () => void;
  onPrevious?: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  track,
  onNext,
  onPrevious,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [track.audioUrl]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          setError('Unable to play audio. Please try again.');
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setError('Error loading audio. Please try again later.');
    setIsLoading(false);
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 to-black p-4 rounded-lg text-white">
      <audio
        ref={audioRef}
        src={track.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedData={handleLoadedData}
        onError={handleError}
      />
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">{track.title}</h3>
          <p className="text-sm text-gray-300">{track.duration}</p>
        </div>
        <Volume2 className="w-6 h-6" />
      </div>

      {error ? (
        <div className="flex items-center justify-center space-x-2 text-red-400 py-2">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      ) : (
        <div className="flex flex-col space-y-2">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-purple-500 h-1 rounded-full transition-all duration-300"
              style={{
                width: `${(currentTime / parseFloat(track.duration)) * 100}%`,
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">{formatTime(currentTime)}</span>
            <span className="text-sm">{track.duration}</span>
          </div>

          <div className="flex items-center justify-center space-x-4">
            {onPrevious && (
              <button
                onClick={onPrevious}
                className="p-2 hover:bg-purple-800 rounded-full transition-colors"
                disabled={isLoading}
              >
                <SkipBack className="w-6 h-6" />
              </button>
            )}

            <button
              onClick={togglePlay}
              className={`p-3 ${isLoading ? 'bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'} rounded-full transition-colors`}
              disabled={isLoading || !!error}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>

            {onNext && (
              <button
                onClick={onNext}
                className="p-2 hover:bg-purple-800 rounded-full transition-colors"
                disabled={isLoading}
              >
                <SkipForward className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};