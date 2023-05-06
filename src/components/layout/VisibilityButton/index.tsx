import React from 'react';

import Icon from '../Icon';

import style from './VisabilityButton.module.scss';

type VisibilityButtonProps = {
  isVisible: boolean;
  onChange: (visibility: boolean) => void;
};

const VisibilityButton = (props: VisibilityButtonProps) => {
  const { isVisible, onChange } = props;
  return (
    <button
      type='button'
      onClick={(e: React.FormEvent) => {
        e.preventDefault();
        onChange(!isVisible);
      }}
      className={style.visibilityButton}
    >
      {isVisible ? (
        <Icon
          name='eye'
          noPointerEvents
        />
      ) : (
        <Icon
          name='eyeOff'
          noPointerEvents
        />
      )}
    </button>
  );
};

export default VisibilityButton;
