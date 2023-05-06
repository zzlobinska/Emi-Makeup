import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';
import dayjs from 'dayjs';

import 'dayjs/locale/pl';
import 'dayjs/locale/en';
import 'dayjs/locale/de';

import useIsMobile from 'src/components/hooks/useIsMobile';
import { setLocalStorageItem } from 'src/utils/storage';

import Icon, { IconNames } from '../Icon';

import style from './LanguageSwitcher.module.scss';

export const languageKey = 'i18nextLng';

type Language = {
  id: string;
  iconName: IconNames;
};

const LANGUAGES: Array<Language> = [
  {
    id: 'pl',
    iconName: 'flagPL'
  },
  {
    id: 'en',
    iconName: 'flagGB'
  },
  {
    id: 'de',
    iconName: 'flagDE'
  }
];

const LanguageSwitcher = () => {
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    dayjs.locale(lang);
    setLocalStorageItem(languageKey, lang);
    setIsSelectionActive(false);
  };

  const handleToggleSelectionActive = () => {
    setIsSelectionActive((prev) => !prev);
  };

  const currentFlagIconName = LANGUAGES.find((lang) => lang.id === i18n.language)?.iconName || LANGUAGES[0].iconName;

  return (
    <div className={style.mainWrapper}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSelectionActive(false);
        }}
        display={'contents'}
      >
        <div
          className={style.currentLanguageContainer}
          onClick={handleToggleSelectionActive}
        >
          <Icon
            name={currentFlagIconName}
            className={style.icon}
            small
          />
          {!isMobile && <div className={style.name}>{i18n.language}</div>}
        </div>

        <div
          className={classNames(style.languagesSelection, {
            [style.active]: isSelectionActive
          })}
        >
          {LANGUAGES.filter((lang) => lang.id !== i18n.language).map((lang) => (
            <div
              className={style.selectionWrapper}
              onClick={() => handleChangeLanguage(lang.id)}
              key={lang.id}
            >
              <Icon
                name={lang.iconName}
                className={style.icon}
                small
              />
              <div className={style.name}>{lang.id}</div>
            </div>
          ))}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default LanguageSwitcher;
