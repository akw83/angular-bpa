import { D3Service } from './../d3.service';
import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appZoomable]'
})
export class ZoomableDirective implements OnInit {

  @Input() appZoomable: SVGAElement;

  constructor(private d3Service: D3Service, private _element: ElementRef) { }

  ngOnInit() {
    this.d3Service.applyZoomableBehavior(this.appZoomable, this._element.nativeElement);
  }

}
