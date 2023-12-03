import { useState } from 'react';
import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Assets
import picos_das_burgas from '@assets/images/3_picos_das_burgas.png';
import foto_xardin_das_burgas from '@assets/images/foto_xardin das burgas.jpg';

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

const Test8 = ({ setPage }: Props) => {
  const THEME = 'slytherin';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === '12') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(11);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>La tercera reliquia de la muerte</h2>
        <br />
        <Image
          src={picos_das_burgas}
          alt='Mensaje secreto 3'
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
          buttonMessage='Continuar con la aventura'
          setNextPage={setNextPage}
        >
          <p>
            Habiendo destruido las tres reliquias de la muerte, y con ellas una
            parte del alma de Voldemort, el pequeño sapito estaba cada vez más
            cerca de la batalla final.
          </p>

          <br />
          <Image
            src={foto_xardin_das_burgas}
            alt='Foto del jardín das burgas'
            layout='responsive'
          />
          <br />
          <br />
          <p>
            Antes de continuar, algo en su interior le decía, que la información
            hasta ahora recopilada, en el futuro, útil le sería, y decidió
            apuntarla:
          </p>
          <br />
          <ul className={styles.list}>
            <li>
              <strong>Arcos de San Francisco</strong> - 63
            </li>
            <li>
              <strong>Cuadrados de San Martín</strong> - 9
            </li>
            <li>
              <strong>Picos de la estrella das Burgas</strong> - 12
            </li>
          </ul>
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

export default Test8;
