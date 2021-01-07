import { Action } from "@ngrx/store";
import { TaskItem } from "../models/task-item.model";


export enum TaskActionTypes {
    LOAD_TASK = '[TASK] Load task',
    LOAD_TASK_SUCCESS = '[TASK] Load task success',
    LOAD_TASK_FAILURE = '[TASK] Load task failure',
    ADD_ITEM = '[TASK] Add item',
    ADD_ITEM_SUCCESS = '[TASK] Add item success',
    ADD_ITEM_FAILURE = '[TASK] Add item failure',
    DELETE_ITEM = '[TASK] Delete item',
    DELETE_ITEM_SUCCESS = '[TASK] Delete item success',
    DELETE_ITEM_FAILURE = '[TASK] Delete item failure'
}

//#region LoadTask
export class LoadTaskAction implements Action {
    readonly type: string = TaskActionTypes.LOAD_TASK;
    payload: any;
}

export class LoadTaskSuccessAction implements Action {
    readonly type: string = TaskActionTypes.LOAD_TASK_SUCCESS;
    constructor(public payload: TaskItem[]) { }
}

export class LoadTaskFailureAction implements Action {
    readonly type: string = TaskActionTypes.LOAD_TASK_FAILURE;
    constructor(public payload: Error) { }
}
//#endregion

//#region AddItem
export class AddItemAction implements Action {
    readonly type: string = TaskActionTypes.ADD_ITEM;
    constructor(public payload: TaskItem) { }
}

export class AddItemSuccessAction implements Action {
    readonly type: string = TaskActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: TaskItem) { }
}

export class AddItemFailureAction implements Action {
    readonly type: string = TaskActionTypes.ADD_ITEM_FAILURE;
    constructor(public payload: Error) { }
}
//#endregion

//#region DeleteItem
export class DeleteItemAction implements Action {
    readonly type: string = TaskActionTypes.DELETE_ITEM;
    constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
    readonly type: string = TaskActionTypes.DELETE_ITEM_SUCCESS;
    constructor(public payload: string) { }
}

export class DeleteItemFailureAction implements Action {
    readonly type: string = TaskActionTypes.DELETE_ITEM_FAILURE;
    constructor(public payload: Error) { }
}
//#endregion

export type TaskAction = 
LoadTaskAction | LoadTaskSuccessAction | LoadTaskFailureAction |
AddItemAction | AddItemSuccessAction | AddItemFailureAction |
DeleteItemAction | DeleteItemSuccessAction | DeleteItemFailureAction;