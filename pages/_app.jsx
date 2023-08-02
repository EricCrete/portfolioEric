import 'normalize.css/normalize.css';
import '../styles/globals.css';

import { Roboto_Flex, Montserrat } from '@next/font/google';

import { Provider } from 'react-redux';
import store from '../redux/store';
import React, { useState } from 'react';
import TemoignagesListe from '../components/TemoignageListe';
import AjouterTemoignage from '../components/AjouterTemoignage';

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

const App = ({ Component, pageProps }) => {
  const [temoignages, setTemoignages] = useState([]);

  const ajouterTemoignage = (nouveauTemoignage) => {
    setTemoignages([...temoignages, nouveauTemoignage]);
  };

  return (
    <Provider store={store}>
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      
      
      
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;