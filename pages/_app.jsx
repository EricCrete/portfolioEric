
import 'normalize.css/normalize.css'
import '../styles/globals.css'

import { Roboto_Flex, Montserrat } from '@next/font/google'

import React, { useState } from 'react';
import TemoignagesListe from './TemoignagesListe';
import AjouterTemoignage from './AjouterTemoignage';

const App = () => {
  const [temoignages, setTemoignages] = useState([]);

  const ajouterTemoignage = (nouveauTemoignage) => {
    setTemoignages([...temoignages, nouveauTemoignage]);
  };

  return (
    <div>
      <TemoignagesListe temoignages={temoignages} />
      <AjouterTemoignage ajouterTemoignage={ajouterTemoignage} />
    </div>
  );
};

const roboto = Roboto_Flex();
const montserrat = Montserrat();

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>
      {`
        html {
          font-family: ${roboto.style.fontFamily}
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${montserrat.style.fontFamily}
        }
      `}
    </style>
      
      <Component {...pageProps} />
  </>
}
