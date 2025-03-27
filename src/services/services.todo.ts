import { TodoRepository } from "repository/mongoose.repository";
import { CreateTodoDto, UpdateTodoDto } from "types/dto.todo";
import { ITodo } from "types/interface.todo";

export class TodoService {
    private repository: TodoRepository;


constructor() {
    this.repository = new TodoRepository();
}

async createTodo (data: CreateTodoDto): Promise<ITodo> {
    return this.repository.create(data);
}

async getAllTodos(): Promise<ITodo[]> {
    return this.repository.findAll();
}

async getTodoById(id: string): Promise<ITodo | null> {
    return this.repository.findById(id);
}

async updateTodo(id: string, data: UpdateTodoDto): Promise<ITodo | null> {
    return this.repository.update(id, data);
}

async deleteTodo(id: string): Promise<boolean> {
    return this.repository.delete(id);
}
}