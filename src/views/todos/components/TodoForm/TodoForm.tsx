import React, {useState} from 'react'
import { connect } from 'react-redux'
import { RootState } from 'AppTypes'

import {Todo} from 'AppModels'
import {addTodoAsync} from '../../actions' 
import useStyles from './TodoForm.style'

type Props = {
    placeholder?: string,
    onCreate: Function
} 
& ReturnType<typeof mapState>

const mapState = (state: RootState) => ({
    isLoading: state.todos.isLoading,
    todos: state.todos.todos
})

const mapDispatch = {
    onCreate: addTodoAsync.request
}


const TodoForm = ({placeholder = 'Write whatever you want to do...', onCreate}: Props) => {
    let inputRef: HTMLTextAreaElement 
    const [value, setValue] = useState('')

    const addTodo = () => {
        if (value) onCreate(value)
        reset()
    }

    const reset = () => {
        setValue('')
        inputRef.innerText = ''
        inputRef.value = ''
    }

    const classes = useStyles()


    return (
        <section className={classes.formContainer}>
            <textarea 
                className={classes.textArea}
                ref={(r: HTMLTextAreaElement) => inputRef = r}
                onKeyUp={(e) => setValue((e.target as any).value)}
                defaultValue={value}
                placeholder={placeholder}>
            </textarea>
            <div className={classes.actions}>
                <button onClick={addTodo}>Save</button>
                <button onClick={reset}>Cancel</button>
            </div>
        </section>
    )
}

export default connect(mapState, mapDispatch)(TodoForm)