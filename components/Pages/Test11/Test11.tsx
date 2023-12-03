import { useState } from 'react';
import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Assets
import basilisc from '@assets/gifs/basilisc.gif';

//Components
import Layout from '@components/Layout/Layout';
import TestForm from '@components/TestForm/TestForm';
import CorrectAnswer from '@components/CorrectAnswer/CorrectAnswer';

//Hooks
import { useInputValue } from '@hooks/useInputValue';
import useRandomMessage from '@hooks/useRandomMessage';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test11 = ({ setPage }: Props) => {
  const THEME = 'hufflepuff';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === 'polaroid') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(14);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>El enfrentamiento final</h2>
        <br />
        <p>
          Voldemort se encuentra en la Cámara de los Secretos, acompañado de su
          basilisco,{' '}
          <strong>subiendo las escaleras a las masmorras superiores</strong>.
        </p>
        <br />
        <Image
          src={basilisc}
          alt='Basilisco de Voldemort'
          layout='responsive'
        />
        <br />
        <br />
        <p>
          Deberás entrar silenciosamente para que no te descubra y deberás tomar
          el arma poderosa para poder derrotarlo.
        </p>
        <br />
        <TestForm
          handleSubmit={handleSubmit}
          inputChange={ANSWER.onChange}
          theme={THEME}
          inputValue={ANSWER.value}
          randomErrorMessage={random}
          title='Ingresa la marca del arma: '
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <>
        <CorrectAnswer
          theme={THEME}
          setNextPage={setNextPage}
          align='left'
          buttonMessage='Derrotemos a Voldemort'
        >
          <p>
            ¡Encontraste el arma poderosa, capáz de eliminar al malvado
            Voldemort!
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

export default Test11;
