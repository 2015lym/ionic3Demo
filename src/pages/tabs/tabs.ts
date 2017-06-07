import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

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
        root: ContactPage,
        tabTitle: 'Contact',
        tabIcon: 'notifications'
      },
      {
        root: AboutPage,
        tabTitle: 'About',
        tabIcon: 'document'
      }
    ];
  }
}
