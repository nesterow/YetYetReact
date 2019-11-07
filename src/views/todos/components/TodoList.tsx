import React, {useState} from 'react'
import { connect } from 'react-redux'
import { RootState } from 'AppTypes'
import qs from 'querystring'

import {push,} from 'connected-react-router'
import {Todo} from 'AppModels'
import {getTodosAsync} from '../actions' 

import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import TodoPagination from './TodoPagination'

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

const TodoList = function ({ isLoading, todos = [] as Todo[], fetch, router, push}: Props) {

    const search = qs.parse(router.location.search.replace('?', '')) // qs.parse() prefixes '?' to the first param
    delete search['?']

    const pushState = (queryObject: any) => {
        let query = qs.stringify({
            ...search,
            ...queryObject,
        })
        console.log({
            ...search,
            ...queryObject,
        },query)
        push(router.location.pathname + '?' + query)
    }

    if (
        search.filter === undefined  || 
        search.limit  === undefined  ||
        search.offset === undefined
    ) pushState({
        filter:'', 
        offset: 0, 
        limit:10, 
    })

    const { limit, offset } = search
    const [cache, setCache] = useState('')

    if (cache !== router.location.search) {
        setCache(router.location.search)
        fetch(router.location)
    } 

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
            <TodoPagination 
                limit={parseInt(limit as string)} 
                offset={parseInt(offset as string)} 
                total={30}
                onChange={({offset}: any) => {
                    pushState({
                        offset,
                    })
                }} 
            />
        </section>
    )
}

export default connect(mapState, mapDispatch)(TodoList)