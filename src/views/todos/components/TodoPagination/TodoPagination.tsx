import React, {useContext} from 'react'
import useStyles from './TodoPagination.style'

type Props = {
    total: number,
    limit: number,
    offset: number,
    spread?: number,
    onChange?: Function
}

export default ({total, limit, offset, spread = 5, onChange = new Function, }: Props) => {

    const size = Math.floor(total / limit) + (total % limit && 1 || 0)
    const current = Math.floor(offset / limit)

    const goBack = () => {
        onChange({
            offset: Math.max(offset - limit, 0)
        })
    }

    const goForward = () => {
        onChange({
            offset: Math.min(offset + limit, total - total % limit)
        })
    }

    const classes = useStyles()

    return (
        <div className={classes.paginationContainer}>
            <span>
                Pages:
            </span>
            <span className={classes.paginationButtons}>
                <button onClick={goBack}>Prev</button>
                <button onClick={goForward}>Next</button>
            </span>
            <span>
                {current + 1} / {size}
            </span>
        </div>
    )
}