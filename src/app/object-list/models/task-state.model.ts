import { TaskItem } from "./task-item.model";

export interface TaskState {
    list: TaskItem[];
    loading: boolean;
    error: Error;
}