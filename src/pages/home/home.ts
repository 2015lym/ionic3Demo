import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // 接收数据用
  listData: Object;
  // 依赖注入
  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidLoad() {
    // 网络请求
    this.http.request('http://jsonplaceholder.typicode.com/photos')
      .subscribe((res: Response) => {
        this.listData = res.json();
      });

    // this.http.request('http://jsonplaceholder.typicode.com/photos')
    //   .toPromise()
    //   .then(res => { this.listData = res.json(); })
    //   .catch(err => { console.error(err) });
  }

}
