/* eslint-disable import/no-cycle */
import React from 'react';
import { Main, CardWrapper } from './Main.shards';
import Card from '../Card/CardView';

export default function MainView() {
  return (
    <Main>
      <CardWrapper>
        <Card title="Backlog" name="backlog" create />
        <Card title="Planned" name="planned" />
        <Card title="In progress" name="in_progress" />
        <Card title="Code Review" name="code_review" />
        <Card title="Done" name="done" />
      </CardWrapper>
    </Main>
  );
}
