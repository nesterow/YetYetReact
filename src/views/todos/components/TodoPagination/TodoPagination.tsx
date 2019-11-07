import React, {useContext} from 'react'
import { on } from 'cluster'

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
            offset: Math.min(offset + limit, Math.max(total - limit, 0))
        })
    }

    return (
        <div>
            <span>
                <button onClick={goBack}>Prev</button>
                <button onClick={goForward}>Next</button>
            </span>
            <span>
                {current + 1} / {size}
            </span>
        </div>
    )
}