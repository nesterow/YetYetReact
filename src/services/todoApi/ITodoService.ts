export default interface ITodoService {
    type: string,
    find(options: { search?: string }): Promise<any>
    create(title: string) : Promise<any>
    update(id: any, text: string): Promise<any>
    delete(id: any): Promise<any>
}