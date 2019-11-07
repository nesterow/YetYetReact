
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import useStyles from './TodoItem.style'
import {removeTodoAsync, saveTodoAcync} from '../../actions' 
import { RootState } from 'AppTypes'
import {Todo} from 'AppModels'

type Props = {
    id: any,
    value: string,
    save: Function,
    remove: Function
} 
& ReturnType<typeof mapState>

const mapState = (state: RootState) => ({
    isRemoving: state.todos.isRemoving,
    todos: state.todos.todos
})

const mapDispatch = {
    save: saveTodoAcync.request,
    remove: removeTodoAsync.request
}


const TodoItem = ({ value, id, save, remove, isRemoving }: Props) => {

    let inputRef: HTMLInputElement|null = null

    useEffect(() => {
        if (inputRef) inputRef.focus()
    })
    console.log(1, isRemoving[id])
    const [isEditing, setEditing] = useState(false)


    const cancelEdit = () => setEditing(false)
    const startEdit = () => setEditing(true)

    const saveTodo = () => {
        if (inputRef && inputRef.value) {
            const updatedTodo: Todo = {
                id, 
                title: inputRef.value
            }
            save(updatedTodo)
        }
    }

    const deleteTodo = (ev: React.MouseEvent) => {
        ev.stopPropagation()
        remove(id)
    }


    const classes = useStyles()

    const Input = (
        <input ref={(e) => {inputRef = e}} defaultValue={value} onBlur={cancelEdit} />
    )
    const Title = (
        <span>{value}</span>
    )
    const Delete = (
        <button onClick={deleteTodo}>Delete</button>
    )
    const Save = (
        <>
        <button onClick={saveTodo}>Save</button>
        {Delete}
        </>
    )

    return (
        <div className={classes.todoItem} onClick={startEdit} onFocus={startEdit} onBlur={cancelEdit} tabIndex={0}>
            {isEditing ? Input : Title}
            <div className={classes.todoAction}>
                {isEditing ? Save : Delete}
            </div>
        </div>
    )
}

export default connect(mapState, mapDispatch)(TodoItem)