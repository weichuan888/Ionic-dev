import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'list-partial',
  templateUrl: 'list-partial.html'
})
export class ListPartialComponent {

  public list: [any];

  constructor(private data: DataProvider) {
    this.list = data.getData();
  }

}
