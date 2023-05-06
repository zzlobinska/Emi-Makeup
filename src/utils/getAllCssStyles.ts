type DataType = {
  varName: string;
  fallback: string;
  outputName: string;
};

const data: DataType[] = [
  {
    varName: '--color-foreground',
    fallback: '#000000',
    outputName: 'colorForeground'
  },
  {
    varName: '--color-foreground-dim',
    fallback: '#262626',
    outputName: 'colorForegroundDim'
  },
  {
    varName: '--color-foreground-inverted',
    fallback: '#ffffff',
    outputName: 'colorForegroundInverted'
  },
  {
    varName: '--color-background-1',
    fallback: '#ffffff',
    outputName: 'colorBackground1'
  },
  {
    varName: '--color-background-1-dark',
    fallback: '#ededed',
    outputName: 'colorBackground1Dark'
  },
  {
    varName: '--color-background-1-light',
    fallback: '#ffffff',
    outputName: 'colorBackground1Light'
  },
  {
    varName: '--color-background-2',
    fallback: '#fdfdfd',
    outputName: 'colorBackground2'
  },
  {
    varName: '--color-background-2-dark',
    fallback: '#ebebeb',
    outputName: 'colorBackground2Dark'
  },
  {
    varName: '--color-background-2-light',
    fallback: '#fefefe',
    outputName: 'colorBackground2Light'
  },
  {
    varName: '--color-background-3',
    fallback: '#eeeeee',
    outputName: 'colorBackground3'
  },
  {
    varName: '--color-background-3-dark',
    fallback: '#e0e0e0',
    outputName: 'colorBackground3Dark'
  },
  {
    varName: '--color-background-3-light',
    fallback: '#f5f5f5',
    outputName: 'colorBackground3Light'
  },
  {
    varName: '--color-primary',
    fallback: '#1976d2',
    outputName: 'colorPrimary'
  },
  {
    varName: '--color-primary-dark',
    fallback: '#1565c0',
    outputName: 'colorPrimaryDark'
  },
  {
    varName: '--color-primary-light',
    fallback: '#42a5f5',
    outputName: 'colorPrimaryLight'
  },
  {
    varName: '--color-secondary',
    fallback: '#9c27b0',
    outputName: 'colorSecondary'
  },
  {
    varName: '--color-secondary-dark',
    fallback: '#7b1fa2',
    outputName: 'colorSecondaryDark'
  },
  {
    varName: '--color-secondary-light',
    fallback: '#ba68c8',
    outputName: 'colorSecondaryLight'
  },
  {
    varName: '--color-success',
    fallback: '#4caf50',
    outputName: 'colorSuccess'
  },
  {
    varName: '--color-success-dark',
    fallback: '#1b5e20',
    outputName: 'colorSuccessDark'
  },
  {
    varName: '--color-success-light',
    fallback: '#2e7d32',
    outputName: 'colorSuccessLight'
  },
  {
    varName: '--color-danger',
    fallback: '#d32f2f',
    outputName: 'colorDanger'
  },
  {
    varName: '--color-danger-dark',
    fallback: '#c62828',
    outputName: 'colorDangerDark'
  },
  {
    varName: '--color-danger-light',
    fallback: '#ef5350',
    outputName: 'colorDangerLight'
  },
  {
    varName: '--color-warning',
    fallback: '#ed6c02',
    outputName: 'colorWarning'
  },
  {
    varName: '--color-warning-dark',
    fallback: '#e65100',
    outputName: 'colorWarningDark'
  },
  {
    varName: '--color-warning-light',
    fallback: '#ff9800',
    outputName: 'colorWarningLight'
  },
  {
    varName: '--spacing-base',
    fallback: '0.8rem',
    outputName: 'spacingBase'
  },
  {
    varName: '--spacing-1',
    fallback: '.4rem',
    outputName: 'spacing1'
  },
  {
    varName: '--spacing-2',
    fallback: '.8rem',
    outputName: 'spacing2'
  },
  {
    varName: '--spacing-3',
    fallback: '1.2rem',
    outputName: 'spacing3'
  },
  {
    varName: '--spacing-4',
    fallback: '1.6rem',
    outputName: 'spacing4'
  },
  {
    varName: '--spacing-5',
    fallback: '2.4rem',
    outputName: 'spacing5'
  },
  {
    varName: '--spacing-6',
    fallback: '3.2rem',
    outputName: 'spacing6'
  },
  {
    varName: '--spacing-7',
    fallback: '4rem',
    outputName: 'spacing7'
  },
  {
    varName: '--spacing-8',
    fallback: '6rem',
    outputName: 'spacing8'
  },
  {
    varName: '--spacing-9',
    fallback: '8rem',
    outputName: 'spacing9'
  },
  {
    varName: '--spacing-10',
    fallback: '12rem',
    outputName: 'spacing10'
  },
  {
    varName: '--size-button-height',
    fallback: '5rem',
    outputName: 'sizeButtonHeight'
  },
  {
    varName: '--size-input-height',
    fallback: '5rem',
    outputName: 'sizeInputHeight'
  },
  {
    varName: '--size-sidebar-width',
    fallback: '24.5rem',
    outputName: 'sizeSidebarWidth'
  },
  {
    varName: '--size-sidebar-close-width',
    fallback: '8.5rem',
    outputName: 'sizeSidebarCloseWidth'
  },
  {
    varName: '--size-page-max-width',
    fallback: '120rem',
    outputName: 'sizePageMaxWidth'
  },
  {
    varName: '--size-top-navigation-height',
    fallback: '8rem',
    outputName: 'sizeTopNavigationHeight'
  },
  {
    varName: '--size-footer-height',
    fallback: '5rem',
    outputName: 'sizeFooterHeight'
  },
  {
    varName: '--radius-s',
    fallback: '0.4rem',
    outputName: 'radiusS'
  },
  {
    varName: '--radius-m',
    fallback: '0.8rem',
    outputName: 'radiusM'
  },
  {
    varName: '--radius-l',
    fallback: '1.6rem',
    outputName: 'radiusL'
  }
];

export type CssStylesOutputType = {
  [key: string]: string;
};

export const getAllCssStyles = () => {
  const styles: CssStylesOutputType = {};

  data.forEach((obj) => {
    const cssValue = getComputedStyle(document.body).getPropertyValue(obj.varName) || obj.fallback;

    styles[obj.outputName] = cssValue.trim();
  });

  return styles;
};
