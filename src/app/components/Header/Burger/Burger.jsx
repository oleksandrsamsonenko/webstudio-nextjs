'use client';

import { useState, useEffect } from 'react';
import MobileMenu from '../../MobileMenu/MobileMenu';
import { BurgerIcon } from './icon';
import styles from './Burger.module.scss';

export default function Burger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      return document.body.classList.add('no-scroll');
    }
    document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <>
      <button
        className={styles.burger}
        onClick={() => {
          setOpen(true);
        }}
      >
        <BurgerIcon />
      </button>

      <MobileMenu open={open} close={() => setOpen(false)} />
    </>
  );
}
