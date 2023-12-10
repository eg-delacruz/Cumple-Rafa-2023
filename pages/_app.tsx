import '@styles/globals.scss';
import type { AppProps } from 'next/app';

//Fonts
import { yeseva, cookie } from '@font/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${yeseva.variable} ${cookie.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
