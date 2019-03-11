import { Node, Link } from './';
import { EventEmitter } from '@angular/core';
import * as d3 from 'd3';

const FORCES = {
    LINKS: 1 / 50,
    COLLOSION: 1,
    CHARGE: -1
};

export class ForceDirectedGraph {
    ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
    simulation: d3.Simulation<any, any>;

    nodes: Node[] = [];
    links: Link[] = [];

    constructor(nodes, links, options: { width, height }) {
        this.nodes = nodes;
        this. links = links;

        this.initSimulation(options);
    }

    initLinks() {
        if (!this.simulation) {
            throw new Error('simluation was not initialized yet');
        }

        // Initializing the links force simulation
        this.simulation.force('links', d3.forceLink(this.links).id(d => d['id']).strength(FORCES.LINKS));
    }

    initNodes() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }

        this.simulation.nodes(this.nodes);
    }

    initSimulation(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }

        // create new simulation
        if (!this.simulation) {
            const ticker = this.ticker;

            this.simulation = d3.forceSimulation()
                .force('charge', d3.forceManyBody().strength(FORCES.CHARGE));

            this.initNodes();
            this.initLinks();
        }

         // updating the central force for the simulation
        this.simulation.force('centers', d3.forceCenter(options.width / 2, options.height / 2));

        // restart the simulation internal timer
        this.simulation.restart();
    }

}
