import React from 'react';
import { t } from 'i18next';

import Icon from '../Icon';

import style from './ErrorBoundary.module.scss';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // You can log the error to an error reporting service here
  }

  defaultFallback = (
    <div className={style.errorBoundary}>
      <h4>{t('errorBoundaries:somethingWentWrong')}</h4>
      <p>{t('errorBoundaries:tryRefresh')}</p>
      <div
        role='button'
        className={style.refresh}
        onClick={() => {
          window.location.reload();
        }}
      >
        <Icon name={'refresh'} />
      </div>
    </div>
  );

  render() {
    if (this.state.hasError) {
      return this.props.fallback || this.defaultFallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
