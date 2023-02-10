import React, { useState, useEffect } from 'react';

const BackgroundAnimation = () => {
  const [animationId, setAnimationId] = useState(1);

  useEffect(() => {
    setAnimationId(Math.floor(Math.random() * 100));
  }, [animationId]);

  return (
    <div style={styles.container}>
      {Array.from({ length: 75 }, (_, i) => (
        <div
          key={i}
          style={{
            ...styles.shape,
            animationName: `shapeAnimation-${animationId}`,
            width: `${Math.random() * 500 + 1}px`,
            height: `${Math.random() * 500 + 1}px`,
            left: `${Math.random() * 100 - 20}%`,
            top: `${Math.random() * 100 - 20}%`,
            animationDuration: `${Math.random() + 2}s`,
            borderColor: randomColor(),
            opacity: 0.9,
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
    border: '1px solid currentColor',
    animation: 'shapeAnimation 5s linear infinite',
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
      }
      100% {
        transform: scale(1);
      }
    }`
  );
}

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = shapeAnimations.join('\n');
document.head.appendChild(styleSheet);

export default BackgroundAnimation;
