import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpService } from '~/app/shared/http.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'ns-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  loader: boolean;

  constructor(private page: Page, private routerExtensions: RouterExtensions, private httpService: HttpService, private route: ActivatedRoute, ) { }
  pageSide;
  iconSize;
  boxSize;
  announcement;
  folderId;

  ngOnInit() {

    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.15;
    this.page.actionBarHidden = true;
    this.boxSize = deviceWidth * 0.70;
    //get id hear

    this.route.queryParams.subscribe(params => {
      let data = JSON.parse(params["data"]);
      console.log('----------------------');
      console.log(data);
      this.folderId = data.folder_id;
      this.getFolderAnnouncement(this.folderId);
    })

    //   this.folderId = id 
  }

  QnAs() {
    this.routerExtensions.navigate(['class/QnAs']);
  }

  newannounce() {
    if (this.folderId) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "data": JSON.stringify({
            folder_id: this.folderId,
          })
        }
      }
      this.routerExtensions.navigate(['class/newannounce'], navigationExtras);
    }
  }

  people() {
    this.routerExtensions.navigate(["class/people"]);
  }

  getFolderAnnouncement(id) {
    this.loader = true;
   
    this.httpService.getFolderAnnouncement(id)
      .subscribe(res => {
        this.announcement = res;
        this.loader = false;
   
        console.log(res);
      }, (error) => {
        this.loader = false;
   
        console.log(error);
      });
  }
}
