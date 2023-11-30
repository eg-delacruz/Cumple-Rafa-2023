import { useEffect } from 'react';

//Styles
import styles from './Styles.module.scss';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Joke = ({ setPage }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setPage(2);
    }, 14000);
  }, []);

  return (
    <div className={styles.container}>
      <h1>La espera ha finalizado</h1>

      <div className={styles.drums}>
        <p>🥁🥁🥁</p>
        <p>Y tu premio es...</p>
      </div>

      <div className={styles.kiss}>
        <p>Un besitooo</p>
        <p>😘😘😘</p>
      </div>

      <div className={styles.punch_line}>
        <p>Mentiras amorcito, hay más</p>
        <p>😈</p>
      </div>
    </div>
  );
};

export default Joke;
