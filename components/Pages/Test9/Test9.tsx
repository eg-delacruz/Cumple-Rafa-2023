import { useState } from 'react';

//Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';
import CorrectAnswer from '@components/CorrectAnswer/CorrectAnswer';

//Hooks
import { useInputValue } from '@hooks/useInputValue';
import useRandomMessage from '@hooks/useRandomMessage';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test9 = ({ setPage }: Props) => {
  const THEME = 'ravenclaw';
  const [answered, setAnswered] = useState(false);

  const [digit1_correct, setDigit1_correct] = useState(false);
  const [digit2_correct, setDigit2_correct] = useState(false);
  const [digit3_correct, setDigit3_correct] = useState(false);

  const DIGIT_1 = useInputValue('');
  const DIGIT_2 = useInputValue('');
  const DIGIT_3 = useInputValue('');

  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      typeof DIGIT_1.value === 'string' &&
      typeof DIGIT_2.value === 'string' &&
      typeof DIGIT_3.value === 'string'
    ) {
      const LOWERCASE_DIGIT_1 = DIGIT_1.value.toLowerCase();
      const LOWERCASE_DIGIT_2 = DIGIT_2.value.toLowerCase();
      const LOWERCASE_DIGIT_3 = DIGIT_3.value.toLowerCase();

      if (
        LOWERCASE_DIGIT_1 === '6' &&
        LOWERCASE_DIGIT_2 === '2' &&
        LOWERCASE_DIGIT_3 === '6'
      ) {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const handleDigit1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    DIGIT_1.setValue(e.target.value);
    if (e.target.value !== '') {
      document.getElementById('digit_2')?.focus();
    }

    if (e.target.value === '6') {
      setDigit1_correct(true);
    } else {
      setDigit1_correct(false);
    }
  };

  const handleDigit2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    DIGIT_2.setValue(e.target.value);
    if (e.target.value !== '') {
      document.getElementById('digit_3')?.focus();
    }

    if (e.target.value === '2') {
      setDigit2_correct(true);
    } else {
      setDigit2_correct(false);
    }
  };

  const handleDigit3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    DIGIT_3.setValue(e.target.value);

    if (e.target.value === '6') {
      setDigit3_correct(true);
    } else {
      setDigit3_correct(false);
    }
  };

  const setNextPage = () => {
    setPage(12);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>El amigo misterioso</h2>
        <br />
        <p>
          Para derrotar a Voldemort, necesitarás la ayuda de un amiguito
          misterioso.
        </p>
        <br />
        <p>Para saber de quien se trata,</p>
        <p>utiliza los datos de tu larga caminata:</p>
        <br />
        <ul>
          <li>Los arcos de San Francisco divididos entre 9 menos 1</li>
          <li>Los cuadrados de San Martín divididos entre 3 menos 1</li>
          <li>Los picos de la estrella das Burgas repartidos entre 2</li>
        </ul>
        <br />
        <form
          className={styles.form}
          method='POST'
          action=''
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h4>Respuesta: </h4>
          <br />
          <div className={styles.inputs_container}>
            <input
              id='digit_1'
              type='number'
              autoCapitalize='off'
              required
              value={DIGIT_1.value}
              onChange={handleDigit1Change}
              className={
                DIGIT_1.value !== '' && digit1_correct
                  ? styles.correct
                  : DIGIT_1.value !== '' && !digit1_correct
                  ? styles.incorrect
                  : ''
              }
            />
            <input
              id='digit_2'
              type='number'
              autoCapitalize='off'
              required
              value={DIGIT_2.value}
              onChange={handleDigit2Change}
              className={
                DIGIT_2.value !== '' && digit2_correct
                  ? styles.correct
                  : DIGIT_2.value !== '' && !digit2_correct
                  ? styles.incorrect
                  : ''
              }
            />
            <input
              id='digit_3'
              type='number'
              autoCapitalize='off'
              required
              value={DIGIT_3.value}
              onChange={handleDigit3Change}
              className={
                DIGIT_3.value !== '' && digit3_correct
                  ? styles.correct
                  : DIGIT_3.value !== '' && !digit3_correct
                  ? styles.incorrect
                  : ''
              }
            />
          </div>
          <br />
          <button className={`btn btn__${THEME}`}>¿Quén será?</button>
          <br />
          <p>{random}</p>
        </form>
      </>
    );
  };

  const answeredContent = () => {
    return (
      <CorrectAnswer
        theme={THEME}
        setNextPage={setNextPage}
        buttonMessage='Vamos a ver a mi amigo!!!'
      >
        <p>Tu amigo es 626</p>
        <p>¡Corre a su encuentro!</p>
      </CorrectAnswer>
    );
  };

  return (
    <Layout theme={THEME}>
      {answered ? answeredContent() : unAnsweredContent()}
    </Layout>
  );
};

export default Test9;
