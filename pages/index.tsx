import Head from 'next/head';

//Hooks
import useLocalStorage from '@hooks/useLocalStorage';

//Components
import Timer from '@components/Pages/Timer/Timer';

export default function Home() {
  const [page, setPage] = useLocalStorage('page', 1);

  //TODO: pass the setPage function to the Timer component
  //TODO: Create a button for each Hogwarts house
  //TODO: Put away the Layout component from the timer component
  //TODO: Finish the timer component
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

      <main>
        <Timer date='December 27 2023 10:30:00' />
      </main>
    </>
  );
}
