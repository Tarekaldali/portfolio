import { useEffect, useRef } from 'react';
import './StarBackground.css';

const StarBackground = () => {
  const starsRef = useRef(null);

    useEffect(() => {
      const createStars = () => {
        const container = starsRef.current;
        if (!container) return;
        
        container.innerHTML = '';
        const starCount = 150;

        for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 3}s`;
          star.style.animationDuration = `${2 + Math.random() * 3}s`;
          const size = Math.random() * 3;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          container.appendChild(star);
        }
      };

      createStars();
    }, []);

    return <div ref={starsRef} className="star-background" />;
  };

  export default StarBackground;
