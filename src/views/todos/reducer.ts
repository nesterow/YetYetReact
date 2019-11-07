import { Todo } from 'AppModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { getTodosAsync, addTodoAsync, removeTodoAsync } from './actions';


export const isLoading = createReducer(false as boolean)
  .handleAction(
    [getTodosAsync.request] as any, 
    (state, action) => true
  )
  .handleAction(
    [getTodosAsync.success, getTodosAsync.failure] as any,
    (state, action) => false
  );

export const todos = createReducer([] as Todo[])
  .handleAction(
      getTodosAsync.success as any, 
      (state, action) => action.payload
  )
  .handleAction(
      addTodoAsync.request as any, 
      (state, action) => [...state, action.payload]
  )
  .handleAction(
      removeTodoAsync.request as any,
      (state, action) => state.filter(i => i.id !== action.payload)
  );

export const isRemoving = createReducer({} as any)
  .handleAction(
    [removeTodoAsync.request] as any, 
    (state, action) => ({[action.payload]: true})
  )
  .handleAction(
    [removeTodoAsync.success, removeTodoAsync.failure] as any,
    (state, action) => ({})
  );

const todosReducer = combineReducers({
  isLoading,
  isRemoving,
  todos,
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;
