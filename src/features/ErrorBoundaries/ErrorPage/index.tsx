import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

import { Button } from 'src/components';
import { getEnvName } from 'src/utils/helpers';

import style from '../ErrorBoundaries.module.scss';

const ErrorPage = () => {
  const error: any = useRouteError();
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <h1>{t('errorBoundaries:oops')}</h1>
      <p>{t('errorBoundaries:unexpectedError')}</p>
      {getEnvName() === 'development' && (
        <pre>
          <i>{error.statusText || error.message}</i>
        </pre>
      )}
      <Button
        to={'/'}
        label={t('errorBoundaries:goToHomepage')}
      />
    </div>
  );
};

export default ErrorPage;
