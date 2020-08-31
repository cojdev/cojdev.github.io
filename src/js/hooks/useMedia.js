import { useEffect, useState } from 'react';

const useMedia = (query) => {
  const mediaQuery = window.matchMedia(query);

  const [matches, setMatches] = useState(mediaQuery.matches);

  const handler = () => {
    setMatches(mediaQuery.matches);
    console.log('mobile: ', mediaQuery.matches);
  };

  useEffect(() => {
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return matches;
};

export default useMedia;
