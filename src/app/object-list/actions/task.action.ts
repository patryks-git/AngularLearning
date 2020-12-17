import { Action } from "@ngrx/store";
import { TaskItem } from "../models/task-item.model";


export enum TaskActionTypes {
    ADD_ITEM = '[TASK] Add item',
    ADD_ITEM_SUCCESS = '[TASK] Add item',
    ADD_ITEM_FAILURE = '[TASK] Add item'
}

export class AddItemAction implements Action {
    readonly type: string = TaskActionTypes.ADD_ITEM;

    constructor(public payload: TaskItem) { }
}

export type TaskAction = AddItemAction;