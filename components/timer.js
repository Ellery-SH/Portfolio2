import React, { useState, useEffect } from 'react';
export default function Timer() {
    const [seconds, setSeconds] = useState(10);
  
    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('Times UP! Next Question!');
      }
    });
  
    return (
      <>
          {seconds}
      </>
        
        
    );
  }