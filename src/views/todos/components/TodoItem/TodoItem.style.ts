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
            width: '100%',
            fontSize: 26,
            padding: 16,
            margin: 1,
            font: '400 26px system-ui'
        },

        input: {
            maxWidth: 'calc(100% - 18px)',
            minWidth: 'calc(100% - 18px)',
            width: 'calc(100% - 18px)',
            background: 'transparent',
            border: 'none',
            fontSize: 26,
            paddingLeft: 16,
            paddingTop: 16,
            paddingBottom: 16,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            display:'block',
            height: 'auto',
            '&:focus': {
                outline: 'none'
            },
            '& + [class^="todoAction-"]': {
                display: 'block',
                position: 'absolute',
                marginTop: -26,
                transition: 'opacity 1s ease-in-out',
                opacity: 1
            }
        },

        todoItem: {
            background: 'white',
            boxShadow: '0px 2px 1px #bbb',
            display: 'block',
            borderRadius: 6,
            borderWidth: '1px 1px 0px 1px',
            borderStyle: 'solid',
            borderColor: '#eee',
            marginBottom: 16,
            minHeight: 42,
            "&:last-child": {
                borderBottomWidth: '1px'
            },
            "&:focus": {
                outline: 'none',
            },
        },

        todoAction: {
            opacity: 0,
            transition: 'opacity 1s ease-in-out',
            display: 'none',
            width: '100px',
            marginLeft: 6,
            '& > button': {
                width: '50%',
                background: '#eee',
                borderRadius: 6,
                '&:focus':{
                    outline: 'none'
                }
            }
        }
    }
}

export default createUseStyles(styles) as () => CSS