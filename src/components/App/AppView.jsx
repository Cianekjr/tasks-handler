/* eslint-disable import/no-cycle */
import React, { useReducer, createContext } from 'react';
import { Global } from '@emotion/core';
import Header from '../Header/HeaderView';
import Main from '../Main/MainView';
import Footer from '../Footer/FooterView';
import Page from './App.shards';
import Normallize from '../../Utils/Normallize.shards';

import tasksInitial from '../../Utils/JSON/DBTasks';
import tasksReducer from '../../flux/tasksReducer';

export const TasksContext = createContext(null);

export default function AppView() {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, tasksInitial);
  return (
    <TasksContext.Provider value={{ tasksState, tasksDispatch }}>
      <Page>
        <Global styles={Normallize} />
        <Header />
        <Main />
        <Footer />
      </Page>
    </TasksContext.Provider>
  );
}
