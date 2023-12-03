import { useState, useEffect } from 'react';
import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';
import TestForm from '@components/TestForm/TestForm';
import CorrectAnswer from '@components/CorrectAnswer/CorrectAnswer';

//Hooks
import { useInputValue } from '@hooks/useInputValue';
import useRandomMessage from '@hooks/useRandomMessage';

//Assets
import torre_vieja from '@assets/images/torre_vieja.jpg';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test4 = ({ setPage }: Props) => {
  const THEME = 'slytherin';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  //Scroll to top when loading the component
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === 'alicante') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(7);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>La foto misteriosa</h2>
        <br />
        <p>
          Acto seguido y tras un movimiento de su varita, Voldemort desapareció,
          dejando caer la siguiente fotografía tras de sí:
        </p>
        <br />
        <div className={styles.img_container}>
          <Image src={torre_vieja} alt='Torre Vieja' layout='responsive' />
        </div>
        <br />
        <p>
          Luego de examinarla detenidamente, el pequeño sapito notó que por la
          parte trasera se podía leer lo siguiente:
        </p>
        <br />
        <p>&quot;¿En qué provincia española fue tomada esta foto?&quot;</p>
        <br />
        <TestForm
          handleSubmit={handleSubmit}
          inputChange={ANSWER.onChange}
          inputValue={ANSWER.value}
          buttonMessage='Seguramente fue en...'
          randomErrorMessage={random}
          theme={THEME}
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <>
        <CorrectAnswer
          buttonMessage='Ver el poster'
          setNextPage={setNextPage}
          theme={THEME}
          align='left'
        >
          <p>
            El sapito recordó que aquella foto había sido de sus vacaciones de
            verano en Torre Vieja, Alicante, junto a su príncipe encantador.
          </p>
          <br />
          <p>
            En ese momento se dio cuenta que el malvado Voldemort, además de la
            foto, había dejado caer también un pergamino y lo que parecía ser un
            poster con una imagen.
          </p>
          <br />
          <p>El pergamino decía lo siguiente:</p>
          <br />
          <p>&quot;Carta a Rafa&quot;</p>
          <br />
          <p>
            Luego de haberlo leído, el pequeño sapito echó un vistazo al
            poster...
          </p>
        </CorrectAnswer>
      </>
    );
  };

  return (
    <Layout theme={THEME}>
      {answered ? answeredContent() : unAnsweredContent()}
    </Layout>
  );
};

export default Test4;
