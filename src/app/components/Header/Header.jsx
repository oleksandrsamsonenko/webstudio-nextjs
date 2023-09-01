import Burger from '@components/Header/Burger/Burger';
import Logo from '@components/Logo/Logo';
import Navbar from './Navbar/Navbar';
import Contacts from './Contacts/Contacts';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo position="header" />
      <div className={styles.wrapper}>
        <Navbar />
        <Contacts />
      </div>
      <Burger />
    </header>
  );
}
