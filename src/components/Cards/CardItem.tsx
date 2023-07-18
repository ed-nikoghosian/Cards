import { memo } from 'react';
import styles from './styles.module.css';

type Props = {
  number: number;
  handleRemove: () => void;
};

const CardItem = ({ number, handleRemove }: Props) => {
  return (
    <div className={styles.card}>
      <button onClick={handleRemove} className={styles.removeButton}>
        X
      </button>
      <p>{number}</p>
    </div>
  );
};

export default memo(CardItem);
