import * as React from 'react'
import {Route} from 'react-router-dom'
import TodoList from '../views/todos'
import woodPattern from './styles/wood-pattern.jpg'


export default () => (
    <Route exact path="/">
        <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                padding: '12px', 
                backgroundImage: `url(${woodPattern})`,
                minHeight: 'calc(100vh - 24px)'
            }}>
            <TodoList />
        </div>
    </Route>
)