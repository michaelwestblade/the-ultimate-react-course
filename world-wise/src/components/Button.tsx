import styles from './Button.module.css';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  type: string;
}

function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
