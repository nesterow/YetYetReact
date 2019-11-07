
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import useStyles from './TodoItem.style'
import {removeTodoAsync, saveTodoAcync, setFocus} from '../../actions' 
import { RootState } from 'AppTypes'
import {Todo} from 'AppModels'

enum Keys {
    Enter = 'Enter'
}

type Props = {
    id: any,
    value: string,
    save: Function,
    remove: Function,
    focus: Function
} 
& ReturnType<typeof mapState>

const mapState = (state: RootState) => ({
    focused: state.todos.focusedId,
    removing: state.todos.removingId,
    //saving: state.todos.savingId
})

const mapDispatch = {
    save: saveTodoAcync.request,
    remove: removeTodoAsync.request,
    focus: setFocus
}


const TodoItem = ({ value, id, save, remove, focus, removing, focused }: Props) => {

    const isRemoving = removing === id
    const isSaving = focused === id
    const isEditing = focused === id 

    let inputRef: HTMLInputElement|null = null
    useEffect(() => {
        if (inputRef) inputRef.focus()
    })

    const [inputValue, setInput] = useState('')

    const saveTodo = () => {
        if (inputRef && inputRef.value) {
            const updatedTodo: Todo = {
                id, 
                title: inputValue || value
            }
            save(updatedTodo)
            setInput('')
        }
    }

    const deleteTodo = (ev: React.MouseEvent) => {
        remove(id)
    }

    const classes = useStyles()
    const startEdit = (ev: any) => {
        if (ev.target.tagName === 'BUTTON')
            return
        if(isRemoving || isSaving)
            return
        focus(id)
    }

    const handleKeyboard = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        switch(ev.key) {
            case Keys.Enter:
                saveTodo()
                break
            default:
                setInput((ev.target as any).value)
        }
    }

    const stopPropagation = (e: any) => e.stopPropagation()


    const Input = (
        <input ref={(e) => {inputRef = e}} 
            onKeyUp={handleKeyboard} 
            defaultValue={value}
            className={classes.input}
        />
    )
    const Title = (
        <span className={classes.title} onMouseDown={stopPropagation}>{value}</span>
    )
    const Delete = (
        <button onClick={deleteTodo} onMouseDown={stopPropagation}>
            Delete
        </button>
    )
    const Save = (
        <>
        <button onClick={saveTodo}>Save</button>
        {Delete}
        </>
    )
    return (
        <div className={classes.todoItem} onClick={startEdit} onFocus={startEdit} tabIndex={0}>
            {isEditing ? Input : Title}
            <div className={classes.todoAction}>
                {isEditing ? Save : Delete}
            </div>
        </div>
    )
}

export default connect(mapState, mapDispatch)(TodoItem)