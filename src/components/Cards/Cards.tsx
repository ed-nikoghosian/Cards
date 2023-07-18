import { useAppDispatch, useAppSelector } from '../../hooks';
import { removeCard } from '../../store/cardsReducer';
import CardItem from './CardItem';
import styles from './styles.module.css';

const Cards = () => {
  const cardsList = useAppSelector((state) => state.cards.data);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      {cardsList.map((item) => (
        <CardItem key={item} number={item} handleRemove={() => dispatch(removeCard(item))} />
      ))}
    </div>
  );
};

export default Cards;
