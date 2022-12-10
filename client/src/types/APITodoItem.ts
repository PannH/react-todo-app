import { TodoPriority } from "./TodoPriority";

export type APITodoItem = {
   id: string;
   description: string;
   dueDate: string;
   priority: TodoPriority;
}