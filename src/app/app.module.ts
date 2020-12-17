import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from './carousel/carousel.module';
import { ObjectListModule } from './object-list/object-list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CarouselModule,
    ObjectListModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
