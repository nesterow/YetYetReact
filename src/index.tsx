import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Home from './routes/home'
import store from './store'

const App = () => (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
);

render(<App />, document.getElementById('root'));