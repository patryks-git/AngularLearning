import { Directive, ViewContainerRef ,Input, ComponentFactoryResolver, OnInit, ComponentFactory, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BlockComponent } from '../block/block.component';
import { Block } from '../models/block.model';
import { QueuePipe } from '../pipes/queue.pipe';
import { ClockService } from '../services/clock.service';


@Directive({
  selector: '[appQueue]'
})
export class QueueDirective implements OnInit, OnDestroy {

  @Input() appQueue: Block[] = [];

  constructor(
    private viewContainer: ViewContainerRef, 
    private factoryResolver: ComponentFactoryResolver,
    private queuePipe: QueuePipe,
    private clockService: ClockService
    ) {
      this.factory = this.factoryResolver.resolveComponentFactory(BlockComponent);
    }

  private subscriptions: Subscription[] = [];
  private factory: ComponentFactory<BlockComponent>;
  private blocksOnView: Block[];
  private blockStream: Observable<Block>;

  ngOnInit(){
    this.blocksOnView = this.appQueue.slice(1, this.appQueue.length);
    this.blockStream = this.queuePipe.transform(this.appQueue, { 
        countOfBlocksOnView: this.blocksOnView.length, 
        translation: -6
      });
    this.generate();
    this.start();
  }

  ngOnDestroy() {
    this.viewContainer.clear();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  start() {
    this.subscriptions.push(
      this.blockStream.pipe(delay(this.clockService.intervalInMs * 0.9)).subscribe(b => {
        try {
          this.append(b);
          this.detach(0);
        }
        catch (ex) { console.error(`Error directive: ${ex}`); }
      })
    );
  }
  
  generate() {
    if(this.appQueue.length >= 3) {
      this.blocksOnView.forEach(block => this.append(block));
    }
    else throw Error("Must be 3 blocks at least");
  }

  append(block: Block) {
    let component = this.viewContainer.createComponent(this.factory);
    component.instance.block = block;
  }

  detach(index: number) {
    this.viewContainer.remove(index)
  }
}
