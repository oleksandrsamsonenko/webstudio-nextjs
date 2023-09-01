import Image from 'next/image';
import team1 from '@images/team/team1.jpg';
import team2 from '@images/team/team2.jpg';
import team3 from '@images/team/team3.jpg';
import team4 from '@images/team/team4.jpg';
import styles from './OurTeam.module.scss';
import { Instagram, Twitter, Facebook, Linkedin } from './icons';

const teamList = [
  {
    id: 1,
    image: team1,
    name: "Ігор Дем'яненко",
    position: 'Product Designer',
  },
  {
    id: 2,
    image: team2,
    name: 'Ольга Рєпіна',
    position: 'Frontend Developer',
  },
  {
    id: 3,
    image: team3,
    name: 'Микола Тарасов',
    position: 'Marketing',
  },
  {
    id: 4,
    image: team4,
    name: 'Михайло Єрмаков',
    position: 'UI Designer',
  },
];

export default function OurTeam() {
  return (
    <section className={styles.ourTeam}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Наша команда</h2>
        <ul className={styles.teamList}>
          {teamList.map(item => (
            <li key={item.id} className={styles.item}>
              <Image
                className={styles.image}
                src={item.image}
                alt={item.name}
                sizes="90vw"
                fill
              />
              <div className={styles.description}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.position}>{item.position}</p>
              </div>
              <div className={styles.socials}>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  className={styles.link}
                >
                  <Instagram className={styles.icon} styleProp={styles.icon} />
                </a>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  className={styles.link}
                >
                  <Twitter className={styles.icon} styleProp={styles.icon} />
                </a>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  className={styles.link}
                >
                  <Facebook className={styles.icon} styleProp={styles.icon} />
                </a>
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  className={styles.link}
                >
                  <Linkedin className={styles.icon} styleProp={styles.icon} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
