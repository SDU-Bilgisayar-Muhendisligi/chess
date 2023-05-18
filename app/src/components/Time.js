import React, { useEffect, useState } from 'react';

function Time() {
  const [countdown, setCountdown] = useState(600);

  useEffect(() => {
    let interval = null;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <span className="ml-[450px] text-bg-neutral">Username:</span>
        <span className="ml-2 text-bg-neutral">player01</span>
      </div>
      <div className="mr-[450px] text-bg-neutral">
        <span className="text-2xl  ml-2 font-bold">{formatTime(countdown)}</span>
      </div>
    </div>
  );
}

export default Time;