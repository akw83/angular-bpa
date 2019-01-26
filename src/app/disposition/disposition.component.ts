import { Component, OnInit } from '@angular/core';

import { Train } from '../train';
import { TRAINS } from '../mock-trains';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent implements OnInit {
  trainData: Train[];
  dataPointsView: {name: string, coord: string, lastCoordinate: string[]}[];
  buttonModel = 'stop';
  timer: any;
  trainDetail: Train;
  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
    this.createTrainDataSet();
    this.createTrainDataSVG(this.trainData);
  }

  /* controlls ---------------------------------------------------------- */
  private createTrainDataSet(): Train[] {
    return this.trainData = TRAINS;
  }

  public checkRadioButtons() {
    if (this.buttonModel === 'play') {
      this.startTimeFlow(1);
      console.log('--------------Simulation started! --------------');
    }
    if (this.buttonModel === 'stop') {
      console.log(this.timer);
      clearInterval(this.timer);
      console.log('--------------Simulation STOPED! --------------');
    }
    if (this.buttonModel === 'ff') {
      this.startTimeFlow(3);
      console.log('--------------Simulation >> ! --------------');
    }
  }

  private createTrainDetails(train: Train): void {
    this.trainDetail = train;
    console.log('created details: ' + this.trainDetail.name);
  }

  /* TODO move all function below into a service! */

  // transform 1 set of train data -----------------------------
  private createPoint(name: string, coord: number[][]): {name: string, coord: string, lastCoordinate: string[]} {
    let coordAsString = '';
    const lastCoord: string[] = [];
    for (let i = 0; i < coord.length; i++) {
      coordAsString += coord[i][0] + ',' + coord[i][1];
      if (i < coord.length) {
        coordAsString += ' ';
      }
    }
    if (coord.length > 0) {
      lastCoord[0] = String(coord[coord.length - 1][0]);
      lastCoord[1] = String(coord[coord.length - 1][1]);
      lastCoord[2] = this.transformText(lastCoord[1]);
    }
    return {name: name, coord: coordAsString, lastCoordinate: lastCoord};
  }

  // create a array of train data for SVG polyline view -------------------
  private createTrainDataSVG (trainData: Train[]) {
    const data = [];
    for (let i = 0; i < trainData.length; i++) {
      data.push(this.createPoint(trainData[i].name, trainData[i].coordinates));
    }
    this.dataPointsView = data;
  }

  private transformText(verticalPoint: string): string {
    return `translate(0,${String(2 * Number(verticalPoint))}) scale(1 -1)`;
  }

  /* ------------------- Functions for simulation -------------- */
  /* simulate time */
  private simulateTime(trains: Train[]): Train[] {
    const data = [];
    for (let i = 0; i < trains.length; i++) {
      data.push(this.simulateSingleTrain(trains[i]));
    }
    return data;
  }

  /* simulate train behavior */
  private simulateSingleTrain(train: Train): Train {
    const updatedData: Train = train;
    this.counter += 1;
    if (this.counter / 100 > 1) {
      updatedData.coordinates.push(this.moveTrain(train.coordinates));
      this.counter = 0;
    }
    for (let i = 0; i < train.coordinates.length; i++) {
      updatedData.coordinates[i][1] += 0.1;
      /* coord out of viewbox --> remove coord from array */
      if (train.coordinates[i][1] >= 900) {
        updatedData.coordinates.splice(i, 1);
      }
    }
    /* begin train with a fresh new coord after all coordinates are out of bound */
    if (updatedData.coordinates.length === 0 ||
      updatedData.coordinates[updatedData.coordinates.length - 1][0] < 0 ||
      updatedData.coordinates[updatedData.coordinates.length - 1][1] > 800) {
      updatedData.coordinates.push(this.addNewTrainCoord());
    }
    return updatedData;
  }

  private moveTrain(trainCoordinate) {
    const leftDirection = this.simulateTrainMovement(
      0, trainCoordinate[trainCoordinate.length - 1][0], trainCoordinate[trainCoordinate.length - 1][1]);
    const rightDirection = this.simulateTrainMovement(
      1, trainCoordinate[trainCoordinate.length - 1][0], trainCoordinate[trainCoordinate.length - 1][1]);

    if (trainCoordinate.length > 1) {
      if ((trainCoordinate[trainCoordinate.length - 1][0] - trainCoordinate[trainCoordinate.length - 2][0]) >= 0) {
         return leftDirection;
      } else {
        return rightDirection;
      }
    }
    if (trainCoordinate[0][0] > 400) {
      return rightDirection;
    } else {
      return leftDirection;
    }
  }

  /* simulate time flow behavior */
  private startTimeFlow(simulationSpeed: number): void {
    /* let simulatedTrains: Train[] = this.trainData; */
    this.timer = setInterval(() => {
      this.trainData = this.simulateTime(this.trainData);
      this.createTrainDataSVG(this.trainData);
    }, 30 / simulationSpeed);
  }

  private simulateTrainMovement(direction: 0|1, lastXValue, lastYValue): [number, number] {
    let x: number;
    if (direction === 0) {
      x = lastXValue + Math.floor(Math.random() * 20);
    } else {
      x = lastXValue - Math.floor(Math.random() * 20);
    }
    const y = lastYValue - Math.floor(Math.random() * 20);
    return [x, y];
  }

  /* begin new train with start coord */
  private addNewTrainCoord(): [number, number] {
    const direction = Math.round(Math.random());
    const x = (direction === 0) ? 0 : 660;
    const y = Math.floor((Math.random() * 400) + 50);
    return [x, y];
  }

  /* add new train from view */
  public addNewTrainOnView(event: any) {
    return event;
  }

}
