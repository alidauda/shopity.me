import 'tailwindcss/tailwind.css'
import Head from "next/head";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'

import { ChakraProvider } from "@chakra-ui/react"
import { ProvideAuth } from '../lib/firebase';
function MyApp({ Component, pageProps }) {
 
  return (
  <ProvideAuth>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="icon" href="/logo.ico" />
</Head>
  
  <Component {...pageProps} />
  </ProvideAuth>
  );
}

export default MyApp
