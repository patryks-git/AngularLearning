import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ClockService } from '../clock.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private service: ClockService) {}

  @Input('appHighlight') opacity: number;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.opacity || 1);
    this.service.pause();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(1);
    this.service.stopPause();
  }

  private highlight(opacity: number) {
    if (opacity > 1 || opacity < 0) return;
    this.el.nativeElement.style.opacity = opacity;
  }
}

