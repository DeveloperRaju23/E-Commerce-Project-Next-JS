import React, { useState, useEffect } from 'react';


const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  return (
    <div
    className={`fixed bottom-4 right-4 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    } transition-opacity`}
  >
    <button
      onClick={scrollToTop}
      className="bg-grayColor text-white rounded p-2  "
    >
      <svg
      className='text-white '
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
        <path d="M13 7h-2v6H9l3 3 3-3h-2z" />
      </svg>
    </button>
  </div>
  )
}

export default ScrollTop