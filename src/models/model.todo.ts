
import mongoose, { Schema, Document } from 'mongoose';
import { Priority } from "types/interface.todo";

export interface TodoDocument extends Document {
    title: string;
    description?: string;
    completed: boolean;
    dueDate?: Date;
    priority: Priority;
    creadetAt: Date;
    updatedAt: Date;
}

const TodoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date },
    priority: { type: String, enum: Object.values(Priority), default: Priority.LOW },
},
    { timestamps: true }
);

export const TodoModel = mongoose.model<TodoDocument>('Todo', TodoSchema);