import { Todo } from 'AppModels'
import { createAsyncAction, createAction } from 'typesafe-actions'

export const setFocus = createAction('SET_TODO_FOCUS')<number>()

export const addTodoAsync = createAsyncAction(
    'ADD_TODOS_REQUEST',
    'ADD_TODOS_SUCCESS',
    'ADD_TODOS_FAILURE',
)<undefined, Todo[], string>()

export const removeTodoAsync = createAsyncAction(
    'REMOVE_TODOS_REQUEST',
    'REMOVE_TODOS_SUCCESS',
    'REMOVE_TODOS_FAILURE'
)<any, boolean, string>()

export const getTodosAsync = createAsyncAction(
    'LOAD_TODOS_REQUEST',
    'LOAD_TODOS_SUCCESS',
    'LOAD_TODOS_FAILURE'
)<undefined, Todo[], string>()

export const saveTodoAcync = createAsyncAction(
    'SAVE_TODO_REQUEST',
    'SAVE_TODO_SUCCESS',
    'SAVE_TODO_FAILURE'
)<Todo, Todo, Error>()

export const saveTodosAcync = createAsyncAction(
    'SAVE_TODOS_REQUEST',
    'SAVE_TODOS_SUCCESS',
    'SAVE_TODOS_FAILURE'
)<undefined, undefined, string>()