import styles from './Partners.module.scss';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from './icons';

const logosList = [
  <Logo1 styleProp={styles.logo} />,
  <Logo2 styleProp={styles.logo} />,
  <Logo3 styleProp={styles.logo} />,
  <Logo4 styleProp={styles.logo} />,
  <Logo5 styleProp={styles.logo} />,
  <Logo6 styleProp={styles.logo} />,
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Наші клієнти</h2>
        <ul className={styles.list}>
          {logosList.map(item => (
            <li className={styles.item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
