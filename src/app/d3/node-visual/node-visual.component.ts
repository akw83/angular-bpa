import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent implements OnInit {

  @Input() nodeVisual: Node;

  constructor() { }

  ngOnInit() {
  }

}
