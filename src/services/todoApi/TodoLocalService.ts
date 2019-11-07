import {Todo} from 'AppModels'
import ITodoService from './ITodoService'
import qs from 'querystring'

export const KEY = '__TODOS__'

const emulateDelay = () => new Promise((resolve) => {
    setTimeout(resolve, Math.round(Math.random() * 1000))
})

class TodoLocalService implements ITodoService {

    type: string = 'local'
    db: any = this.serialize()

    constructor() {
        this.db = this.serialize()
    }

    serialize(){
        return JSON.parse(localStorage.getItem(KEY) || '[]')
    }

    commit(){
        localStorage.setItem(KEY, JSON.stringify(this.db))
        this.db = this.serialize()
    }

    find = async ({search = '',}) => {

        const {
            sort = 'desc',
            filter, 
            limit, 
            offset, 
        } = qs.parse(search)

        let result: Todo[] = this.db

        const paginate = () => result.slice(
            parseInt(offset as any), 
            (parseInt(offset as any) + parseInt(limit as any)) || 10
        )

        if (sort === 'desc')
            result = result.sort((a: Todo, b: Todo) => b.id - a.id)
        
        if (sort === 'asc')
            result = result.sort((a: Todo, b: Todo) => a.id - b.id)

        if (filter) {
            const l = (s: any) => s.toLowerCase()
            result = result
                .filter((a: Todo) => l(a.title).includes(l(filter)))
                .sort((a: Todo, b: Todo) => {
                    return l(a.title).indexOf(filter) - l(b.title).indexOf(filter)
                })
            return paginate()
        }
        return paginate()
    }

    create = async (title: string) => {
        this.db.push({
            id: new Date().getTime(),
            title,
        })
        this.commit()
        await emulateDelay()
    }

    update = async ({id, title}: Todo) => {
        const item: Todo = this.db.find((e: Todo) => e.id === id)
        item.title = title
        this.commit()
        await emulateDelay()
    }

    delete = async (id: any) => {
        this.db = this.db.filter((e: Todo) => e.id !== id)
        this.commit()
        await emulateDelay()
    }
    
}

export default new TodoLocalService()

