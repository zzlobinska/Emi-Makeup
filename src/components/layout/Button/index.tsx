import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Icon, { IconNames } from '../Icon';

import style from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  to?: string;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  small?: boolean;
  empty?: boolean;
  transparent?: boolean;
  gray?: boolean;
  white?: boolean;
  className?: string;
  icon?: IconNames;
  iconSmall?: boolean;
  id?: string;
  height?: string;
  width?: string;
  reverse?: boolean;
};

const ButtonWrapper: React.FC<ButtonProps> = (props) => {
  const {
    children,
    to,
    onClick,
    className,
    height,
    width,
    type,
    isLoading = false,
    disabled = false,
    gray = false,
    white = false,
    empty = false,
    transparent = false,
    form,
    id,
    title,
    fullWidth,
    small
  } = props;
  const buttonClasses = classNames(style.button, className, {
    [style.disabled]: disabled,
    [style.isLoading]: isLoading,
    [style.empty]: empty,
    [style.transparent]: transparent,
    [style.gray]: gray,
    [style.white]: white,
    [style.small]: small,
    [style.fullWidth]: fullWidth
  });

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!onClick) {
      return;
    } else if (!disabled || isLoading) {
      onClick(e);
    }
  };

  return to ? (
    <Link
      className={buttonClasses}
      style={{ height, width }}
      onClick={handleOnClick}
      to={to}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={handleOnClick}
      className={buttonClasses}
      style={{ height, width }}
      type={type}
      disabled={disabled}
      id={id}
      form={form}
      title={title}
    >
      {children}
    </button>
  );
};

const Button = (props: ButtonProps) => {
  const { label, isLoading = false, icon, iconSmall, reverse = false } = props;

  const content = (
    <div
      className={classNames(style.wrapper, {
        [style.hidden]: isLoading,
        [style.reverse]: reverse,
        [style.withSmallIcon]: iconSmall
      })}
    >
      {label && <span className={style.label}>{label}</span>}
      {icon && (
        <Icon
          name={icon}
          small={iconSmall}
          className={style.icon}
        />
      )}
    </div>
  );

  return (
    <ButtonWrapper {...props}>
      <div className={style.inner}>
        {isLoading && (
          <Icon
            name='loader'
            className={style.loader}
          />
        )}
        {content}
      </div>
    </ButtonWrapper>
  );
};

export default Button;
