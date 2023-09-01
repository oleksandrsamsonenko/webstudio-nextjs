import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo({ position }) {
  const fullClassName =
    position === 'header' ? styles.logoHeader : styles.logoFooter;
  return (
    <Link href="/" className={styles.link}>
      Web<span className={fullClassName}>Studio</span>
    </Link>
  );
}
