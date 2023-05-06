import { AxiosError } from 'axios';
import i18n from 'i18next';
import _ from 'lodash';

import { Toasts } from 'components';

export const fileUploadHeaders = {
  'Content-Type': 'multipart/form-data'
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const apiErrorHandler = (error: any) => {
  if (!error.response?.data || error.message === 'canceled') {
    return [];
  }

  try {
    return import.meta.env.VITE_NODE_ENV !== 'production'
      ? [`Server: ${error.response.data.message}, (status: ${error.response.status})`]
      : [error.response.data.message];
  } catch (error_) {
    console.error('apiErrorHandler', error_);
    return [i18n.t('notifications:error.unknown')];
  }
};

export const isNetworkError = (err: AxiosError) => err.isAxiosError && !err.response;

const NETWORK_ERROR_NOTIFY_DURATION = 10_000;

const notifyNetworkError = () => {
  Toasts.notifyDanger([i18n.t('notifications:error.network')], { duration: NETWORK_ERROR_NOTIFY_DURATION });
};

export const throttledNotifyNetworkError = _.throttle(notifyNetworkError, NETWORK_ERROR_NOTIFY_DURATION, {
  trailing: false
});
