//Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';

//Types
type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Welcome = ({ setPage }: Props) => {
  return (
    <Layout theme='slytherin'>
      <h2>Bienvenido amorcito</h2>
      <br />
      <p>
        Esta es la historia de un sapito muy bonito y especial. Se dice que un
        día, este recibió una misteriosa cuenta regresiva. Poco sabía él lo que
        el futuro le deparaba cuando esta a su fin llegase.
      </p>
    </Layout>
  );
};

export default Welcome;
