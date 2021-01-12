import { CommonModule } from '@angular/common';
import { ObjectListComponent } from './object-list.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './reducers/task.reducer';
import { TaskEffects } from './effects/task.effects';
import { PriorityPipe } from './pipes/priority.pipe';

@NgModule({
  declarations: [
    ObjectListComponent,
    PriorityPipe
  ],
  imports: [
    FormsModule,
    StoreModule.forRoot({
      task: TaskReducer
    }),
    EffectsModule.forRoot([
      TaskEffects
    ]),
    CommonModule,
    HttpClientModule
  ]
})
export class ObjectListModule {}