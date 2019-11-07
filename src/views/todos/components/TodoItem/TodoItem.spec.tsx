const NAME = 'TodoItem'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from '../../reducer'
import TodoItem from './TodoItem'

function renderWithRedux(
  jsx: JSX.Element,
  options: { dom?: HTMLElement, initialState?: object, } = {}
) {
  const store = createStore(reducer, options.initialState);
  ReactDOM.render(<Provider store={store}>{jsx}</Provider>, options.dom)
  return store
}

it(`${NAME}: renders without crashing`, () => {
    const dom = document.createElement('div');
    renderWithRedux(<TodoItem value='todo' id='random'/>, {dom,})
    ReactDOM.unmountComponentAtNode(dom);
});