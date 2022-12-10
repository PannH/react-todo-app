import type { TodoPriority } from "./TodoPriority";

export type TodoItemProps = {
   description: string;
   dueDate: Date;
   priority: TodoPriority;
}