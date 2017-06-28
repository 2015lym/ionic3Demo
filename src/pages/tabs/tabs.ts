import { Component, ViewChild } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SettingPage } from "../setting/setting";
import { BackButtonService } from "../../services/backButton.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public backButtonService: BackButtonService,
              private platform: Platform) {
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

      platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(this.tabRef);
      });
  }
}
