import { Action } from "@ngrx/store";
import { TaskItem } from "../models/task-item.model";


export enum TaskActionTypes {
    ADD_ITEM = '[TASK] Add item',
    DELETE_ITEM = '[TASK] Delete item'
}

export class AddItemAction implements Action {
    readonly type: string = TaskActionTypes.ADD_ITEM;
    constructor(public payload: TaskItem) { }
}

export class DeleteItemAction implements Action {
    readonly type: string = TaskActionTypes.DELETE_ITEM;
    constructor(public payload: string) { }
}

export type TaskAction = AddItemAction | DeleteItemAction;