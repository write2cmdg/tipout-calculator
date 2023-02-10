import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.floor(Math.random() * 50);
      const y = Math.floor(Math.random() * 50);
      const size = Math.floor(Math.random() * 500 + 50);
      const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

      setCircles([...circles, { x, y, size, color }]);
    }, 500);

    return () => clearInterval(interval);
  }, [circles]);

  return (
    <div className="animated-background">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="circle"
          style={{
            top: `${circle.y}%`,
            left: `${circle.x}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: circle.color,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
