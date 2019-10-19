import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpService } from '~/app/shared/http.service';
@Component({
  selector: 'ns-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  constructor(private page:Page,private routerExtensions:RouterExtensions,private httpService:HttpService) { }
pageSide;
iconSize;
boxSize;
announcement;
  ngOnInit() {
   
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    this.page.actionBarHidden=true;
    this.boxSize = deviceWidth * 0.70;
  this.getAnnouncements();
  }
  QnAs(){
    this.routerExtensions.navigate(['home/class/QnAs']);
  }
newannounce(){
  this.routerExtensions.navigate(['home/class/newannounce']);
}
people(){
  this.routerExtensions.navigate(["home/class/people"]);
}
getAnnouncements() {

  this.httpService.getAnnouncements()
  .subscribe(res => {
    debugger;
    this.announcement = res;
    console.log(res);
  }, (error) => {
      console.log(error);
    });
}
}
