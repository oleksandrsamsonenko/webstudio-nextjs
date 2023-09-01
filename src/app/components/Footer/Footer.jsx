import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';
import { Instagram, Twitter, Facebook, Linkedin, Send } from './icons';

const socialsList = [
  {
    id: 1,
    href: 'https://instagram.com',
    icon: <Instagram styleProp={styles.icon} />,
  },
  {
    id: 2,
    href: 'https://twitter.com',
    icon: <Twitter styleProp={styles.icon} />,
  },
  {
    id: 3,
    href: 'https://facebook.com',
    icon: <Facebook styleProp={styles.icon} />,
  },
  {
    id: 4,
    href: 'https://linkedin.com',
    icon: <Linkedin styleProp={styles.icon} />,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Logo position={'footer'} />
        <div className={styles.contacts}>
          <p className={styles.address}>м. Київ, пр-т Лесі Українки, 26</p>
          <a href="mailto:info@devstudio.com" className={styles.mailto}>
            info@devstudio.com
          </a>
          <a href="tel:+380961111111" className={styles.phone}>
            +38 096 111 11 11
          </a>
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>приєднуйтесь</p>
        <ul className={styles.list}>
          {socialsList.map(item => (
            <li key={item.id}>
              <a href={item.href} className={styles.link}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.subscription}>
        <p className={styles.subtitle}>підпишіться на розсилку</p>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="E-mail"
          />
          <button className={styles.button} type="submit">
            Підписатися
            <Send styleProp={styles.send} />
          </button>
        </form>
      </div>
    </footer>
  );
}
