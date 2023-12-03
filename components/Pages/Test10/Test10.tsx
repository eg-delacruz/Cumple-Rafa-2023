import { useState } from 'react';
import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Assets
import cofre from '@assets/gifs/cofre.gif';
import luffy from '@assets/gifs/luffy.gif';

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

const Test10 = ({ setPage }: Props) => {
  const THEME = 'gryffindor';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === '17797') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(13);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>El cofre sellado</h2>
        <br />
        <p>El sapito corrió y corrió, hasta que a su amigo 626 encontró.</p>
        <br />
        <p>Al lado de su amigo, un cofre sellado yacía.</p>
        <p>
          Un código de <strong>5 dígitos</strong>, el sapito ingresar debía
        </p>
        <br />
        <Image src={cofre} alt='Tesoro' layout='responsive' />

        <br />
        <br />
        <p>
          Menos mal que su amigo, 626, se había dado a la tarea de buscar el
          código secreto.
        </p>
        <br />
        <TestForm
          theme={THEME}
          handleSubmit={handleSubmit}
          inputChange={ANSWER.onChange}
          inputValue={ANSWER.value}
          randomErrorMessage={random}
          buttonMessage='Ver el contenido del cofre'
          title='Ingresa el codigo de 5 dígitos: '
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
          buttonMessage='Continuar'
          setNextPage={setNextPage}
          align='left'
        >
          <p>
            Tal parece que dentro del cofre se encuentan indicaciones precisas
            del paradero actual de Voldemort, así como de un arma muy poderosa
            que podrá usarse para darle fin de una vez por todas
          </p>
          <br />

          <Image src={luffy} alt='Luffy' layout='responsive' />
          <br />
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

export default Test10;
