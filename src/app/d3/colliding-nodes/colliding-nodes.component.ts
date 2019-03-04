import { Component, OnInit } from '@angular/core';
import { Link, Node } from '../models';

@Component({
  selector: 'app-colliding-nodes',
  templateUrl: './colliding-nodes.component.html',
  styleUrls: ['./colliding-nodes.component.css']
})
export class CollidingNodesComponent implements OnInit {

  nodes: Node[] = [];
  links: Link[] = [];

  CONFIG = {
    N : 100,
    SPECTRUM: [
      // "rgb(222,237,250)"
      'rgb(176,212,243)',
      'rgb(128,186,236)',
      'rgb(77,158,228)',
      'rgb(38,137,223)',
      'rgb(0,116,217)',
      'rgb(0,106,197)'
      // "rgb(0,94,176)"
      // "rgb(0,82,154)"
      // "rgb(0,60,113)"
    ]
  };

  constructor() {
  }

  ngOnInit() {
    const N = this.CONFIG.N,
          getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

}
