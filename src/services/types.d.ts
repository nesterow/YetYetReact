declare module 'AppTypes' {
    export type Services = typeof import('./index').default;
    export type TodoResponse = {
        total: number,
        data: Todo[]
    }
}
  