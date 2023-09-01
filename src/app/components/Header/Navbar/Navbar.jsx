'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const navlinks = [
    { id: 1, title: 'Студія', path: '/' },
    { id: 2, title: 'Портфоліо', path: '/portfolio' },
    // { id: 3, title: 'Контакти', path: '/contacts' },
  ];

  const pathname = usePathname();

  return (
    <ul className={styles.navbar}>
      {navlinks.map(link => (
        <li key={link.id}>
          <Link
            href={link.path}
            className={pathname === link.path ? styles.linkActive : styles.link}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
