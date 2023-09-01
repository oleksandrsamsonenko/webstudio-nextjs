import styles from './Contacts.module.scss';

export default function Contacts() {
  const Envelope = () => (
    <svg width={14} height={10} className={styles.icon}>
      <path d="M12.688 0H1.313C.589 0 0 .56 0 1.25v7.5C0 9.44.589 10 1.313 10h11.375C13.41 10 14 9.44 14 8.75v-7.5C14 .56 13.411 0 12.687 0Zm0 .833c.059 0 .115.012.167.033L7 5.699 1.145.866a.454.454 0 0 1 .167-.033h11.375Zm0 8.334H1.313a.428.428 0 0 1-.438-.417V1.746l5.838 4.819a.45.45 0 0 0 .574 0l5.838-4.819V8.75c0 .23-.196.417-.438.417Z" />
    </svg>
  );

  const Phone = props => (
    <svg width={10} height={14} className={styles.icon}>
      <path d="M8.5 0h-7C.673 0 0 .589 0 1.313v11.374C0 13.412.673 14 1.5 14h7c.827 0 1.5-.589 1.5-1.313V1.313C10 .589 9.327 0 8.5 0Zm-7 .875h7c.276 0 .5.196.5.438V10.5H1V1.312c0-.24.224-.437.5-.437Zm7 12.25h-7c-.276 0-.5-.196-.5-.438v-1.312h8v1.313c0 .24-.224.437-.5.437Z" />
    </svg>
  );

  return (
    <div className={styles.contacts}>
      <a href="mailto:info@devstudio.com" className={styles.link}>
        <Envelope />
        info@devstudio.com
      </a>
      <a href="tel:+380961111111" className={styles.link}>
        <Phone />
        +38 096 111 11 11
      </a>
    </div>
  );
}
