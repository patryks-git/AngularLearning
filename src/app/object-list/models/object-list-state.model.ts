import { TaskItem } from "./task-item.model";

export interface ObjectListState {
    readonly task: Array<TaskItem>;
}