import { TaskAction, TaskActionTypes } from "../actions/task.action";
import { TaskItem } from "../models/task-item.model";

const initialState: Array<TaskItem> = [
    {
        id: "ble",
        name: "ble",
        priority: 0
    }
];

export function TaskReducer(state: Array<TaskItem> = initialState, action: TaskAction) {
    switch(action.type){
        case TaskActionTypes.DELETE_ITEM:
            return state.filter(i => i.id !== action.payload);
        case TaskActionTypes.ADD_ITEM:
            return [...state, action.payload]
        default:
            return state;
    }
}