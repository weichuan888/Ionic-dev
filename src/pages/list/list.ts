import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private data:DataProvider, public viewCtrl: ViewController) {
  
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
