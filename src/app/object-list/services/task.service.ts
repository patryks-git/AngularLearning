import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TaskItem } from '../models/task-item.model';
import { delay, map, mapTo } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TaskService {
    private url: string = 'http://localhost:3000/task';

    constructor(private http: HttpClient) { }
    
    getTaskItems() : Observable<TaskItem[]> {
        return this.http.get<TaskItem[]>(this.url).pipe(delay(500));
    }

    getTaskItem(id: string) : Observable<TaskItem> {
        return this.http.get<TaskItem>(`${this.url}/${id}`).pipe(delay(500));
    }

    addTaskItems(item: TaskItem) {
        return this.http.post<TaskItem>(this.url, item).pipe(delay(500));
    }

    deleteTaskItems(id: string) {
        return this.http.delete(`${this.url}/${id}`).pipe(delay(500), map(() => id));
    }
}