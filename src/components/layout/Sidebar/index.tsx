import ReactRemoveScroll from 'react-remove-scroll/dist/es5/Combination';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Button, Icon, Loader, ThemeSwitcher, useAppDispatch, useAppSelector, useIsMobile } from 'components';
import RouteItem, { RouteItemData } from 'components/layout/Sidebar/components/RouteItem';
import { closeMobileSidebar, toggleSidebar } from 'components/layout/Sidebar/slice';

import i18n from 'src/i18n/i18n';
import { getEnvName } from 'src/utils/helpers';

import style from './Sidebar.module.scss';

const LOGO_LINK_PATHNAME = '/';
const env = getEnvName();

const topNavigation: RouteItemData[] = [
  {
    title: 'dev comp',
    url: '/lib',
    icon: 'home',
    roles: []
  },
  {
    title: i18n.t('landingPage:pageName'),
    url: '/',
    icon: 'home',
    roles: []
  }
];

const bottomNavigation: RouteItemData[] = [
  {
    title: i18n.t('common:navigation.logOut'),
    url: '/logout',
    icon: 'home',
    roles: []
  }
];

const hideSidebarButton: RouteItemData = {
  title: i18n.t('common:navigation.closePanel'),
  url: null,
  icon: 'menu',
  roles: []
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const isMobileSidebarOpen = useAppSelector((state) => state.sidebar.isMobileSidebarOpen);
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const isMobile = useIsMobile();

  const handleToggleSidebar = () => dispatch(toggleSidebar());
  const handleCloseMobileSidebar = () => dispatch(closeMobileSidebar());

  const desktopContent = (
    <div
      id={'main-sidebar'}
      className={cn(style.sidebar, {
        [style.isClose]: !isOpen
      })}
    >
      <div className={style.logoWrapper}>
        <Link
          className={style.logo}
          to={LOGO_LINK_PATHNAME}
        >
          {isOpen ? <h3>Brand</h3> : <h3>Br</h3>}
        </Link>
      </div>
      <div className={style.menu}>
        {isLoading ? (
          <div className={style.loader}>
            <Loader />
          </div>
        ) : (
          topNavigation.map((item, index) => (
            <RouteItem
              key={index}
              item={item}
            />
          ))
        )}
      </div>
      <div className={style.foot}>
        {bottomNavigation.map((item, index) => (
          <RouteItem
            key={index}
            item={item}
          />
        ))}
        <span className={style.indicator} />
        <RouteItem
          item={hideSidebarButton}
          onClick={handleToggleSidebar}
        />
      </div>
    </div>
  );

  const mobileContent = (
    <ReactRemoveScroll enabled={isMobile && isMobileSidebarOpen}>
      <div
        id={'main-sidebar'}
        className={cn(style.sidebar, style.sidebarMobile, {
          [style.isMobileOpen]: isMobileSidebarOpen
        })}
      >
        <div className={style.logoWrapper}>
          <Link
            className={style.logo}
            to={LOGO_LINK_PATHNAME}
            onClick={handleCloseMobileSidebar}
          >
            <h3>Brand</h3>
          </Link>
          <Button
            label={<Icon name={'close'} />}
            empty
            gray
            onClick={handleCloseMobileSidebar}
          />
        </div>
        <div className={style.menu}>
          {isLoading ? (
            <div className={style.loader}>
              <Loader />
            </div>
          ) : (
            topNavigation.map((item: RouteItemData, index) => (
              <RouteItem
                key={index}
                item={item}
                onClick={handleCloseMobileSidebar}
              />
            ))
          )}
        </div>
        <div className={style.foot}>
          {bottomNavigation.map((item: RouteItemData, index) => (
            <RouteItem
              key={index}
              item={item}
              onClick={handleCloseMobileSidebar}
            />
          ))}
          <div className={style.mobileButtonsWrapper}></div>
          <ThemeSwitcher />
        </div>
      </div>
    </ReactRemoveScroll>
  );

  return isMobile ? mobileContent : desktopContent;
};

export default Sidebar;
