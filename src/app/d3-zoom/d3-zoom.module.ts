import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanZoomComponent } from './pan-zoom/pan-zoom.component';
import { BrushZoomComponent } from './brush-zoom/brush-zoom.component';

@NgModule({
  declarations: [
    PanZoomComponent,
    BrushZoomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanZoomComponent,
    BrushZoomComponent
  ]
})
export class D3ZoomModule { }
