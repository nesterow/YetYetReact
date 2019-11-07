import {Todo} from 'AppModels'
import ITodoService from './ITodoService'

const KEY = '__TODOS__'

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

    commit(data: any = {}){
        localStorage.setItem(KEY, JSON.stringify(data))
        this.db = this.serialize()
    }

    find = async ({filter = undefined, sort = 'desc', limit = 10, offset = 0}) => {
        
    }

    create = async (text: string) => {

    }

    update = async (id: any, text: string) => {

    }

    delete = async (id: any) => {
        await emulateDelay()
        console.log(id,123123)
    }
    
}

export default new TodoLocalService()

