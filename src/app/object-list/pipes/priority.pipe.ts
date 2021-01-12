import { Pipe, PipeTransform } from '@angular/core';
import { TaskPriorityEnum } from '../models/task-item.model';

@Pipe({
    name: 'priority'
})

export class PriorityPipe implements PipeTransform {
    transform(value: number, ...args: any[]): string {
        return TaskPriorityEnum.find(e => e.id == value).name.charAt(0);
    }
}