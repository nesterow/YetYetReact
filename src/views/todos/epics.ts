import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { filter, switchMap, map, catchError, } from 'rxjs/operators'
import {iif} from 'rxjs/index'
import { isActionOf } from 'typesafe-actions'

import {Services, RootAction, RootState} from 'AppTypes'
import { getTodosAsync, addTodoAsync, removeTodoAsync, saveTodoAcync } from './actions';


const epicForCRUD = (action: any, method: string ): Epic<RootAction, RootAction, RootState, Services> =>
    (action$: any, state$: any, { todoApi }) => 
        action$.pipe(
            filter(isActionOf(action.request)),
            switchMap(({payload}) => 
                from((todoApi('local') as any)[method](payload)).pipe(
                    map(action.success as any),
                    catchError(action.failure as any)
                )
            ),
            switchMap(() =>  iif(() => method !== 'find',
                from(todoApi('local').find(state$.value.router.location)).pipe(
                    map(getTodosAsync.success as any),
                    catchError(getTodosAsync.failure as any)
                )
            ))
        )

const epicForFetch = (action: any, method: string ): Epic<RootAction, RootAction, RootState, Services> =>
        (action$: any, state$: any, { todoApi }) => 
            action$.pipe(
                filter(isActionOf(action.request)),
                switchMap(({payload}) => 
                    from((todoApi('local') as any)[method](state$.value.router.location)).pipe(
                        map(action.success as any),
                        catchError(action.failure as any)
                    )
                )
            )

export const fetchTodosEpic = epicForFetch(getTodosAsync, 'find')
export const createTodoEpic = epicForCRUD(addTodoAsync, 'create')
export const updateTodoEpic = epicForCRUD(saveTodoAcync, 'update')
export const removeTodosEpic = epicForCRUD(removeTodoAsync, 'delete')