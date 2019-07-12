import React from 'react';
import { Global } from '@emotion/core';
import Normallize from '../../src/Utils/Normallize.shards';
import Header from '../../src/components/Header/HeaderView';
import Main from '../../src/components/Main/MainView';
import Footer from '../../src/components/Footer/FooterView';
import Body from './Index.shards';

export default function Index() {
  return (
    <Body>
      <Global styles={Normallize} />
      <Header />
      <Main />
      <Footer />
    </Body>
  );
}
