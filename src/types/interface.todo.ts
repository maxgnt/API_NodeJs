export enum Priority {
    "LOW"= "LOW",
    "MEDIUM"= "MEDIUM",
    "HIGH"= "HIGH"
}

export interface Todo {
    id?: string;
    title: string;
    description: string;
    completed: boolean;
    dueDate?: Date;
    priority: Priority;
    creadetAt?: Date;
    updatedAt?: Date;
}
