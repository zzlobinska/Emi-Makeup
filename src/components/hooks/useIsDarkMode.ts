import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

const useIsDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const isEnabled = useDarkMode().value;

  useEffect(() => {
    let timeout: number;

    if (isEnabled !== isDark) {
      setTimeout(() => setIsDark(isEnabled), 10);
    }

    return () => clearTimeout(timeout);
  }, [isEnabled]);

  return isDark;
};

export default useIsDarkMode;
