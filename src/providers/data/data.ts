import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {

  constructor() {
  }

  getData(): any {
    return [
      { name: "Weichuan", role: "Web Dev Front-End", status: 1},
      { name: "Omar", role: "Web Dev Back-End", status: 0},
      { name: "Anthony", role: "FullStack dev",status: 1}
    ]
  }

}
