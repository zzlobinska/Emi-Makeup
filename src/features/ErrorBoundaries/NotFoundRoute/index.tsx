import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

import { Button } from 'src/components';

import style from '../ErrorBoundaries.module.scss';

const NotFoundRoute = () => {
  const error: any = useRouteError();
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <h1>{t('errorBoundaries:oops')}</h1>
      <span className={style.hugeFont}>404</span>
      <p>{t('errorBoundaries:routeNotFound')}</p>
      <Button
        to={'/'}
        label={t('errorBoundaries:goToHomepage')}
      />
    </div>
  );
};

export default NotFoundRoute;
