import ITodoService from './ITodoService'


class TodoFirebaseService implements ITodoService {

    type: string = 'firebase'

    constructor() {

    }

    find = async ({search = ''}): Promise<any> => {
        
    }

    create = async (text: string) => {

    }

    update = async (id: any, text: string) => {

    }

    delete = async (id: any) => {

    }
    
}

export default new TodoFirebaseService()

