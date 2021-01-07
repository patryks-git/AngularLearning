import { CarouselComponent } from './carousel.component';
import { BlockComponent } from './block/block.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './directives/app-highlight.directive';
import { QueueDirective } from './directives/queue.directive';
import { QueuePipe } from './pipes/queue.pipe';

@NgModule({
    declarations: [
      CarouselComponent,
      HighlightDirective,
      QueuePipe,
      BlockComponent,
      QueueDirective
    ],
    imports: [
      BrowserModule,
    ],
    providers: [QueuePipe]
  })
export class CarouselModule {}