import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import {Services, RootAction, RootState} from 'AppTypes'
import { getTodosAsync, addTodoAsync, removeTodoAsync } from './actions';



// export const getTodosEpic: Epic = (action$, state$, { services }) => {
//     console.log(2)
//     return action$.pipe()
// }

export const removeTodosEpic: Epic<RootAction, RootAction, RootState, Services> = (action$: any, state$: any, { todoApi }) => {
    console.log('olol', todoApi('local'))
    return action$.pipe(
        filter(isActionOf(removeTodoAsync.request)),
        switchMap(({payload}) => 
            from(todoApi('local').delete(payload)).pipe(
                map(removeTodoAsync.success as any),
                catchError(removeTodoAsync.failure as any)
            )
        )
    )
}