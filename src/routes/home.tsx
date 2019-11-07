import * as React from 'react'
import {Route} from 'react-router-dom'
import Todos from '../views/todos'

export default () => (
    <Route exact path="/todo">
        <Todos />
    </Route>
)