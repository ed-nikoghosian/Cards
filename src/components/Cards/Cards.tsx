import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { removeCard } from '../../store/cardsReducer';
import CardItem from './CardItem';
import styles from './styles.module.css';

const Cards = () => {
  const cardsList = useAppSelector((state) => state.cards.data);
  const dispatch = useAppDispatch();

  const handleRemove = useCallback((number: number) => {
    dispatch(removeCard(number));
  }, []);

  return (
    <div className={styles.container}>
      {cardsList.map((item) => (
        <CardItem key={item} number={item} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Cards;
