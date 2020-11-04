import { Pipe, PipeTransform } from '@angular/core';
import { createClockService } from './clock.service';

@Pipe({
  name: 'mapToQueue'
})
export class MapToQueuePipe implements PipeTransform {
  constructor() {
    this.clockService.setInitValue(0);
    this.clockService.start(1000);
  }

  clockService = createClockService();

  transform(value: number, args?: any): any {
    this.clockService.clock.subscribe(x => {
      console.log("from pipe:", x);
      return value + x;
    });
  }

}