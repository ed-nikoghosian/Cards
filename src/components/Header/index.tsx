import { useAppDispatch } from '../../hooks';
import { addCard, sortCards } from '../../store/cardsReducer';
import styles from './styles.module.css';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <button className={styles.primaryButton} onClick={() => dispatch(addCard())}>
        Add Card
      </button>
      <button className={styles.primaryButton} onClick={() => dispatch(sortCards())}>
        Sort Cards
      </button>
    </header>
  );
};

export default Header;
