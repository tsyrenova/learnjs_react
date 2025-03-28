import { useEffect, useState } from 'react';

export const usePageScroll = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPercent;
};
