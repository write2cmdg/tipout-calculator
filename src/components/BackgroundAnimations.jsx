
import React, { useState, useEffect } from 'react';

const BackgroundAnimation = () => {
  const [animationId, setAnimationId] = useState(1);

  useEffect(() => {
    setAnimationId(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div style={styles.container}>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          style={{
            ...styles.shape,
            animationName: `shapeAnimation-${animationId}`,
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() + 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  shape: {
    position: 'absolute',
    border: '4px solid currentColor',
    animation: 'shapeAnimation 2s linear infinite',
  },
};

const randomColor = () => {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
};

const shapeAnimations = [];
for (let i = 0; i < 100; i++) {
  shapeAnimations.push(
    `@keyframes shapeAnimation-${i} {
      0% {
        transform: scale(0);
        border-color: ${randomColor()};
      }
      100% {
        transform: scale(1);
        border-color: ${randomColor()};
      }
    }`
  );
}

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = shapeAnimations.join('\n');
document.head.appendChild(styleSheet);

export default BackgroundAnimation;
