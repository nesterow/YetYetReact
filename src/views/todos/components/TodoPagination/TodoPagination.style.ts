import {createUseStyles} from 'react-jss'

type CSS = {
    paginationContainer: any,
    paginationButtons: any
}

const styles = (): CSS  => ({
    paginationContainer: {
        marginTop: 24,
        '& > *': {
            marginRight: 12
        }
    },
    paginationButtons: {

        '& > button': {
            background: '#eee',
            borderRadius: 0,
            '&:focus': {
                outline: 'none'
            }
        },

        '& > button:first-child': {

        },

        '& > button:last-child': {

        },

    }
})

export default createUseStyles(styles) as () => CSS