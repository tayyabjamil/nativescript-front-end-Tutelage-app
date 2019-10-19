import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { HttpService } from '~/app/shared/http.service';
@Component({
  selector: 'ns-Folders',
  templateUrl: './Folders.component.html',
  styleUrls: ['./Folders.component.css']
})
export class FoldersComponent implements OnInit {
  pageSide: number;
  iconSize: number;

  boxSize: number;
folder;
  constructor(private page: Page, private routerExtensions: RouterExtensions,private httpService:HttpService) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    this.page.actionBarHidden = true;
    this.boxSize = deviceWidth * 0.70;

    this.getFolders();
  }
  getFolders() {

    this.httpService.getFolders()
    .subscribe(res => {
      debugger;
      this.folder = res;
      console.log(res);
    }, (error) => {
        console.log(error);
      });
  }

newfolder(){
  this.routerExtensions.navigate(['home/class/newfolder']);
}
  announcements() {
    this.routerExtensions.navigate(['home/class/announcments']);
  }

}
