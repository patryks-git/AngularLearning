import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HighlightDirective } from './app-highlight.directive';
import { YPipe } from './y.pipe';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    YPipe,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
