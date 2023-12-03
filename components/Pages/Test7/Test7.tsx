import { useState } from 'react';
import Image from 'next/image';

//Assets
import cuadrados_san_martin from '@assets/images/2_cuadrados_san_martin.png';
import foto_catedral_san_martin from '@assets/images/foto_catedral_san_martin.jpg';

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

const Test7 = ({ setPage }: Props) => {
  const THEME = 'hufflepuff';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === '9') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(10);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>La segunda reliquia de la muerte</h2>
        <br />
        <Image
          src={cuadrados_san_martin}
          alt='Mensaje secreto 2'
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
            Nuestro héroe cada vez más cerca estaba, de destruir a aquel malvado
            que al mundo acechaba.
          </p>
          <br />
          <Image
            src={foto_catedral_san_martin}
            alt='Foto de la catedral de San Martín'
            layout='responsive'
          />
          <br />
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

export default Test7;
