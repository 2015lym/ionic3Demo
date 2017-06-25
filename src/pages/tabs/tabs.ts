import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingPage } from "../setting/setting";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: SettingPage,
        tabTitle: '设置',
        tabIcon: 'person'
      }
    ];
  }
}
