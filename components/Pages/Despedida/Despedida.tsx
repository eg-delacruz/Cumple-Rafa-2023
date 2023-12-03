import { useState } from 'react';
import Image from 'next/image';

//Assets
import voldemor_vs_harry from '@assets/gifs/voldemort_vs_harry.gif';
import kiss from '@assets/gifs/kiss.gif';

//Components
import Layout from '@components/Layout/Layout';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Despedida = ({ setPage }: Props) => {
  const THEME = 'slytherin';
  const [answered, setAnswered] = useState(false);

  const resetGame = () => {
    setPage(0);
  };

  const unAnseredContent = () => {
    return (
      <>
        <h2>El desenlace</h2>
        <br />
        <p>
          Todo el mundo sabe que la forma más eficaz de poner fin a la maldad es
          a través del amor y de la amistad.
        </p>
        <br />
        <p>
          Utiliza el arma que obtuviste y toma una foto de ti junto a tu
          príncipe encantador. Pégala junto al resto y acaba con el enemigo.
        </p>
        <br />
        <Image
          src={voldemor_vs_harry}
          alt='Voldemort vs Harry'
          layout='responsive'
        />
        <br />
        <br />
        <button
          className={`btn btn__${THEME}`}
          onClick={() => setAnswered(true)}
        >
          ¡Ya he pegado la foto!
        </button>
      </>
    );
  };

  const answeredContent = () => {
    return (
      <>
        <p>Al haber pegado la foto en la pared, el enemigo vencido fue.</p>
        <br />
        <p>
          El príncipe encantador - &quot;Pequeño Sapito, espero que hayas
          disfrutado mucho de esta aventura tanto como yo disfruté preparándola.
          Espero hayas tenido una feliz navidad y un bonito cumpleaños, mi
          pequeño cuerpito de sapo.&quot;
        </p>

        <br />
        <Image src={kiss} alt='Voldemort vs Harry' layout='responsive' />
        <br />
        <br />
        <p>Con cariño,</p>
        <p>Gerardo</p>
        <br />
        <button onClick={resetGame} className={`btn btn__${THEME}`}>
          Reiniciar la aventura
        </button>
      </>
    );
  };

  return (
    <Layout theme={THEME}>
      {answered ? answeredContent() : unAnseredContent()}
    </Layout>
  );
};

export default Despedida;
