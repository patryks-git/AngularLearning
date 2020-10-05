import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HighlightDirective } from './app-highlight.directive';
import { YPipe } from './y.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    YPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
