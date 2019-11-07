// Factory
import ITodoService from './ITodoService'
import TodoLocalService from './TodoLocalService'
import TodoFirebaseService from './TodoFirebaseService'

export default (type: string): ITodoService => [
    TodoLocalService,
    TodoFirebaseService
]
.find((impl: ITodoService) => impl.type === type) || TodoLocalService