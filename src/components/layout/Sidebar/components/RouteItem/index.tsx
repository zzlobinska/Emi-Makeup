import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { useAppSelector, useAuthUser, useIsMobile } from 'components';

import Icon, { IconNames } from 'src/components/layout/Icon';

import style from './RouteItem.module.scss';

export type RouteItemData = {
  title: string;
  url: string | null;
  roles: string[];
  icon: IconNames;
};

export interface RouteItemProps {
  item: RouteItemData;
  onClick?: () => void;
  className?: string;
}

const RouteItem = (props: RouteItemProps) => {
  const { className, onClick, item } = props;
  const { url, icon, title, roles } = item;

  const isMobile = useIsMobile();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);
  const user = useAuthUser();

  if (roles.length > 0 && (!user?.role || !roles?.includes(user.role))) {
    return null;
  }

  const navTitle = () => {
    if (isMobile || (!isMobile && isSidebarOpen)) return title;
    return null;
  };

  if (!url) {
    return (
      <button
        className={classNames(style.link, style.button, { [style.isClose]: !isSidebarOpen && !isMobile })}
        onClick={onClick}
        id={'button-' + title}
      >
        <Icon
          name={icon}
          className={style.icon}
        />
        {navTitle()}
      </button>
    );
  }

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(style.link, className, {
          [style.isClose]: !isSidebarOpen && !isMobile,
          [style.active]: isActive
        })
      }
      to={url}
      onClick={onClick}
      id={url.slice(1, url.length)}
    >
      <Icon
        name={icon}
        className={style.icon}
      />
      {navTitle()}
    </NavLink>
  );
};

export default RouteItem;
