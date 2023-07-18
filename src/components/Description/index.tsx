import styles from './styles.module.css';

const Description = () => {
  return (
    <aside className={styles.description}>
      <p>
        Press the "Add Card" button to add the new card.
        <br /> Use the "Sort Cards" button to sort the cards by the increase.
        <br /> Press an "X" icon on the top right to delete them.
      </p>
    </aside>
  );
};

export default Description;
