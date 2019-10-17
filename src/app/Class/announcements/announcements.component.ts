import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  selector: 'ns-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  constructor(private page:Page,private routerExtensions:RouterExtensions) { }
pageSide;
iconSize;
boxSize;
  ngOnInit() {
   
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    this.page.actionBarHidden=true;
    this.boxSize = deviceWidth * 0.70;
  }
newannounce(){
  this.routerExtensions.navigate(['home/class/newannounce']);
}

}
