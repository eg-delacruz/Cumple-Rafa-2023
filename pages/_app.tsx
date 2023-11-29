import '@styles/globals.scss';
import type { AppProps } from 'next/app';

//Fonts
import { rubik } from '@font/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={rubik.variable}>
      <Component {...pageProps} />
    </div>
  );
}
