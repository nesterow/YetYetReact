import {createUseStyles} from 'react-jss'

type Props = {
    isLoading: boolean
}

type CSS = {
    todoListContainer: any,
    todoListItems: any,
    todoListItemWrapper: any
}

const styles = ({isLoading,}: Props): CSS  => ({
    todoListContainer: {
        width: '100%',
        maxWidth: 600,
        background: "linear-gradient(159deg, #e1e4e7 0%, rgba(244,244,244,1) 50%, #e1e4e7 100%)",
        padding: 12,
        borderRadius: 6,
        boxShadow: '1px 1px 9px #eee',
        animation: isLoading ? "loadingBg 2s ease infinite" : "none",
        '& > *': {
            opacity: isLoading ? .75 : undefined
        }
    },
    todoListItems: {
        padding: 0,
        margin: 0,
    },
    todoListItemWrapper: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    }
})

export default createUseStyles(styles) as ({}: Props) => CSS