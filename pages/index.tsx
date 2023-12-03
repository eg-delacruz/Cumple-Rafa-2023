import { useState } from 'react';
import Head from 'next/head';

//Hooks
import useLocalStorage from '@hooks/useLocalStorage';

//Components
import Timer from '@components/Pages/Timer/Timer';
import Joke from '@components/Pages/Joke/Joke';
import Welcome from '@components/Pages/Welcome/Welcome';
import Test1 from '@components/Pages/Test1/Test1';
import Test2 from '@components/Pages/Test2/Test2';
import Test3 from '@components/Pages/Test3/Test3';
import Test4 from '@components/Pages/Test4/Test4';
import Test5 from '@components/Pages/Test5/Test5';
import Test6 from '@components/Pages/Test6/Test6';
import Test7 from '@components/Pages/Test7/Test7';
import Test8 from '@components/Pages/Test8/Test8';
import Test9 from '@components/Pages/Test9/Test9';
import Test10 from '@components/Pages/Test10/Test10';
import Test11 from '@components/Pages/Test11/Test11';
import Despedida from '@components/Pages/Despedida/Despedida';

//TODO: Añadir carta Rafa
//TODO: Añadir nombre del té

export default function Home() {
  //Use this hook for production instead of the setPage below
  const [page, setPage] = useLocalStorage('page', 0);

  //Use this state instead of the useLocalStorage for development, since the useLocalStorage throws an error in the browser because of server side processing
  //const [page, setPage] = useState(0);

  return (
    <>
      <Head>
        <title>La aventura del cuerpito de sapo</title>
        <meta
          name='description'
          content='Búsqueda del tesoro del cuerpito de sapo'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* {page === 0 && (
        <Timer date='December 27 2023 10:45:00' setPage={setPage} />
      )} */}
      {page === 0 && (
        <Timer date='November 30 2023 11:34:00' setPage={setPage} />
      )}
      {page === 1 && <Joke setPage={setPage} />}
      {page === 2 && <Welcome setPage={setPage} />}
      {page === 3 && <Test1 setPage={setPage} />}
      {page === 4 && <Test2 setPage={setPage} />}
      {page === 5 && <Test3 setPage={setPage} />}
      {page === 6 && <Test4 setPage={setPage} />}
      {page === 7 && <Test5 setPage={setPage} />}
      {page === 8 && <Test6 setPage={setPage} />}
      {page === 9 && <Test7 setPage={setPage} />}
      {page === 10 && <Test8 setPage={setPage} />}
      {page === 11 && <Test9 setPage={setPage} />}
      {page === 12 && <Test10 setPage={setPage} />}
      {page === 13 && <Test11 setPage={setPage} />}
      {page === 14 && <Despedida setPage={setPage} />}
    </>
  );
}
