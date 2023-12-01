import { useState } from 'react';
import Image from 'next/image';

//Assets
import principe_encantador from '@assets/gifs/principe_encantador.gif';

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

const Test1 = ({ setPage }: Props) => {
  const THEME = 'ravenclaw';
  const [answered, setAnswered] = useState(false);
  const { random, setRandomMessage } = useRandomMessage();

  const ANSWER = useInputValue('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === 'te quiero mucho') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(4);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>La llegada del príncipe encantador</h2>
        <br />
        <p>
          Aquel día, el príncipe encantador, novio del pequeño sapito, estaba de
          visita. Acababa de bajarse de un tren desde Muy Muy Lejano, y estaba
          muy cansado.
        </p>
        <div className='gif_container'>
          <Image
            src={principe_encantador}
            alt='Príncipe encantador'
            width={320}
          />
        </div>
        <br />
        <p>
          El príncipe encantador decidió descansar un momento en el cuarto de su
          querido sapito.
        </p>
        <br />
        <p>
          Mientras su novio descansaba, el sapito se dirigió a la cocina para
          preparar a su amado una taza de café.
        </p>
        <br />
        <p>
          Pasado un rato, el sapito volvió a sus aposentos con el café en sus
          manos, entregándoselo a su amado.
        </p>
        <p>
          El príncipe encantador, muy agradecido, susurró a su oido lo
          siguiente:
        </p>

        <br />

        <TestForm
          theme={THEME}
          inputValue={ANSWER.value}
          inputChange={ANSWER.onChange}
          handleSubmit={handleSubmit}
          randomErrorMessage={random}
          buttonMessage='Creo que eso me dijo'
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <CorrectAnswer
        title='¡Correcto!'
        buttonMessage='Continuar con la historia'
        setNextPage={setNextPage}
        theme={THEME}
        align='left'
      >
        <p>El príncipe encantador le dijo al sapito que lo quería mucho</p>
      </CorrectAnswer>
    );
  };

  return (
    <Layout theme={THEME}>
      {answered ? answeredContent() : unAnsweredContent()}
    </Layout>
  );
};

export default Test1;
