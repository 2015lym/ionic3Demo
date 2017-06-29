import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Platform } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController,
              private backButtonService: BackButtonService,
              private platform: Platform) {
      platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(null);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      alert(userinfo);
      let modal = this.modalCtrl.create(TabsPage);
      modal.present();
    }
  }

}
