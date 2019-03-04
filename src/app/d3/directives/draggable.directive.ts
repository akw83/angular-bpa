import { D3Service } from './../d3.service';
import { Node, ForceDirectedGraph } from './../models';
import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {

  @Input() appDraggable: Node;
  @Input() draggableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) { }

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.appDraggable, this.draggableInGraph);
  }

}
