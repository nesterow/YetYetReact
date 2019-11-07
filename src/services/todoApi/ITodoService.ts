export default interface ITodoService {
    type: string,
    find(options: { filter?: any, sort?: any, limit?: any, offset?: any }): Promise<void>
    create(text: string) : Promise<void>
    update(id: any, text: string): Promise<void>
    delete(id: any): Promise<void>
}