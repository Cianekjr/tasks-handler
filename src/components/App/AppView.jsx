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

import tagsInitial from '../../Utils/JSON/DBTags';
import tagsReducer from '../../flux/tagsReducer';

export const TasksContext = createContext(null);
export const TagsContext = createContext(null);

export default function AppView() {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, tasksInitial);
  const [tagsState, tagsDispatch] = useReducer(tagsReducer, tagsInitial);
  return (
    <TasksContext.Provider value={{ tasksState, tasksDispatch }}>
      <TagsContext.Provider value={{ tagsState, tagsDispatch }}>
        <Page>
          <Global styles={Normallize} />
          <Header />
          <Main />
          <Footer />
        </Page>
      </TagsContext.Provider>
    </TasksContext.Provider>
  );
}
