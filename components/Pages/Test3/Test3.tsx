import Image from 'next/image';

import { useState } from 'react';

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
import Voldemort from '@assets/gifs/voldemort.gif';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test3 = ({ setPage }: Props) => {
  const THEME = 'hufflepuff';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === 'harry potter') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(6);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>El primer acertijo</h2>
        <br />
        <p>Repentinamente, al sapito se le presentó el siguiente acertijo:</p>
        <br />
        <p>"4 patas tiene y no puede andar.</p>
        <p>También cabecera sin saber hablar.</p>
        <p>
          El castillo que en ella se esconde, la siguiente pista te dará..."
        </p>
        <br />
        <p>
          Perplejo, el sapito comenzó a pensar y pensar. Lo único que tenía
          claro es que era momento de actuar.
        </p>
        <br />
        <TestForm
          handleSubmit={handleSubmit}
          inputChange={ANSWER.onChange}
          inputValue={ANSWER.value}
          buttonMessage='A esta conclusión he llegado'
          theme={THEME}
          randomErrorMessage={random}
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <>
        <h1 className={styles.title}>¡Correcto!</h1>
        <br />
        <p>
          El pequeño sapito había encontrado el Castillo de Hogwarts debajo de
          su cama, lugar donde su héroe, Harry Potter, perfeccionó sus
          habilidades como mago.
        </p>
        <br />
        <p>
          Repentinamente, el príncipe y el sapito fueron absorbidos dentro de
          aquel castillo en miniatura...
        </p>
        <p className={styles.dot}>.</p>
        <p className={styles.dot}>.</p>
        <p className={styles.dot}>.</p>
        <br />

        <p className={styles.appear1}>
          Al adentrarse en el castillo, el sapito al mismísimo Voldemort se
          encontró, y las siguientes palabras este pronunció:
        </p>
        <div className={`${styles.appear1} gif_container`}>
          <Image src={Voldemort} alt='Voldemort' width={320} />
        </div>
        <br />
        <p className={styles.appear2}>
          "Para vencerme, las <strong>3 Reliquias de Ourense</strong> encontrar
          deberás..."
        </p>

        <br />

        <button
          onClick={setNextPage}
          className={`${styles.appear2} btn btn btn__${THEME}`}
        >
          Continuar con la historia
        </button>
      </>
    );
  };

  return (
    <Layout theme={THEME}>
      {answered ? answeredContent() : unAnsweredContent()}
    </Layout>
  );
};

export default Test3;
