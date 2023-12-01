import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';

//Asstes
import busqueda_tesoro from '@assets/gifs/busqueda_tesoro.gif';

//Types
type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Welcome = ({ setPage }: Props) => {
  const handleClick = () => {
    setPage(3);
  };

  return (
    <Layout theme='slytherin'>
      <h2>Bienvenido amorcito</h2>
      <br />
      <p>
        Esta es la historia de un sapito muy bonito y especial. Se dice que un
        día, este recibió una misteriosa cuenta regresiva...
      </p>

      <div className='gif_container'>
        <Image src={busqueda_tesoro} alt='busqueda_tesoro' width={320} />
      </div>

      <p className={styles.text_p2}>
        ...Poco sabía él lo que el futuro le deparaba cuando esta a su fin
        llegase
      </p>

      <button
        onClick={handleClick}
        className={`${styles.button} btn btn__slytherin`}
      >
        Continuar
      </button>
    </Layout>
  );
};

export default Welcome;
