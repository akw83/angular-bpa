// Implementing SimulationNodeDatum interface into our custom Node class
export class Node implements d3.SimulationNodeDatum {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number;
    fy?: number;

    id: string;
    linkCount = 0;

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

    constructor(id) {
        this.id = id;
    }

    normal = () => {
        return Math.sqrt(this.linkCount / this.CONFIG.N);
      }

      get r() {
        return 50 * this.normal() + 10;
      }

      get fontSize() {
        return (30 * this.normal() + 10) + 'px';
      }

      get color() {
        const index = Math.floor(this.CONFIG.SPECTRUM.length * this.normal());
        return this.CONFIG.SPECTRUM[index];
      }
}
