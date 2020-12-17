import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from './carousel/carousel.module';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CarouselModule,
    EffectsModule.forRoot([])
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
