'use client';
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import styles from './ButtonOrder.module.scss';

export default function ButtonOrder() {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (open) {
      return document.body.classList.add('no-scroll');
    }
    document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <>
      <button className={styles.button} onClick={() => setOpen(true)}>
        Замовити послугу
      </button>
      {open && <Modal close={closeModal} />}
    </>
  );
}
