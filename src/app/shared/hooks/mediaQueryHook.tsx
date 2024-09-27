import { useState, useEffect } from 'react';

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);

    const updateTarget = (event: MediaQueryListEvent) => {
      setTargetReached(event.matches);
    };

    mediaQuery.addEventListener('change', updateTarget);


    setTargetReached(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', updateTarget);
    };
  }, [width]);

  return targetReached;
};

export default useMediaQuery;
