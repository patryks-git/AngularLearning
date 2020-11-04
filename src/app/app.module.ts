import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/app-highlight.directive';
import { MapToQueuePipe } from './map-to-queue.pipe';
import { BlockComponent } from './block/block.component';
import { QueueDirective } from './directives/queue.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MapToQueuePipe,
    BlockComponent,
    QueueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
