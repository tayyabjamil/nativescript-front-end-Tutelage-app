import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
@Component({
  selector: 'ns-newannouncments',
  templateUrl: './newannouncments.component.html',
  styleUrls: ['./newannouncments.component.css']
})
export class NewannouncmentsComponent implements OnInit {
  pageSide;
  iconSize;
  constructor() { }

  ngOnInit() {
  const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
  const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
  this.pageSide = deviceWidth * 0.10;
  this.iconSize = deviceWidth * 0.095;
  }
  
}
