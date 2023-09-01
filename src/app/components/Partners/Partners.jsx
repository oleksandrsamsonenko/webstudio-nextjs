import styles from './Partners.module.scss';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from './icons';

const logosList = [
  { id: 1, image: <Logo1 styleProp={styles.logo} /> },
  { id: 2, image: <Logo2 styleProp={styles.logo} /> },
  { id: 3, image: <Logo3 styleProp={styles.logo} /> },
  { id: 4, image: <Logo4 styleProp={styles.logo} /> },
  { id: 5, image: <Logo5 styleProp={styles.logo} /> },
  { id: 6, image: <Logo6 styleProp={styles.logo} /> },
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Наші клієнти</h2>
        <ul className={styles.list}>
          {logosList.map(item => (
            <li className={styles.item} key={item.id}>
              {item.image}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
