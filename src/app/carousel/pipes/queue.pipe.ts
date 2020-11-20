import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Block } from '../models/block.model';
import { ClockService } from '../services/clock.service';
import { hasValue } from '../../utilities';

@Pipe({
  name: 'queue'
})
export class QueuePipe implements PipeTransform {
  constructor(private clockService: ClockService) {}

  private blockSub: Subject<Block> = new Subject<Block>();

  transform(blocks: Block[], opts?: QueuePipeOpts): Observable<Block> {
    if (hasValue(opts.countOfBlocksOnView) && blocks.length >= opts.countOfBlocksOnView) {
      opts.translation = hasValue(opts.translation) ? opts.translation : 0;
      opts.reverse = hasValue(opts.reverse) ? opts.reverse : false;
      for (let i = 0; i < blocks.length; i++) {
        blocks[blocks.length - i - 1].translate =+ blocks[i].size * (i - 1) + opts.translation;
      }
      this.clockService.clock.subscribe(x => {
          if (opts.reverse === true) {
            blocks.forEach(b => 
              b.translate -= b.size
            )
          blocks[x % blocks.length].translate = opts.translation;
          }
          else if (opts.reverse === false) {
            blocks.forEach(b => 
                b.translate += b.size
              )
            blocks[x % blocks.length].translate = opts.translation;
          }
          else return;
          this.blockSub.next(blocks[x % blocks.length]);
      })
      return this.blockSub.asObservable();
    }
    else return null;
  }
}

export interface QueuePipeOpts {
  /** Number of Block's instances on carousel component view. */
  countOfBlocksOnView: number;
   /** Reverse animation to form right to left. Default: from left to right. */
  reverse?: boolean;
   /** Translation of queue of Blocks to left or right in rem units*/
  translation?: number;
}
