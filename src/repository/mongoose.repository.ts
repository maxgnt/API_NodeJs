import { TodoModel } from '../models/model.todo';
import { CreateTodoDto, UpdateTodoDto } from '../types/dto.todo';
import { ITodo } from '../types/interface.todo';
import { Types } from 'mongoose';

export class TodoRepository {
  async create(data: CreateTodoDto): Promise<ITodo> {
    const todo = await TodoModel.create(data);
    return todo.toObject();
  }

  async findAll(): Promise<ITodo[]> {
    const todos = await TodoModel.find();
    return todos.map(t => t.toObject());
  }

  async findById(id: string): Promise<ITodo | null> {
    if (!Types.ObjectId.isValid(id)) return null;
    const todo = await TodoModel.findById(id);
    return todo ? todo.toObject() : null;
  }

  async update(id: string, data: UpdateTodoDto): Promise<ITodo | null> {
    if (!Types.ObjectId.isValid(id)) return null;
    const updated = await TodoModel.findByIdAndUpdate(id, data, { new: true });
    return updated ? updated.toObject() : null;
  }

  async delete(id: string): Promise<boolean> {
    if (!Types.ObjectId.isValid(id)) return false;
    const deleted = await TodoModel.findByIdAndDelete(id);
    return !!deleted;
  }
}
