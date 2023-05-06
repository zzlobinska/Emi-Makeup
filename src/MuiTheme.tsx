import React from 'react';
import { PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { CssStylesOutputType } from './utils/getAllCssStyles';
import { useCssStyles, useIsDarkMode } from './components';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    smPhoneWidth: true;
    phoneWidth: true;
    tabletWidth: true;
    mobileWidth: true;
    smDesktopWidth: true;
    desktopWidth: true;
  }
}

export const getDesignTokens = (isDark: boolean, modeName: PaletteMode, cssStyles: CssStylesOutputType) => ({
  palette: {
    mode: modeName,
    text: {
      primary: cssStyles.colorForeground,
      sedondary: cssStyles.colorForegroundDim
    },
    primary: {
      main: cssStyles.colorPrimary,
      light: cssStyles.colorPrimaryLight,
      dark: cssStyles.colorPrimaryDark
    },
    secondary: {
      main: cssStyles.colorSecondary,
      light: cssStyles.colorSecondaryLight,
      dark: cssStyles.colorSecondaryDark
    },
    error: {
      main: cssStyles.colorDanger
    },
    success: {
      main: cssStyles.colorSuccess
    },
    background: {
      default: cssStyles.colorBackground1
    }
  },
  typography: {
    fontSize: 16
  },
  shape: {
    borderRadius: +cssStyles.radiusM
  },
  spacing: [0, cssStyles.spacing1, cssStyles.spacing2, cssStyles.spacing4, cssStyles.spacing6, cssStyles.spacing8],
  breakpoints: {
    values: {
      smPhoneWidth: 0,
      phoneWidth: 320,
      tabletWidth: 480,
      mobileWidth: 768,
      smDesktopWidth: 1024,
      desktopWidth: 1240
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: cssStyles.sizeInputHeight
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: cssStyles.colorForeground,
          fontFamily: '"Roboto", sans-serif',
          fontSize: '1.2rem',
          backgroundColor: cssStyles.colorBackground3,
          borderRadius: cssStyles.radiusM
        },
        arrow: {
          color: cssStyles.colorBackground3
        }
      }
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: cssStyles.colorBackground3,
          borderRadius: cssStyles.radiusM,
          transform: 'unset',
          transformOrigin: 'unset',
          msTransform: 'unset',
          msTransformOrigin: 'unset'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          height: cssStyles.sizeButtonHeight,
          borderRadius: cssStyles.radiusM,
          padding: cssStyles.spacing4,
          '&.Mui-selected': {},
          '&.Mui-selected:hover': {},
          '&.Mui-selected.Mui-focusVisible': {},
          '&.Mui-selected.Mui-disabled': {}
        }
      }
    }
  }
});

type MuiThemeProps = {
  children: React.ReactNode;
};

export default function MuiTheme(props: MuiThemeProps) {
  const { children } = props;

  const isDark = useIsDarkMode();
  const modeName = isDark ? 'dark' : 'light';
  const cssStyles = useCssStyles();

  const theme = React.useMemo(() => createTheme(getDesignTokens(isDark, modeName, cssStyles)), [isDark, cssStyles]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
