import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Node, Link, ForceDirectedGraph} from './models/';
import * as d3 from 'd3';
import { ContainerElement } from 'd3';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class D3Service {
  constructor() { }

  /* A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehavior(svgElement: SVGAElement, containerElement: ContainerElement) {
    let zoomed: any, zoom: any;

    // select element
    const svg = d3.select(svgElement);
    const container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
    };

    zoom = d3.zoom().on('zoom', zoomed);
    // bind zoom function on element
    svg.call(zoom);

   }

  /* A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(myElement: SVGAElement, node: Node, graph: ForceDirectedGraph) {
    const d3element = d3.select(myElement);

    function started() {
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();

        d3.event.on('drag', dragged).on('end', ended);
      }

      function dragged() {
        node.fx = d3.event.x;
        node.fy = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }
      }

      node.fx = null;
      node.fy = null;
    }

    d3element.call(d3.drag()
    .on('start', started));

  }

  /* Physical calculations with d3 */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height}): ForceDirectedGraph {
    const graph = new ForceDirectedGraph(nodes, links, options);

    return graph;
  }

}
