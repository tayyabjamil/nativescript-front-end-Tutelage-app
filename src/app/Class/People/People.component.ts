import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
@Component({
  selector: 'ns-People',
  templateUrl: './People.component.html',
  styleUrls: ['./People.component.css']
})
export class PeopleComponent implements OnInit {
pageSide;
iconSize;
boxSize;
  constructor(private page:Page) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    this.page.actionBarHidden=true;
    this.boxSize = deviceWidth * 0.70;
  
  }

}
