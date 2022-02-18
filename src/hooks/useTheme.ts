import { useContext } from 'react';
import { ThemeContext } from '@components';

const useTheme = () => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme need to be child of ThemeProvider');
  }

  return value;
};

export default useTheme;
