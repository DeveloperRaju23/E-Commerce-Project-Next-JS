import Container from '@/pages/container';
import React, { useState, useEffect } from 'react';

function DateData() {
  const [time, setTime] = useState(calculateTimeRemaining());



  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeRemaining() {
    const targetDate = new Date('2023-01-01T00:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  return (
   <Container>
     <div className="">
      <div className="countdown flex space-x-8">
        <div>
          <p>Days</p>
          <span  className='text-[32px] font-bold text-blackColor'>{time.days}</span>
        </div>
        <div>
        <p>Hours</p>
          <span className='text-[32px] font-bold text-blackColor'>{time.hours}</span>
        </div>
        <div>
        <p>Minutes</p>
          <span  className='text-[32px] font-bold text-blackColor'>{time.minutes}</span>
        </div>
        <div>
        <p>Seconds</p>
          <span  className='text-[32px] font-bold text-blackColor'>{time.seconds}</span>
        </div>
      </div>
    </div>
 
    
   </Container>
  );
}

export default DateData;
