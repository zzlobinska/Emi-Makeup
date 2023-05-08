import classNames from 'classnames';

import style from '../../Landing.module.scss';

type ImagePropsType = {
  isUpright?: boolean;
  image: string;
  layout: string;
};

const Image = ({ isUpright, image, layout }: ImagePropsType) => {
  return (
    <img
      className={classNames(
        style.img,
        layout,

        { [style.upright]: isUpright }
      )}
      src={image}
      alt='makeup of mine'
    />
  );
};

export default Image;
