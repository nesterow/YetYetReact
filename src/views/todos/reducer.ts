import { Todo } from 'AppModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { getTodosAsync, addTodoAsync, removeTodoAsync, setFocus } from './actions';


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
      (state, action) => {
        return action.payload
      }
  )

export const removingId = createReducer({} as any)
  .handleAction(
    [removeTodoAsync.request] as any, 
    (state, action) => action.payload
  )
  .handleAction(
    [removeTodoAsync.success, removeTodoAsync.failure] as any,
    (state, action) => null
  );

export const focusedId = createReducer(-1 as number)
    .handleAction(setFocus, (state, action) => action.payload)

const todosReducer = combineReducers({
  isLoading,
  removingId,
  focusedId,
  todos,
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;
