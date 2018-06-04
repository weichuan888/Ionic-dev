import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public image: string;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private camera: Camera) {
  }

  navigateToList(){
    const modal = this.modalCtrl.create(ListPage);
    modal.present();
  };

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     
    });
  }

}
  
