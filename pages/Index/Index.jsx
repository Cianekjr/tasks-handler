import React from 'react';
import Head from 'next/head';
import App from '../../src/components/App/AppView';

export default function Index() {
  return (
    <>
      <Head>
        <title>Tasks Manager</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=latin-ext" rel="stylesheet" />
      </Head>
      <App />
    </>
  );
}
