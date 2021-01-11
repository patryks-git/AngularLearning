import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap, mergeMap } from "rxjs/operators";
import { AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction, LoadTaskAction, LoadTaskFailureAction, LoadTaskSuccessAction, TaskActionTypes } from "../actions/task.action";
import { TaskService } from "../services/task.service";

@Injectable()
export class TaskEffects {

    @Effect() loadTasks$ = this.actions$.pipe(
        ofType<LoadTaskAction>(TaskActionTypes.LOAD_TASK),
        mergeMap(
            action => this.service.getTaskItems().pipe(
                map(data => new LoadTaskSuccessAction(data)),
                catchError(err => of(new LoadTaskFailureAction(err)))
            )
        )
    );

    @Effect() addItem$ = this.actions$.pipe(
        ofType<AddItemAction>(TaskActionTypes.ADD_ITEM),
        mergeMap(
            action => this.service.addTaskItems(action.payload).pipe(
                map(data => new AddItemSuccessAction(data)),
                catchError(err => of(new AddItemFailureAction(err)))
            )
        )
    );

    @Effect() deleteItem$ = this.actions$.pipe(
        ofType<DeleteItemAction>(TaskActionTypes.DELETE_ITEM),
        mergeMap(
            action => this.service.deleteTaskItems(action.payload).pipe(
                map(data => new DeleteItemSuccessAction(data)),
                catchError(err => of(new DeleteItemFailureAction(err)))
            )
        )
    );

    constructor(private actions$: Actions, private service: TaskService) { }

}