import 'tailwindcss/tailwind.css'
import Head from "next/head";
import '../styles/globals.css';

import { DefaultSeo } from 'next-seo';
import SEO from'../next-seo-config.js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ProvideAuth } from '../lib/firebase';
import { Progress } from 'components/progress';
import { useProgressStore } from 'store';
function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
  <ProvideAuth>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="icon" href="/shopity.png" />
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" />
</Head>
  <DefaultSeo {...SEO}/>
  <Progress isAnimating={isAnimating} />
  <Component {...pageProps} />
  </ProvideAuth>
  );
}

export default MyApp
