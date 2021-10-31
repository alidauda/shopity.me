import '../styles/globals.css'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import { UserContext } from '../lib/context';
import { Username } from './[username]';

function MyApp({ Component, pageProps }) {
 
  return (
  <>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
  
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
