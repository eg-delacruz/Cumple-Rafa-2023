import { useState, useEffect } from 'react';
import Image from 'next/image';

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
import torre_vieja from '@assets/images/torre_vieja.jpg';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test4 = ({ setPage }: Props) => {
  const THEME = 'slytherin';
  const [answered, setAnswered] = useState(false);
  const ANSWER = useInputValue('');
  const { random, setRandomMessage } = useRandomMessage();

  //Scroll to top when loading the component
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof ANSWER.value === 'string') {
      const LOWERCASE_ANSWER = ANSWER.value.toLowerCase();

      if (LOWERCASE_ANSWER === 'alicante') {
        setAnswered(true);
      } else {
        setRandomMessage();
      }
    }
  };

  const setNextPage = () => {
    setPage(7);
  };

  const unAnsweredContent = () => {
    return (
      <>
        <h2>La foto misteriosa</h2>
        <br />
        <p>
          Acto seguido y tras un movimiento de su varita, Voldemort desapareció,
          dejando caer la siguiente fotografía tras de sí:
        </p>
        <br />
        <div className={styles.img_container}>
          <Image src={torre_vieja} alt='Torre Vieja' layout='responsive' />
        </div>
        <br />
        <p>
          Luego de examinarla detenidamente, el pequeño sapito notó que por la
          parte trasera se podía leer lo siguiente:
        </p>
        <br />
        <p>&quot;¿En qué provincia española fue tomada esta foto?&quot;</p>
        <br />
        <TestForm
          handleSubmit={handleSubmit}
          inputChange={ANSWER.onChange}
          inputValue={ANSWER.value}
          buttonMessage='Seguramente fue en...'
          randomErrorMessage={random}
          theme={THEME}
        />
      </>
    );
  };

  const answeredContent = () => {
    return (
      <>
        <CorrectAnswer
          buttonMessage='Ver el poster'
          setNextPage={setNextPage}
          theme={THEME}
          align='left'
        >
          <p>
            El sapito recordó que aquella foto había sido de sus vacaciones de
            verano en Torre Vieja, Alicante, junto a su príncipe encantador.
          </p>
          <br />
          <p>
            En ese momento se dio cuenta que el malvado Voldemort, además de la
            foto, había dejado caer también un pergamino y lo que parecía ser un
            poster con una imagen.
          </p>
          <br />
          <p>El pergamino decía lo siguiente:</p>
          <br />
          {/* Carta */}
          <div className={styles.parchment}>
            <p>Querido Rafa,</p>
            <br />
            <p>
              A casi dos años desde el día en que nos conocimos, hoy me pongo a
              ver atrás y revivir las vivencias que vos y yo hemos compartido.{' '}
            </p>
            <br />
            <p>
              Me doy cuenta de que hemos pasado por muchas cosas. Muchas etapas,
              cada una con sus cosas alegres, sus cosas bonitas, sus cosas
              duras, y sus cosas tristes.
            </p>
            <br />
            <br />
            <p>Estos dos años me han dejado observar grandes cambios en vos.</p>
            <p>
              Recuerdo esos primeros días y semanas en que te conocí. Hablabas
              poco y tu timidez era evidente. Supongo que era inevitable, dadas
              las duras situaciones que te tocó vivir. He sido testigo de todas
              las circunstancias por las que te ha tocado pasar en España.
              Incertidumbres, miedos, decepciones y algunas tragedias.{' '}
            </p>
            <br />
            <p>
              A pesar de todo eso y entre tantas preocupaciones, esa sonrisa
              tuya siempre se asoma en tu carita. A pesar de todo eso, siempre
              me has regalado momentos muy bonitos, llenos de alegría, cariño y
              ternura. A pesar de todo eso, lo lograste. A pesar de todo eso,
              has llegado hasta donde estás hoy, y es algo que siempre voy a
              admirar mucho de vos y que me servirá de inspiración para
              continuar con mi propio camino. No digo que todo sea perfecto
              ahora en tu vida. Siempre habrá algún problema o situación
              incómoda, pero la tendencia es clara y estoy emocionado por
              presenciar todas esas cosas buenas que la vida te tiene preparadas
              para el futuro.
            </p>
            <br />
            <br />
            <p>
              Haberte conocido fue para mí algo muy especial. Toda esta aventura
              con vos me ha hecho descubrir nuevas cosas y me ha permitido vivir
              experiencias que no conocía. Me alegra mucho que ahora nos hagamos
              llamar &quot;novios&quot;, pues estar con un chico era algo nuevo
              para mí, y me hace muy feliz haber podido vivir esta experiencia
              con vos.
            </p>
            <br />
            <p>
              Poco a poco he ido perdiendo ese temor del &quot;qué dirán&quot;
              por agarrarnos de las manos o por darnos un beso mientras
              caminamos por la calle. Cada vez me es más fácil referirme a vos
              como mi pareja ante otras personas sin temor a lo que puedan
              pensar. Sé que aún me falta mejorar en este aspecto, pero cada día
              lo hago un poco mejor.
            </p>
            <br />
            <p>
              He aprendido muchas cosas de vos. Me has enseñado lo que realmente
              es la perseverancia. Me has demostrado tu forma de ser resiliente.
              He podido ser testigo de cómo, a pesar de las circunstancias y los
              golpes duros, aún es posible continuar, ser feliz y sonreír, y
              esto es algo que puedo y quiero implementar en mi vida.
            </p>
            <br />
            <br />
            <p>
              No solo vos te has superado como persona o yo he aprendido cosas
              nuevas. Nuestra relación también ha ido evolucionando. Ambos
              sabemos que muchas situaciones de convivencia no han sido fáciles.
              Sin embargo, soy consciente de que las cosas van cada vez mejor,
              gracias a las conversaciones que hemos tenido al respecto. Esto me
              hace muy feliz y me da mucha tranquilidad. Me siento agradecido y
              feliz por tener a alguien tan especial como vos a mi lado, y
              espero que podamos seguir construyendo momentos bonitos en el
              futuro.
            </p>
            <br />
            <br />
            <p>
              Tristemente, no pudimos pasar navidad juntos, pero el día de hoy,
              tu cumpleaños, estamos juntos, cosa que me alegra mucho.
            </p>
            <br />
            <p>
              Espero que este día la pasés muy bien, y que los sucesos que en él
              se presenten dejen entre ver, al menos, una sonrisita en tu
              rostro.{' '}
            </p>
            <br />
            <p>
              Feliz cumpleaños, amor. Te deseo todo lo mejor en este nuevo año
              de vida y que se cumplan todos tus deseos y tus metas. ¡Te quiero
              mucho!
            </p>
            <br />
            <p>Con cariño,</p>
            <p>Gerardo</p>
          </div>
          {/* Fin carta */}
          <br />
          <br />
          <p>
            Luego de haberlo leído, el pequeño sapito echó un vistazo al
            poster...
          </p>
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

export default Test4;
