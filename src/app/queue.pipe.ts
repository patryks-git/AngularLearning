import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { hasValue } from './app.component';
import { Block } from './block.model';
import { ClockService } from './clock.service';

@Pipe({
  name: 'queue'
})
export class QueuePipe implements PipeTransform {
  constructor(private clockService: ClockService) {}

  private blockSub: Subject<Block> = new Subject<Block>();

  transform(blocks: Block[], countOfBlocksOnView?: number): Observable<Block> {
    if (hasValue(countOfBlocksOnView) && blocks.length >= countOfBlocksOnView) {
      this.clockService.clock.pipe(delay(10)).subscribe(x => {
        let counter = x % 6 - 2;
        blocks.forEach(b => {
          b.translate = counter*6;
        })
      })
      this.clockService.clock.subscribe(x => {
        this.blockSub.next(blocks[x % blocks.length]);
      })
      return this.blockSub.asObservable();
    }
    else return null;
  }
}