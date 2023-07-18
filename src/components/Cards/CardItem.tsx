import { memo } from 'react';
import styles from './styles.module.css';

type Props = {
  number: number;
  handleRemove: (number: number) => void;
};

const CardItem = ({ number, handleRemove }: Props) => (
  <div className={styles.card}>
    <button onClick={() => handleRemove(number)} className={styles.removeButton}>
      X
    </button>
    <p>{number}</p>
  </div>
);

export default memo(CardItem);
