import { Directive, ViewContainerRef, TemplateRef ,Input, ComponentFactory, EventEmitter, Output } from '@angular/core';
import { Block } from '../app.component';

@Directive({
  selector: '[appQueue]'
})
export class QueueDirective {

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any> ) { }

  @Output() block: EventEmitter<Block> = new EventEmitter<Block>();

  @Input() set appQueue(block: Block) {
    if (block.isVisible)
      this.viewContainer.createEmbeddedView(this.template);
    else
      this.viewContainer.clear()
  };
}