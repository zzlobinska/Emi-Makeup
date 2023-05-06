import React from 'react';
import { Tooltip as TooltipMUI } from '@mui/material';
import classNames from 'classnames';

import style from './Tooltip.module.scss';

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  withArrow?: boolean;
  placement?: 'bottom' | 'top' | 'left' | 'right';
  className?: string;
  open?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
  enterDelay?: number;
  leaveDelay?: number;
};

const Tooltip = (props: TooltipProps) => {
  const {
    content,
    children,
    withArrow,
    placement = 'top',
    className,
    open,
    handleOpen,
    handleClose,
    enterDelay = 500,
    leaveDelay = 200
  } = props;

  return (
    <TooltipMUI
      title={content}
      arrow={withArrow}
      placement={placement}
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
    >
      <span className={classNames(style.container, className)}>{children}</span>
    </TooltipMUI>
  );
};

export default Tooltip;
