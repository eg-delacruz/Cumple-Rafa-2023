import Head from 'next/head';

//Hooks
import useLocalStorage from '@hooks/useLocalStorage';

//Components
import Timer from '@components/Pages/Timer/Timer';
import Joke from '@components/Pages/Joke/Joke';

export default function Home() {
  //TODO: to avoit having to clear the local storage, use a state while depeloping the app, and then change it to use the local storage
  const [page, setPage] = useLocalStorage('page', 0);
  console.log({ page });

  //TODO: pass the setPage function to the Timer component
  //TODO: Create a button for each Hogwarts house
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
        {/* <Timer date='December 27 2023 10:30:00' setPage={setPage} /> */}
        <Timer date='November 30 2023 10:22:00' setPage={setPage} />
      </main>
    </>
  );
}
