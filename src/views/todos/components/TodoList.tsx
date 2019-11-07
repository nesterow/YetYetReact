import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'AppTypes'

import {Todo} from 'AppModels'
import TodoItem from './TodoItem'

//import TodoActions from '../actions' 

const mapState = (state: RootState) => ({
    isLoading: state.todos.isLoading,
    todos: state.todos.todos
})

type Props = ReturnType<typeof mapState>

const TodoList = ({ isLoading, todos = [] as Todo[], }: Props) => {
    
    return (
        <ul className='todolist'>
            <li className='todolist__item'>
                <TodoItem value='0' id='0'/>
            </li>
        </ul>
    )
}

export default connect(mapState)(TodoList)