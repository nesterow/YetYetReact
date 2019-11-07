import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import todosReducer from '../views/todos/reducer'

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  todos: todosReducer
});

export default rootReducer;