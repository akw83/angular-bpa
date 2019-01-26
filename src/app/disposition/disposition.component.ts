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

  constructor() { }

  ngOnInit() {
    this.createTrainDataSet();
    this.createTrainDataSVG(this.trainData);
  }

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
      data.push(this.simulatedTimeSingleTrain(trains[i]));
    }
    return data;
  }

  private simulatedTimeSingleTrain(train: Train): Train {
    const updatedData: Train = train;
    for (let i = 0; i < train.coordinates.length; i++) {
      updatedData.coordinates[i][1] += 0.1;
      if (train.coordinates[i][1] >= 900) {
        console.log('b4: ' + updatedData);
        updatedData.coordinates.splice(i, 1);
        console.log('after: ' + updatedData);
      }
    }
    if (updatedData.coordinates.length === 0) {
      updatedData.coordinates.push(this.addNewTrain());
    }
    return updatedData;
  }

  private startTimeFlow(simulationSpeed: number): void {
    /* let simulatedTrains: Train[] = this.trainData; */
    this.timer = setInterval(() => {
      this.trainData = this.simulateTime(this.trainData);
      this.createTrainDataSVG(this.trainData);
    }, 30 / simulationSpeed);
  }

  private addNewTrain(): [number, number] {
    const direction = Math.round(Math.random());
    const x = (direction === 0) ? 0 : 660;
    const y = Math.floor((Math.random() * 400) + 50);
    return [x, y];
  }

}
