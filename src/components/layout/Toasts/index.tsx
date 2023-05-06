/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { Store } from 'react-notifications-component';
import { AxiosError } from 'axios';
import classNames from 'classnames';

import { apiErrorHandler } from 'src/api/utils';
import i18n from 'src/i18n/i18n';
import { getNotificationIdFromName } from 'src/utils/helpers';

import Icon from '../Icon';

import 'animate.css';
import style from './Toast.module.scss';
type NotifyType = 'common' | 'success' | 'danger';

type NotificationContentProps = {
  type: NotifyType;
  text: string;
  title?: string;
  handleCloseConfirm: () => void;
  id: string;
};

type NotifyOptions = {
  duration?: number;
  title?: string;
};

const NotificationContent = (props: NotificationContentProps) => {
  const { type, text, title = i18n.t('notifications:header'), handleCloseConfirm, id } = props;

  return (
    <div
      className={classNames(
        style.container,
        { [style.common]: type === 'common' },
        { [style.success]: type === 'success' },
        { [style.danger]: type === 'danger' }
      )}
      id={id}
    >
      <div className={style.header}>
        <p className={style.title}>{title}</p>
        <button
          className={style.icon}
          onClick={handleCloseConfirm}
        >
          <Icon name={'close'} />
        </button>
      </div>
      <p className={style.message}>{text}</p>
    </div>
  );
};

const minNotificationDuration = 8000;

const notify = (type: NotifyType, elements: string[], options?: NotifyOptions) => {
  const notifyId = getNotificationIdFromName(elements);
  if (document.getElementById(notifyId)) return;

  elements.forEach((element: string) => {
    Store.addNotification({
      content: (id) => (
        <NotificationContent
          type={type}
          text={element}
          id={notifyId}
          title={options?.title}
          handleCloseConfirm={() => Store.removeNotification((id as any).id)}
        />
      ),
      insert: 'bottom',
      container: 'top-right',
      animationIn: ['animate__animated animate__fadeIn animate__faster'],
      animationOut: ['animate__animated animate__fadeOut animate__faster'],
      dismiss: {
        duration: options?.duration || Math.max(element.length * 50, minNotificationDuration),
        pauseOnHover: true,
        click: false,
        touch: false,
        waitForAnimation: true
      },
      slidingEnter: {
        duration: 300,
        delay: 0,
        timingFunction: 'ease-out'
      },
      slidingExit: {
        duration: 1,
        timingFunction: 'ease-in',
        delay: 0
      }
    });
  });
};

export const notifyCommon = (items: string[], options?: NotifyOptions) => notify('common', items, options);

export const notifySuccess = (items: string[], options?: NotifyOptions) => notify('success', items, options);

export const notifyDanger = (items: string[], options?: NotifyOptions) => notify('danger', items, options);

export const notifyApiError = (error: AxiosError, color: 'common' | 'danger' = 'danger') => {
  if (error?.response?.status === 503) return;
  const errorMessage = apiErrorHandler(error);
  if (color === 'danger') {
    notifyDanger(errorMessage);
  } else if (color === 'common') {
    notifyCommon(errorMessage);
  }
};

export default {
  notifyCommon,
  notifySuccess,
  notifyDanger,
  notifyApiError
};
