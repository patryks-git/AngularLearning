import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ObjectListComponent } from './object-list/object-list.component';


const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'object-list', component: ObjectListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
