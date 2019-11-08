import {TodoResponse} from 'AppTypes'
export default interface ITodoService {
    type: string,
    find(options: { search?: string }): Promise<TodoResponse>
    create(title: string) : Promise<any>
    update(id: any, text: string): Promise<any>
    delete(id: any): Promise<any>
}