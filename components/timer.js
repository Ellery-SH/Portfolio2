import React, { useState, useEffect } from 'react';
export default function Timer({NextQuestion}) {
    const [seconds, setSeconds] = useState(10);
  
    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds(10)
        NextQuestion()
        console.log("go to next queston")
      }
    });
  
    return (
      <>
          {seconds}
      </>
        
        
    );
  }