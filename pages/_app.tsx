import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/style.scss';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}