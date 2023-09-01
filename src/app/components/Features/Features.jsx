import { Antenna, Clock, Astronaut, Diagram } from './Icons';
import styles from './Features.module.scss';

const featuresList = [
  {
    id: 1,
    icon: <Antenna />,
    title: 'УВАГА ДО ДЕТАЛЕЙ',
    decsription:
      'Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.',
  },
  {
    id: 2,
    icon: <Clock />,
    title: 'ПУНКТУАЛЬНІСТЬ',
    decsription:
      'Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.',
  },
  {
    id: 3,
    icon: <Diagram />,
    title: 'ПЛАНУВАННЯ',
    decsription:
      'Так само консультація з широким активом значною мірою зумовлює.',
  },
  {
    id: 4,
    icon: <Astronaut />,
    title: 'СУЧАСНІ ТЕХНОЛОГІЇ',
    decsription:
      'Значимість цих проблем настільки очевидна, що реалізація планових завдань.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <ul className={styles.list}>
        {featuresList.map(item => (
          <li key={item.id} className={styles.item}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <div className={styles.textWrapper}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.decsription}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
