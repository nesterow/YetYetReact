import ITodoService from './ITodoService'


class TodoFirebaseService implements ITodoService {

    type: string = 'firebase'

    constructor() {

    }

    find = async ({filter = undefined, sort = 'desc', limit = 10, offset = 0}) => {
        
    }

    create = async (text: string) => {

    }

    update = async (id: any, text: string) => {

    }

    delete = async (id: any) => {

    }
    
}

export default new TodoFirebaseService()

