import { AppProps } from 'next/app';
import React from 'react';

import GlobalStyle from '../styles/GlobalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
