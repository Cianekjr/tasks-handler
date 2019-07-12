import React from 'react';
import { Main, CardWrapper } from './Main.shards';
import Card from '../Card/CardView';
import tasks from '../../Utils/json/tasks';

export default function MainView() {
  return (
    <Main>
      <CardWrapper>
        <Card name="Planned" tasks={tasks.filter(task => task.section === 'planned')} />
        <Card name="Backlog" tasks={tasks.filter(task => task.section === 'backlog')} />
        <Card name="In progress" tasks={tasks.filter(task => task.section === 'in_progress')} />
        <Card name="Code Review" tasks={tasks.filter(task => task.section === 'code_review')} />
        <Card name="Done" tasks={tasks.filter(task => task.section === 'done')} />
      </CardWrapper>
    </Main>
  );
}
