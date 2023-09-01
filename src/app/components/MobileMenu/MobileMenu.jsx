import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Close } from './icon';
import styles from './MobileMenu.module.scss';

export default function MobileMenu({ open, close }) {
  const navlinks = [
    { id: 1, title: 'Студія', path: '/' },
    { id: 2, title: 'Портфоліо', path: '/portfolio' },
    // { id: 3, title: 'Контакти', path: '/contacts' },
  ];

  const socialsList = [
    {
      id: 1,
      title: 'Instagram',
      href: 'https://instagram.com',
    },
    {
      id: 2,
      title: 'Twitter',
      href: 'https://twitter.com',
    },
    {
      id: 3,
      title: 'Facebook',
      href: 'https://facebook.com',
    },
    {
      id: 4,
      title: 'Linkedin',
      href: 'https://linkedin.com',
    },
  ];

  const pathname = usePathname();
  return (
    <div className={open ? styles.isopen : styles.isclosed}>
      <ul className={styles.navbar}>
        {navlinks.map(link => (
          <li key={link.id}>
            <Link
              href={link.path}
              onClick={close}
              className={
                pathname === link.path ? styles.linkActive : styles.link
              }
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.contacts}>
        <div className={styles.contactUs}>
          <a href="tel:+380961111111" className={styles.phone}>
            +38 096 111 11 11
          </a>
          <a href="mailto:info@devstudio.com" className={styles.mail}>
            info@devstudio.com
          </a>
        </div>
        <ul className={styles.socials}>
          {socialsList.map(item => (
            <li key={item.id} className={styles.item}>
              <a
                href={item.href}
                target="_blank"
                className={styles.socialsLink}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <span onClick={close} className={styles.close}>
        {<Close />}
      </span>
    </div>
  );
}
