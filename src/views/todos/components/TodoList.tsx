import React, {useState} from 'react'
import { connect } from 'react-redux'
import { RootState, TodoResponse } from 'AppTypes'
import qs from 'querystring'

import {push,} from 'connected-react-router'
import {Todo} from 'AppModels'

import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import TodoPagination from './TodoPagination'
import useStyle from './TodoList.style'

import {getTodosAsync, setFocus} from '../actions' 

type Props = {
    fetch: Function
    push: Function,
    focus: Function
} 
& ReturnType<typeof mapState>

const mapState = (state: RootState) => ({
    router: state.router,
    isLoading: state.todos.isLoading,
    todos: state.todos.todos,
})

const mapDispatch = {
    focus: setFocus,
    fetch: getTodosAsync.request,
    push
}

const TodoList = function ({ isLoading, todos = {} as TodoResponse, fetch, router, push, focus}: Props) {

    const search = qs.parse(router.location.search.replace('?', '')) // qs.parse() prefixes '?' to the first param

    const pushState = (queryObject: any) => {
        let query = qs.stringify({
            ...search,
            ...queryObject,
        })
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

    const classes = useStyle({isLoading,})

    const Empty = (
        <small>
            You have nothing to do 🙃
        </small>
    )

    
    return (
        <section onClick={()=>{focus(-1)}} className={classes.todoListContainer + (isLoading ? " loading" : '')}>
            <TodoForm />
            
            <ul className={classes.todoListItems} onClick={(e)=> e.stopPropagation()}>
                {todos.data.map((todo: Todo) => (
                    <li className={classes.todoListItemWrapper} key={todo.id}>
                         <TodoItem value={todo.title} id={todo.id}/>
                    </li>
                ))}
                { todos.total === 0 ? Empty : '' }
            </ul>

            <TodoPagination 
                limit={parseInt(limit as string)} 
                offset={parseInt(offset as string)} 
                total={todos.total}
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