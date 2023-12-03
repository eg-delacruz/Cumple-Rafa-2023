import { useState } from 'react';
import Image from 'next/image';

//Assets
import arcos_san_francisco from '@assets/images/1_arcos_san_francisco.png';
import foto_arcos_san_francisco from '@assets/images/foto_arcos_san_francisco.jpg';

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

//Página de código: https://orangepiweb.es/codigos/secreto/index.php
const Test6 = ({ setPage }: Props) => {
  const THEME = 'gryffindor';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === '63') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(9);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>Un mensaje indescifrable</h2>
        <br />
        <Image
          src={arcos_san_francisco}
          alt='Mensaje secreto 1'
          layout='responsive'
        />
        <br />
        <br />
        <TestForm
          handleSubmit={handleSubmit}
          theme={THEME}
          inputChange={ANSWER.onChange}
          inputValue={ANSWER.value}
          randomErrorMessage={random}
          buttonMessage='El número correcto es...'
          inputType='number'
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <>
        <CorrectAnswer
          theme={THEME}
          buttonMessage='Siguiente horrocrux'
          setNextPage={setNextPage}
        >
          <p>
            Y así fue como el pequeño sapito la primer reliquia logró destruir
          </p>
          <br />
          <Image
            src={foto_arcos_san_francisco}
            alt='Foto de los arcos de San Francisco'
            layout='responsive'
          />
          <br />
          <br />
          <p>Orgulloso, el sapito decidió continuar con su búsqueda</p>
        </CorrectAnswer>
      </>
    );
  };

  return (
    <Layout main_width={1000} theme={THEME}>
      {answered ? answeredContent() : unAnsweredContent()}
    </Layout>
  );
};

export default Test6;
