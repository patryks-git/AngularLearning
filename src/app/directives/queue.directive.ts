import { Directive, ViewContainerRef, TemplateRef ,Input, ComponentFactoryResolver, Renderer2, OnInit, AfterViewInit, ComponentFactory, OnDestroy } from '@angular/core';
import { Block } from '../app.component';
import { BlockComponent } from '../block/block.component';
import { ClockService } from '../clock.service';

@Directive({
  selector: '[appQueue]'
})
export class QueueDirective implements OnInit, OnDestroy {

  @Input() appQueue: boolean;
  @Input() appQueueBlocks: Block[];

  constructor(
    private viewContainer: ViewContainerRef, 
    private factoryResolver: ComponentFactoryResolver,
    private template: TemplateRef<any>,
    private renderer: Renderer2, 
    private clockService: ClockService
    ) {
      this.factory = this.factoryResolver.resolveComponentFactory(BlockComponent);
    }

  private factory: ComponentFactory<BlockComponent>;

  ngOnInit(){
    this.generate();
    this.start();
  }

  ngOnDestroy() {
    this.destroy();
  }

  start() {
    this.clockService.clock.subscribe(x => {
      try {
        this.append(this.appQueueBlocks[x % this.appQueueBlocks.length]);
        this.detach(0);
      } catch(ex) { console.error(`Error directive: ${ex}`); }
    });
  }
  
  generate() {
    if(this.appQueueBlocks.length >= 3) {
      this.appQueueBlocks.slice(0, this.appQueueBlocks.length - 2).forEach(block => this.append(block));
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