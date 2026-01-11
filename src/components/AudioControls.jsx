import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Slider } from "./ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const AudioControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState([0]);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume[0] / 100;
      audio.loop = true;

      // Event listeners para el progreso
      const updateProgress = () => {
        if (audio.duration) {
          setCurrentTime(audio.currentTime);
          setDuration(audio.duration);
          const progressPercent = (audio.currentTime / audio.duration) * 100;
          setProgress([progressPercent]);
        }
      };

      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);

      // Reproducir cuando el usuario interactúe con la página
      const handleUserInteraction = () => {
        if (!isPlaying && audio.paused) {
          audio
            .play()
            .then(() => setIsPlaying(true))
            .catch((error) => console.log("Autoplay prevented:", error));
        }
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("keydown", handleUserInteraction);
      };

      document.addEventListener("click", handleUserInteraction);
      document.addEventListener("keydown", handleUserInteraction);

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("keydown", handleUserInteraction);
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume[0] / 100;
    }
  }, [volume, isMuted]);

  const togglePlayPause = async (e) => {
    e.preventDefault();
    const audio = audioRef.current;
    if (audio) {
      try {
        if (isPlaying) {
          await audio.pause();
          setIsPlaying(false);
        } else {
          await audio.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error toggling play/pause:", error);
      }
    }
  };

  const toggleMute = (e) => {
    e.preventDefault();
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    if (newVolume[0] > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (newProgress) => {
    const audio = audioRef.current;
    if (audio && duration) {
      const newTime = (newProgress[0] / 100) * duration;
      audio.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-4 text-white">
      <audio ref={audioRef} preload="auto">
        <source src="/mycv/mp3/track01.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause button */}
      <button
        onClick={togglePlayPause}
        className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" />
        )}
      </button>

      {/* Progress section */}
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-xs text-gray-300 whitespace-nowrap">
          {formatTime(currentTime)}
        </span>
        <div className="w-24">
          <Slider
            value={progress}
            onValueChange={handleProgressChange}
            max={100}
            step={0.1}
            className="w-full"
          />
        </div>
        <span className="text-xs text-gray-300 whitespace-nowrap">
          {formatTime(duration)}
        </span>
      </div>

      {/* Volume control with popover */}
      <Popover open={showVolume} onOpenChange={setShowVolume}>
        <PopoverTrigger asChild>
          <button
            className="text-gray-300 hover:text-white transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume[0] === 0 ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-3" align="center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-full">
              <Slider
                value={volume}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <button
                onClick={toggleMute}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                {isMuted || volume[0] === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(volume[0])}%
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AudioControls;
