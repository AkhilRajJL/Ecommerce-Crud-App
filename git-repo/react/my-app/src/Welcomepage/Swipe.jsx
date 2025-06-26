import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../Welcomepage/images1-removebg-preview.png";
import introSound from '../Welcomepage/intro-sound.mp3'; 
import './Swipe.css';

function IntroPage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing');
    }, 5000);

    const tryPlayAudio = async () => {
      if (audioRef.current && !audioPlayed) {
        try { 
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          console.log("Audio started ✅");
          setAudioPlayed(true);
        } catch (err) {
          console.warn("Autoplay blocked:", err.message);
        }
      }
    };

   
    tryPlayAudio();

    const handleUserInteraction = () => {
      tryPlayAudio();
    };


    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      clearTimeout(timer);
    
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [navigate, audioPlayed]);

 
  const handleAudioError = (e) => {
    console.error("Audio loading error:", e);
  };

  
  const handleCanPlay = () => {
    console.log("Audio ready to play");
  };

  const word = "FlipZone";

  return (
    <div className="intro-wrapper">
      <audio 
        ref={audioRef} 
        src={introSound} 
        preload="auto"
        onError={handleAudioError}
        onCanPlay={handleCanPlay}
      />
      <div className="intro-content">
        <img className="intro-img" src={img} alt="Logo" />
        <h1 className="intro-title">
          {word.split("").map((char, i) => (
            <span
              key={i}
              className={`intro-letter delay-${i} ${i < 4 ? 'flip' : 'zone'}`}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default IntroPage;