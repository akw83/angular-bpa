import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[linkVisual]',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent implements OnInit {


  @Input() linkVisual: Link;

  constructor() { }

  ngOnInit() {
  }

}
