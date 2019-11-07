import { combineEpics, Epic } from 'redux-observable';
import * as todosEpics from '../views/todos/epics'

export default combineEpics(...Object.values(todosEpics));