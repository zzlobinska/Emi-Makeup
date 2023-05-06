import useDarkMode from 'use-dark-mode';

import Icon from '../Icon';
import SwitchButton from '../SwitchButton';

import style from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false, { element: document.body });

  return (
    <div className={style.container}>
      <Icon
        name={'sun'}
        small
      />
      <SwitchButton
        value={darkMode.value}
        setValue={darkMode.toggle}
        themeColors
      />
      <Icon
        name={'moon'}
        small
      />
    </div>
  );
};
export default ThemeSwitcher;
