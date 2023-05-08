import style from './Footer.module.scss';

import facebook from '../../../../../assets/icons/facebook.svg';
import instagram from '../../../../../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <div className={style.container}>
      <a
        className={style.media}
        href='https://www.instagram.com/emiliazlobinska/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className={style.icon}
          src={instagram}
          alt='instagram icon'
        />
        <p>@emiliazlobinska</p>
      </a>
      <p className={style.text}>&copy; Emi Makeup</p>
      <a
        className={style.media}
        href='https://www.facebook.com/emiliazlobinskamakeup'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className={style.icon}
          src={facebook}
          alt='facebook icon'
        />
        <p>Emi Makeup</p>
      </a>
    </div>
  );
};

export default Footer;
