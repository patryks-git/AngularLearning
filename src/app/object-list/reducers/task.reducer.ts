import { TaskAction, TaskActionTypes } from "../actions/task.action";
import { TaskState } from "../models/task-state.model";

const initialState: TaskState = 
{
    list: [],
    loading: false,
    error: undefined
};

export function TaskReducer(state: TaskState = initialState, action: TaskAction) {
    let list = [];
    switch(action.type) {
        //#region LoadItem
        case TaskActionTypes.LOAD_TASK:
            return {
                ...state,
                loading: true
            }
        case TaskActionTypes.LOAD_TASK_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case TaskActionTypes.LOAD_TASK_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        //#endregion

        //#region AddItem
        case TaskActionTypes.ADD_ITEM:
            return {
                ...state,
                loading: true
            }
        case TaskActionTypes.ADD_ITEM_SUCCESS:
            list = state.list.slice();
            list.push(action.payload);
            return {
                ...state, 
                list: list,
                loading: false
            }
        case TaskActionTypes.ADD_ITEM_FAILURE:
            return {
                ...state, 
                error: action.payload, 
                loading: false
            }
        //#endregion

        //#region DeleteItem
        case TaskActionTypes.DELETE_ITEM:
            return { 
                ...state, 
                loading: true
            };

        case TaskActionTypes.DELETE_ITEM_SUCCESS:
            return { 
                ...state, 
                list: state.list.filter(i => i.id !== action.payload), 
                loading: false
            };
        case TaskActionTypes.DELETE_ITEM_FAILURE:
            return { 
                ...state, 
                error: action.payload,
                loading: false
            };  
        //#endregion

        default:
            return state;
    }
}