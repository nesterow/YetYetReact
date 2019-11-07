import {createUseStyles} from 'react-jss'

type CSS = {
    todoItem: any,
    todoAction: any,
}

const styles = (theme: string): CSS => {
    return {

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