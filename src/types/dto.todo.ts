import { Priority } from "./interface.todo";

export interface CreateTodoDto {
    title: string;
    description?: string;
    priority: Priority;
}

export interface UpdateTodoDto {
    title?: string;
    description?: string;
    priority?: Priority;
    completed?: boolean;
    dueDate?: Date;

}