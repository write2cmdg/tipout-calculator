import React, { useState, useEffect } from "react";
import '../App.css'; 
const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const display = currentTime.toLocaleDateString("en-US", options);

  return (
    <div className="time">
      {display}
    </div>
  );
};

export default CurrentTime;
