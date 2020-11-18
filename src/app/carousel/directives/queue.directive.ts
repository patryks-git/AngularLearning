import { Directive, ViewContainerRef, TemplateRef ,Input, ComponentFactoryResolver, Renderer2, OnInit, AfterViewInit, ComponentFactory, OnDestroy } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { Block } from '../models/block.model';
import { QueuePipe } from '../pipes/queue.pipe';


@Directive({
  selector: '[appQueue]'
})
export class QueueDirective implements OnInit, OnDestroy {

  @Input() appQueue: Block[] = [];

  constructor(
    private viewContainer: ViewContainerRef, 
    private factoryResolver: ComponentFactoryResolver,
    private template: TemplateRef<any>,
    private renderer: Renderer2, 
    private queuePipe: QueuePipe
    ) {
      this.factory = this.factoryResolver.resolveComponentFactory(BlockComponent);
    }

  private factory: ComponentFactory<BlockComponent>;
  private blocksOnView: Block[];

  ngOnInit(){
    this.blocksOnView = this.appQueue.slice(1, this.appQueue.length - 1);
    this.generate();
    this.start();
  }

  ngOnDestroy() {
    this.destroy();
  }

  start() {
    this.queuePipe.transform(this.appQueue, this.blocksOnView.length)
    .subscribe(b => {
      try{
        this.append(b);
        this.detach(0);
      } catch(ex) { console.error(`Error directive: ${ex}`); }
    })
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

  destroy() {
    this.viewContainer.clear();
  }
}