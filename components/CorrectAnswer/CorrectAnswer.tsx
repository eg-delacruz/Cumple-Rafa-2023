//Styles
import styles from './Styles.module.scss';

//Types
type Props = {
  setNextPage: () => void;
  theme: string;
  title?: string;
  buttonMessage: string;
  children?: React.ReactNode;
  align?: 'center' | 'left';
};

const CorrectAnswer = ({
  setNextPage,
  theme,
  title = '¡Correcto!',
  buttonMessage = 'Siguiente',
  align = 'center',
  children,
}: Props): JSX.Element => {
  const handleClick = () => {
    setNextPage();
  };

  return (
    <div
      className={`${styles.container} ${
        align === 'left' ? styles.align_left : null
      }`}
    >
      <h1 className={styles.title}>{title}</h1>
      <br />
      {children}
      <br />
      <button onClick={handleClick} className={`btn btn btn__${theme}`}>
        {buttonMessage}
      </button>
    </div>
  );
};

export default CorrectAnswer;
