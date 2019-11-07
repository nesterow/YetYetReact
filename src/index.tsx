import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import {history} from './store'
import Home from './routes/home'
import store from './store'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Home />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

render(<App />, document.getElementById('root'));