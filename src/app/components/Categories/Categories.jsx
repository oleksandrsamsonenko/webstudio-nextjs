'use client';

import { useState } from 'react';
import Portfolio from '../Portfolio/Portfolio';
import styles from './Categories.module.scss';

const categoriesList = [
  {
    id: 1,
    name: 'Усі',
    type: 'all',
  },
  {
    id: 2,
    name: 'Веб-сайти',
    type: 'website',
  },
  {
    id: 3,
    name: 'Додатки',
    type: 'apps',
  },
  {
    id: 4,
    name: 'Дизайн',
    type: 'design',
  },
  {
    id: 5,
    name: 'Маркетинг',
    type: 'marketing',
  },
];

export default function Categories() {
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('all');

  return (
    <section className={styles.categories}>
      <ul className={styles.list}>
        {categoriesList.map(item => (
          <li key={item.id} className={styles.item}>
            <button
              onClick={() => {
                setActive(item.id);
                setCategory(item.type);
              }}
              className={
                item.id === active ? styles.buttonActive : styles.button
              }
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <Portfolio filter={category} />
    </section>
  );
}
