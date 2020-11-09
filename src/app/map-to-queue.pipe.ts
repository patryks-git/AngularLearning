import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Block, hasValue } from './app.component';
import { ClockService } from './clock.service';

@Pipe({
  name: 'mapToQueue'
})
export class MapToQueuePipe implements PipeTransform {
  constructor(private clockService: ClockService) 
  {
    clockService.clock.subscribe(x => this.num = x);
  }
  private num: number;

  transform(value: Block[], countOfBlocksOnView?: number): Observable<Block[]> {
    if (hasValue(countOfBlocksOnView) && value.length >= countOfBlocksOnView){
      return of(value);
    }
    else return null;
  }

}