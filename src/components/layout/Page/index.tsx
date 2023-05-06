import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Nav from './components/Nav';

import style from './Page.module.scss';

const Page = () => {
  return (
    <div className={style.page}>
      <div className={style.bounceSpace}>
        <Nav />
        <div className={style.inner}>
          <Outlet />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
