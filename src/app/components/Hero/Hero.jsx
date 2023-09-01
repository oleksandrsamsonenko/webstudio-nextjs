import Image from 'next/image';
import ButtonOrder from '../ButtonOrder/ButtonOrder';
import background from '@images/heroPC.jpg';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src={background}
          alt={''}
          sizes="100vw"
          priority
          fill
        />
      </div>
      <h1 className={styles.title}>Ефективні рішення для вашого бізнесу</h1>
      <ButtonOrder />
    </section>
  );
}
