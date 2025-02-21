import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animationClass }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Check if the element is within view (75% of the window height)
        if (rect.top <= window.innerHeight * 0.75 && !hasAnimated) {
          setHasAnimated(true);  // Trigger the animation only once
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]); // Only re-run if `hasAnimated` changes

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${hasAnimated ? `${animationClass} opacity-100` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
