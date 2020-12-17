import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ObjectListComponent } from './object-list.component';
import { TaskReducer } from './reducers/task.reducer';

@NgModule({
  declarations: [
    ObjectListComponent
  ],
  imports: [
    FormsModule,
    StoreModule.forRoot({
      task: TaskReducer
    }),
    EffectsModule.forRoot([]),
    CommonModule 
  ]
})
export class ObjectListModule {}