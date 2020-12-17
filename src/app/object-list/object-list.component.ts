import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AddItemAction, DeleteItemAction } from './actions/task.action';
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
    newTaskItem: TaskItem = {id: '', name: '', priority: 0};
    get priorities() 
    { 
        return Object.keys(TaskPriorityEnum)
            .filter(value => isNaN(Number(value)) === false)
            .map(key => TaskPriorityEnum[key]);
    }

    ngOnInit() {
        this.taskItems$ = this.store.select(store => store.task)
    }

    addItem() {
        this.newTaskItem.id = uuid();
        this.store.dispatch(new AddItemAction(this.newTaskItem));
        this.newTaskItem = {id: '', name: '', priority: 0};
    }

    deleteItem(id: string) {
        this.store.dispatch(new DeleteItemAction(id));
    }
}