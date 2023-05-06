import { useMemo } from 'react';

import { getAllCssStyles } from 'src/utils/getAllCssStyles';

import useIsDarkMode from './useIsDarkMode';

const useCssStyles = () => {
  const isDark = useIsDarkMode();

  return useMemo(() => getAllCssStyles(), [isDark]);
};

export default useCssStyles;
