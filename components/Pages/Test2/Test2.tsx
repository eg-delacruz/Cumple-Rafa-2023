import { useState } from 'react';
import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';
import TestForm from '@components/TestForm/TestForm';
import CorrectAnswer from '@components/CorrectAnswer/CorrectAnswer';

//Assets
import nuegados from '@assets/images/nuegados.jpg';

//Hooks
import { useInputValue } from '@hooks/useInputValue';
import useRandomMessage from '@hooks/useRandomMessage';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test2 = ({ setPage }: Props) => {
  const THEME = 'gryffindor';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (
        LOWERCASE_ANSWER === 'nuegados' ||
        LOWERCASE_ANSWER === 'nuegado' ||
        LOWERCASE_ANSWER === 'nuégados' ||
        LOWERCASE_ANSWER === 'nuégado'
      ) {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(5);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>El nombre correcto</h2>
        <br />
        <p>
          Cuando el pequeño sapito escuchó aquellas lindas palabras salir de
          boca de su príncipe encantador, este se sonrrojó.
        </p>
        <br />
        <p>
          En ese mismo instante, el sapito tuvo deseo de comer algo dulce. No
          pudo evitar pensar en el siguiente manjar:{' '}
        </p>

        <br />

        <div className={styles.image}>
          <Image src={nuegados} alt='Nuegados' layout='responsive' />
        </div>

        <br />

        <p className={styles.question}>
          &quot;¿Cuál era el nombre correcto de este manjar?&quot; - se preguntó
          el sapito
        </p>
        <br />

        <TestForm
          theme='gryffindor'
          inputValue={ANSWER.value}
          inputChange={ANSWER.onChange}
          handleSubmit={handleSubmit}
          randomErrorMessage={random}
          buttonMessage='El nombre correcto es este'
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <CorrectAnswer
        theme={THEME}
        buttonMessage='Continuar con la historia'
        setNextPage={setNextPage}
        align='left'
      >
        <p>
          Cuando el sapito recordó el nombre correcto, este deseó poder comer
          algunos en ese instante.
        </p>
        <br />
        <p>
          El príncipe encantador, al ver la tristeza reflejada en la cara del
          sapito y como por arte de magia, sacó de entre sus cosas una bolsa
          repleta de buñuelos.
        </p>
        <br />
        <p>
          Ni lentos ni perezosos, el príncipe y el sapito los engulleron de una.
        </p>
      </CorrectAnswer>
    );
  };

  return (
    <Layout theme={THEME}>
      {answered ? answeredContent() : unAnsweredContent()}
    </Layout>
  );
};

export default Test2;
