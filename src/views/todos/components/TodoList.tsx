import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'AppTypes'
import qs from 'querystring'

import {push} from 'connected-react-router'
import {Todo} from 'AppModels'
import {getTodosAsync} from '../actions' 
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'


type Props = {
    fetch: Function
    push: Function
} 
& ReturnType<typeof mapState>

const mapState = (state: RootState) => ({
    router: state.router,
    isLoading: state.todos.isLoading,
    todos: state.todos.todos,
})

const mapDispatch = {
    fetch: getTodosAsync.request,
    push
}



const TodoList = ({ isLoading, todos = [] as Todo[], fetch, router, push}: Props) => {
    const search = qs.parse(router.location.search)

    if (
        search.filter === undefined  || 
        search.limit  === undefined  ||
        search.offset === undefined
    ) push(router.location.pathname+ "?&" +qs.stringify({
        filter:'', 
        offset: 0, 
        limit:0, 
        ...search
    }))

    if (!todos.length)
        fetch(router.location)
        
    return (
        <section>
            <TodoForm />
            <ul className='todolist'>
                {todos.map((todo: Todo) => (
                    <li className='todolist__item' key={todo.id}>
                         <TodoItem value={todo.title} id={todo.id}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default connect(mapState, mapDispatch)(TodoList)