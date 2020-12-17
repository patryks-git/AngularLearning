import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ObjectListState } from './models/object-list-state.model';
import { TaskItem } from './models/task-item.model';

@Component({
    selector: 'object-list',
    templateUrl: 'object-list.component.html',
    styleUrls: ['object-list.component.scss']
})

export class ObjectListComponent implements OnInit {
    constructor(private store: Store<ObjectListState>) { }

    taskItems$: Observable<Array<TaskItem>>;

    ngOnInit() {
        this.taskItems$ = this.store.select(store => store.task)
    }
}