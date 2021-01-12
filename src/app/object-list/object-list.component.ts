import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AddItemAction, DeleteItemAction, LoadTaskAction } from './actions/task.action';
import { ObjectListState } from './models/object-list-state.model';
import { TaskItem, TaskPriorityEnum } from './models/task-item.model';

@Component({
    selector: 'object-list',
    templateUrl: 'object-list.component.html',
    styleUrls: ['object-list.component.scss']
})

export class ObjectListComponent implements OnInit {
    
    constructor(private store: Store<ObjectListState>) { }

    taskItems$: Observable<Array<TaskItem>>;
    loading$: Observable<boolean>;
    error$: Observable<Error>;
    
    newTaskItem: TaskItem = {id: '', name: '', priority: 0};
    priorities = TaskPriorityEnum;
 

    ngOnInit() {
        this.taskItems$ = this.store.select(store => store.task.list);
        this.loading$ = this.store.select(store => store.task.loading);
        this.error$ = this.store.select(store => store.task.error);

        this.store.dispatch(new LoadTaskAction());
    }

    addItem() {
        if (this.newTaskItem.name === '') return; 
        this.newTaskItem.id = uuid();
        this.store.dispatch(new AddItemAction(this.newTaskItem));
        this.newTaskItem = {id: '', name: '', priority: 0};
    }

    deleteItem(id: string) {
        this.store.dispatch(new DeleteItemAction(id));
    }
}