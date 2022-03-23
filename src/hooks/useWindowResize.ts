import { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type FunctionType = Parameters<typeof useDebouncedCallback>[0];

const useWindowResize = (callback: FunctionType, debounceTime: number = 100) => {
  const debounceCallback = useDebouncedCallback(callback, debounceTime);

  useEffect(() => {
    window.addEventListener('resize', debounceCallback);
    return () => {
      window.removeEventListener('resize', debounceCallback);
    };
  }, []);
};

export default useWindowResize;
