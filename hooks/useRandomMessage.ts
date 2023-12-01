import { useState } from 'react';

const useRandomMessage = () => {
  const mensajes: { [key: number]: string } = {
    1: 'No amorcito, vuelva a probar',
    2: 'Venga mejor, le vamos a dar un besito',
    3: 'No, no, no, no, no, no, no',
    4: 'Ay no...',
    5: 'No amor, no',
    6: 'Responda bien que no tenemos todo el día',
    7: 'Nooooo',
    8: 'No quieroooo',
    9: '¡Que no le dije!',
    10: 'Ay no, este cuerpo de sapo...',
    11: 'No, no es eso',
    12: 'Ay que bonita mi morcita 🥰🦭',
  };

  const [random, setRandom] = useState<string>('');

  function setRandomNumber(min: number, max: number): number {
    var result: number;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }

  function setRandomMessage(): void {
    setRandom(mensajes[setRandomNumber(1, 11)]);
  }

  return { random, setRandomMessage };
};

export default useRandomMessage;
