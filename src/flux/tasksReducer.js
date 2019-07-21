const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return [action.task, ...state];
    }
    case 'DELETE_TASK': {
      return state.filter(task => task.id !== action.id);
    }
    case 'UPDATE_TASK': {
      const nextState = [...state];
      const taskIndex = nextState.findIndex(task => task.id === action.id);
      nextState[taskIndex] = action.taskState;
      return nextState;
    }
    case 'DRAG_TASK': {
      const nextState = [...state];
      const taskIndex = nextState.findIndex(task => String(task.id) === action.dragTaskId);
      if (String(taskIndex) && nextState[taskIndex]) {
        nextState[taskIndex].section = action.dragContainer;
      }
      return nextState;
    }
    default:
      return state;
  }
};

export default tasksReducer;
