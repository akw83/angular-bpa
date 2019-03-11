import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBoardComponent } from './action-board.component';
import { ObjectCardComponent } from './object-card/object-card.component';

@NgModule({
  declarations: [
    ActionBoardComponent,
    ObjectCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ActionBoardComponent
  ]
})
export class ActionBoardModule { }
