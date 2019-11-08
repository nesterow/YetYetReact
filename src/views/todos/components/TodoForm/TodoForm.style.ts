import {createUseStyles} from 'react-jss'

type CSS = {
    formContainer: any,
    textArea: any,
    actions: any,
}

const activeActions = {
    display: 'block',
    position: 'absolute',
    marginTop: -26,
    marginLeft: 4
}

const styles = (): CSS  => ({
    formContainer: {
        width: '100%',
        marginBottom: 24,
    },
    textArea: {
        resize: 'none',
        minWidth: "100%",
        maxWidth: "100%",
        width: '100%',
        border: '0px dotted #ccc',
        minHeight: 50,
        height: 'auto',
        overflow: 'auto',
        borderRadius: 6,
        padding: 16,
        fontSize: 26,
        paddingBottom: 26,
        boxSizing: 'border-box',
        boxShadow: '0px 2px 1px #bbb',
        opacity: '.95',
        '&:focus': {
            outline: 'none'
        },
        '&:focus ~ [class^="actions-"]': activeActions
    },
    actions: {
        display: 'none',
        '&:hover': activeActions,
        '&:focus': {
            outline: 'none'
        }
    }
})

export default createUseStyles(styles) as () => CSS