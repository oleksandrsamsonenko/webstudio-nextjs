import Image from 'next/image';
import img1 from '@images/portfolio/img1.jpg';
import img2 from '@images/portfolio/img2.jpg';
import img3 from '@images/portfolio/img3.jpg';
import img4 from '@images/portfolio/img4.jpg';
import img5 from '@images/portfolio/img5.jpg';
import img6 from '@images/portfolio/img6.jpg';
import img7 from '@images/portfolio/img7.jpg';
import img8 from '@images/portfolio/img8.jpg';
import img9 from '@images/portfolio/img9.jpg';

import styles from './Portfolio.module.scss';

const portfolioList = [
  {
    id: 1,
    image: img1,
    title: 'Технокряк',
    type: 'Веб-сайт',
    category: 'website',
  },
  {
    id: 2,
    image: img2,
    title: 'Постер New Orlean vs Golden Star',
    type: 'Дизайн',
    category: 'design',
  },
  {
    id: 3,
    image: img3,
    title: 'Ресторан Seafood',
    type: 'Додаток',
    category: 'apps',
  },
  {
    id: 4,
    image: img4,
    title: 'Проєкт Prime',
    type: 'Маркетинг',
    category: 'marketing',
  },
  {
    id: 5,
    image: img5,
    title: 'Проєкт Boxes',
    type: 'Додаток',
    category: 'apps',
  },
  {
    id: 6,
    image: img6,
    title: 'Inspiration has no Borders',
    type: 'Веб-сайт',
    category: 'website',
  },
  {
    id: 7,
    image: img7,
    title: 'Видання Limited Edition',
    type: 'Дизайн',
    category: 'design',
  },
  {
    id: 8,
    image: img8,
    title: 'Проєкт LAB',
    type: 'Маркетинг',
    category: 'marketing',
  },
  {
    id: 9,
    image: img9,
    title: 'Growing Business',
    type: 'Додаток',
    category: 'apps',
  },
];

export default function Portfolio({ filter }) {
  return (
    <div className={styles.portfolio}>
      <ul className={styles.list}>
        {portfolioList
          .filter(item => (filter === 'all' ? item : item.category === filter))
          .map(item => (
            <li className={styles.item} key={item.id}>
              <div className={styles.wrapper}>
                <Image
                  className={styles.image}
                  src={item.image}
                  alt={item.title}
                  sizes="90vw"
                  priority
                  fill
                />
                <p className={styles.overlay}>
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу отримати
                  вичерпні відомості про компанію чи приватну особу.
                </p>
              </div>
              <div className={styles.info}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.type}>{item.type}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
