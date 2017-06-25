import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public modalCtrl: ModalController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logOut() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
