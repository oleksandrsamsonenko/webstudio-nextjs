import Image from 'next/image';
import image1 from 'src/images/skills/skills1.jpg';
import image2 from 'src/images/skills/skills2.jpg';
import image3 from 'src/images/skills/skills3.jpg';
import styles from './OurSkills.module.scss';

const skillsList = [
  { id: 1, description: 'Десктопні додатки', image: image1 },
  { id: 2, description: 'Мобільні додатки', image: image2 },
  { id: 3, description: 'Дизайнерські рішення', image: image3 },
];

export default function OurSkills() {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Чим ми займаємося</h2>
      <ul className={styles.skillsList}>
        {skillsList.map(item => (
          <li className={styles.item} key={item.id}>
            <Image
              className={styles.image}
              src={item.image}
              alt={item.description}
              sizes="33vw"
              fill
            />
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
