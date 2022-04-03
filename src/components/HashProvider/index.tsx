import React, { createContext, useEffect, useMemo, useState } from 'react';

export const HashContext = createContext<{
  hash: null | string;
  setHash: (newHash: string) => void | never;
}>({
  hash: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setHash: (_: string) => {
    throw new Error('Context not initialized');
  },
});

const HashProvider: React.FunctionComponent = ({ children }) => {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? `${window.location.hash}` : ''
  );

  useEffect(() => {
    setHash(window.location.hash);
  }, [window.location.hash]);

  const handleHashUpdate = (newHash: string) => {
    window.history.pushState({}, '', `#${newHash}`);
    setHash(`#${newHash}`);
  };

  const contextValue = useMemo(() => ({ hash, setHash: handleHashUpdate }), [hash]);

  return <HashContext.Provider value={contextValue}>{children}</HashContext.Provider>;
};

export default HashProvider;
