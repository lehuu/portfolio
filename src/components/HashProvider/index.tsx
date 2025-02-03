import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';

export const HashContext = createContext<{
  hash: null | string;
  setHash: (newHash: string) => void | never;
  disableScrollTracking: () => void | never;
}>({
  hash: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setHash: (_: string) => {
    throw new Error('Context not initialized');
  },
  disableScrollTracking: () => {
    throw new Error('Context not initialized');
  },
});

const HashProvider: React.FunctionComponent = ({ children }) => {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? `${window.location.hash}` : ''
  );

  const isScrollTrackingDisabled = useRef(false);

  useEffect(() => {
    /*
        reactivate scroll tracking after (auto) scroll has ended
    */
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const scrollEndListener = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrollTrackingDisabled.current = false;
      }, 100);
    };

    document.addEventListener('scroll', scrollEndListener);

    return () => {
      document.removeEventListener('scroll', scrollEndListener);
    };
  }, []);

  const handleHashUpdate = (newHash: string) => {
    if (isScrollTrackingDisabled.current) {
      return;
    }

    const hashInUrl = newHash ? `#${newHash}` : '/';
    if (hashInUrl !== hash) {
      setHash(hashInUrl);
    }
  };

  const disableScrollTracking = () => {
    isScrollTrackingDisabled.current = true;
  };

  const contextValue = useMemo(
    () => ({ hash, setHash: handleHashUpdate, disableScrollTracking }),
    [hash]
  );

  return <HashContext.Provider value={contextValue}>{children}</HashContext.Provider>;
};

export default HashProvider;
