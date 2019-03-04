import { Node } from './../models/node';
import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { D3Service } from '../d3.service';
import { ForceDirectedGraph } from '../models/force-directed-graph';

@Component({
  selector: 'app-graph',
  templateUrl: './nodes-example.component.html',
  styleUrls: ['./nodes-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesExampleComponent implements OnInit, AfterViewInit {

  @Input() nodes;
  @Input() links;

  _options: { width, height } = { width: 800, height: 600 };
  graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

}
