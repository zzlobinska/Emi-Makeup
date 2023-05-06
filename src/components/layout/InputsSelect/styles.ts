/* eslint-disable @typescript-eslint/no-explicit-any */

import useCssStyles from 'src/components/hooks/useCssStyles';
import useIsDarkMode from 'src/components/hooks/useIsDarkMode';

export const selectStyles = (hasError: boolean) => {
  const cssStyles = useCssStyles();
  const isDark = useIsDarkMode();

  return {
    container: (base: any) => ({
      ...base,
      width: '100%',
      height: cssStyles.sizeInputHeight
    }),
    placeholder: (base: any) => ({
      ...base,
      color: cssStyles.colorForegroundDim,
      fontSize: '1em',
      fontWeight: 400,
      marginLeft: 0,
      marginRight: 0
    }),
    control: (base: any, state: any) => ({
      ...base,
      height: cssStyles.sizeInputHeight,
      padding: `0 ${cssStyles.spacing2}`,
      fontWeight: 700,
      outline: 'none',
      fontSize: '1em',
      borderRadius: cssStyles.radiusM,
      width: '100%',
      backgroundColor: cssStyles.colorBackground2,
      borderColor: 'transparent',
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: state.isFocused
        ? hasError
          ? `0 0 0 .1rem ${cssStyles.colorDanger}`
          : `0 0 0 .1rem ${cssStyles.colorPrimary}`
        : 0,
      border: hasError ? `.1rem solid ${cssStyles.colorDanger}` : `.1rem solid ${cssStyles.colorPrimary}`,
      '&:hover': {
        borderColor: 'none'
      }
    }),
    singleValue: (base: any) => ({
      ...base,
      marginLeft: 0,
      marginRight: 0,
      color: cssStyles.colorForeground,
      fontSize: '1em',
      fontWeight: 400
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      backgroundColor: '#ababab',
      display: 'none'
    }),
    dropdownIndicator: (base: any) => ({
      ...base
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: cssStyles.colorBackground2,
      border: isDark ? '1px solid #3c3c3d' : '',
      borderRadius: '1rem',
      overflow: 'auto'
    }),
    option: (base: any, state: any) => ({
      ...base,
      padding: `${cssStyles.spacing3} ${cssStyles.spacing4}`,
      paddingLeft: state.data?.depth ? `${15 * (state.data?.depth + 1)}px` : `${cssStyles.spacing4}`,
      position: 'relative',
      color: cssStyles.colorForeground,
      backgroundColor: cssStyles.colorBackground2,

      ':hover': {
        cursor: 'pointer',
        background: cssStyles.colorBackground2Dark
      },

      ':before': {
        borderRadius: '0 0 0 .4rem',
        border: '.2rem solid #c0c0c0',
        borderTop: 'none',
        borderRight: 'none',
        content: '" "',
        display: state.data?.depth ? 'block' : 'none',
        height: 12,
        width: `${13 * state.data?.depth}px`,
        position: 'absolute',
        left: 12,
        top: '50%',
        transform: 'translateY(-50%)'
      }
    })
  };
};
