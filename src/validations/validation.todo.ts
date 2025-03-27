import { z } from 'zod';

const createTodoSchema = z.object({
    title: z.string().min(1 , {message: 'Le titre est obligatoire'}),
    description: z.string().optional(),
    dueDate: z.string().datetime().optional(),
    priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).default('LOW'),
});

export const updateTodoSchema = createTodoSchema.partial();