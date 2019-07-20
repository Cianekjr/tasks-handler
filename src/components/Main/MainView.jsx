/* eslint-disable import/no-cycle */
import React, { useEffect, useContext } from 'react';
import { Main, CardWrapper } from './Main.shards';
import Card from '../Card/CardView';

import { TasksContext } from '../App/AppView';

export default function MainView() {
  const { tasksDispatch } = useContext(TasksContext);

  useEffect(() => {
    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.container');
    let dragContainer = null;
    let dragTaskId = null;

    function dragStart() {
      if (this.attributes.id) {
        dragTaskId = this.attributes.id.value;
        this.classList.add('drag-active');
      }
    }
    function dragEnd() {
      this.classList.remove('drag-active');
    }
    function dragOver(e) {
      e.preventDefault();
      this.classList.add('drag-active');
    }
    function dragEnter(e) {
      e.preventDefault();
      if (this.attributes.name) {
        dragContainer = this.attributes.name.value;
      }
    }
    function dragDrop(e) {
      e.preventDefault();
      tasksDispatch({
        type: 'DRAG_TASK',
        dragTaskId,
        dragContainer,
      });
    }

    draggables.forEach((draggable) => {
      draggable.addEventListener('dragstart', dragStart);
      draggable.addEventListener('dragend', dragEnd);
    });
    containers.forEach((container) => {
      container.addEventListener('dragover', dragOver);
      container.addEventListener('dragenter', dragEnter);
      container.addEventListener('drop', dragDrop);
    });
    return () => {
      draggables.forEach((draggable) => {
        draggable.removeEventListener('dragstart', dragStart);
        draggable.removeEventListener('dragend', dragEnd);
      });
      containers.forEach((container) => {
        container.removeEventListener('dragover', dragOver);
        container.removeEventListener('dragEnter', dragEnter);
        container.removeEventListener('drop', dragDrop);
      });
    };
  });
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
