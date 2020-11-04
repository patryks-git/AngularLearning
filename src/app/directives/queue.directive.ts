import { Directive, ViewContainerRef, TemplateRef ,Input, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Block } from '../app.component';
import { BlockComponent } from '../block/block.component';

@Directive({
  selector: '[appQueue]'
})
export class QueueDirective {

  constructor(
    private viewContainer: ViewContainerRef, 
    private factoryResolver: ComponentFactoryResolver,
    private template: TemplateRef<any>,
    private renderer: Renderer2
    ) { 
      this.generate();
    }

  @Input() appQueue: Block;

  generate() {
    const factory = this.factoryResolver.resolveComponentFactory(BlockComponent);
    const component = this.viewContainer.createComponent(factory);
    component.instance.block = this.appQueue;
    let element = component.location.nativeElement;
    this.renderer.appendChild(this.getParentElement(), element);
  }

  destroy() {
    this.viewContainer.clear();
  }

  getParentElement(){
    let parent = this.template.elementRef.nativeElement
    if(parent instanceof Comment){
      parent = this.renderer.createElement('div');
    }
    return parent;
  }
}