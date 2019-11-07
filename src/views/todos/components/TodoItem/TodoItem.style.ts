import {createUseStyles} from 'react-jss'

type CSS = {
    todoItem: any,
    todoAction: any,
    title: any,
    input: any
}

const styles = (theme: string): CSS => {
    return {

        title: {
            width: '100%'
        },
        input: {
            width: '100%',
            '& + [class^="todoAction-"]': {
                display: 'flex'
            }
        },
        todoItem: {
            background: 'white',
            display: 'flex',
            "&:focus": {
                outline: 'none',
            },

            '&:hover > [class^="todoAction-"]': {
                display: 'flex'
            }
        },

        todoAction: {
            display: 'none',
        }
    }
}

export default createUseStyles(styles) as () => CSS