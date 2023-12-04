import { useState } from 'react';
import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';
import TestForm from '@components/TestForm/TestForm';
import CorrectAnswer from '@components/CorrectAnswer/CorrectAnswer';

//Assets
import invierno_japones from '@assets/images/invierno_japones.jpg';

//Hooks
import { useInputValue } from '@hooks/useInputValue';
import useRandomMessage from '@hooks/useRandomMessage';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test5 = ({ setPage }: Props) => {
  const THEME = 'ravenclaw';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === 'tropical supreme') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(8);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>El poster misterioso</h2>
        <br />
        <p>El poster contenía la siguiente imagen:</p>
        <br />
        <Image
          src={invierno_japones}
          alt='Invierno japonés'
          layout='responsive'
        />
        <br />
        <br />
        <p>Atrás podía leerse:</p>
        <br />
        <p>
          &quot;A pesar de su nombre tan frío, aquel elixir era tan
          reconfortante por su cálido aroma...&quot;
        </p>
        <br />
        <p>
          Desconcertado, el pequeño sapito tenía claro una cosa: era momento de
          salir de aquel castillo y de casa, y salir al mundo exterior.
        </p>
        <br />
        <p>
          Antes de salir, el sapito pensó que sería buena idea llevar papel y
          lápiz consigo.
        </p>
        <br />

        <TestForm
          theme={THEME}
          handleSubmit={handleSubmit}
          inputChange={ANSWER.onChange}
          inputValue={ANSWER.value}
          randomErrorMessage={random}
          buttonMessage='Esta es la respuesta al enigma'
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <>
        <CorrectAnswer
          theme={THEME}
          buttonMessage='Continuar con la aventura'
          align='left'
          setNextPage={setNextPage}
        >
          <p>El intrépido sapito había resuelto aquel acertijo.</p>
          <br />
          <p>
            Sin embargo, aún tenía que encontrar las{' '}
            <strong>3 Reliquias de Ourense</strong> para vencer a aquel malvado.
          </p>
          <p>
            Bajo el invierno japonés había encontrdo un código que lo guiaría
            hacia su siguiente destino.
          </p>
        </CorrectAnswer>
      </>
    );
  };

  return (
    <Layout theme='ravenclaw'>
      {answered ? answeredContent() : unAnsweredContent()}
    </Layout>
  );
};

export default Test5;
