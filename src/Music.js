import React, { useEffect, useRef } from 'react';
import backGroundMusic from './audio/Don\'t Steal My Heart - Everet Almond.mp3';

export function Music() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Autoplay the audio when the component mounts
    const audio = audioRef.current;
    
    // Attempt to play when component mounts
    const playAudio = () => {
      if (audio) {
        audio.play().catch(error => {
          console.log('Autoplay prevented, interaction required.');
        });
      }
    };

    playAudio();
  }, []);

  return (
    <div>
      <audio ref={audioRef} autoPlay>
        <source src={backGroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
