import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. नया पेज आने पर तुरंत ऊपर जाने के लिए
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  // 2. स्क्रॉल करने पर बटन दिखाने/छुपाने के लिए
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTopSmoothly = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // धीरे-धीरे ऊपर जाने के लिए
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTopSmoothly}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95"
          title="Go to top"
        >
          {/* सुंदर आधुनिक एरो आइकन (SVG) */}
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="h-6 w-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollManager;
