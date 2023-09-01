import { User, Phone, Email, Close } from './icons';
import styles from './Modal.module.scss';

export default function Modal({ close }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Залиште свої дані, ми вам передзвонимо</h2>

        <form className={styles.form}>
          <label className={styles.label} htmlFor="name">
            {"Ім'я"}
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="text"
                name="name"
                id="name"
                required
              />
              <User styleProp={styles.icon} />
            </div>
          </label>
          <label className={styles.label} htmlFor="phone">
            Телефон
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                id="phone"
                required
              />
              <Phone styleProp={styles.icon} />
            </div>
          </label>
          <label className={styles.label} htmlFor="email">
            Пошта
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                required
              />
              <Email styleProp={styles.icon} />
            </div>
          </label>
          <label className={styles.label} htmlFor="comment">
            Коментар
            <textarea
              name="comment"
              id="comment"
              className={styles.textarea}
              placeholder="Введіть текст"
            ></textarea>
          </label>
          <label htmlFor="checkbox" className={styles.check}>
            <input type="checkbox" id="checkbox" required />
            Погоджуюся з розсилкою та приймаю{' '}
            <span className={styles.conditions}>Умови договору</span>
          </label>
          <button className={styles.button} type="submit">
            Відправити
          </button>
        </form>
        <button onClick={close} className={styles.close}>
          <Close styleProp={styles.closeIcon} />
        </button>
      </div>
    </div>
  );
}
