import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Block } from '../models/block.model';
import { ClockService } from '../services/clock.service';
import { hasValue } from '../../utilities';

@Pipe({
  name: 'queue'
})
export class QueuePipe implements PipeTransform {
  constructor(private clockService: ClockService) {}

  private blockSub: Subject<Block> = new Subject<Block>();

  transform(blocks: Block[], countOfBlocksOnView?: number): Observable<Block> {
    if (hasValue(countOfBlocksOnView) && blocks.length >= countOfBlocksOnView) {
      this.clockService.clock.pipe(delay(10)).subscribe(x => {
        let counter = x % countOfBlocksOnView;
        console.log('counter:',counter);
        
        blocks[x % countOfBlocksOnView].translate += counter;
        // blocks.forEach(b => {
        //   b.translate = counter*6;
        // })

      })
      this.clockService.clock.subscribe(x => {
        console.log('block:',blocks[x % blocks.length].style.background);
        this.blockSub.next(blocks[x % blocks.length]);
      })
      return this.blockSub.asObservable();
    }
    else return null;
  }
}