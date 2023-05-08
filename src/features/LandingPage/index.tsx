import Image from './components/Image';

import style from './Landing.module.scss';
const Landing = () => {
  return (
    <div className={style.gallery}>
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        key='a'
        layout={style.first}
      />
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        key='b'
        layout={style.second}
      />
      <Image
        isUpright
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        key='c'
        layout={style.third}
      />
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        layout={style.forth}
      />
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        layout={style.fifth}
      />
      <Image
        isUpright
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        layout={style.sixth}
      />
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        layout={style.seventh}
      />
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        layout={style.eighth}
      />
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        layout={style.ninth}
      />
      <Image
        image='https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000'
        layout={style.tenth}
      />
    </div>
  );
};

export default Landing;
