import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { HttpService } from '~/app/shared/http.service';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-Folders',
  templateUrl: './Folders.component.html',
  styleUrls: ['./Folders.component.css']
})
export class FoldersComponent implements OnInit {
  pageSide: number;
  iconSize: number;
  loader = false;
  
  boxSize: number;
  folder;
  constructor(private page: Page, 
    private routerExtensions: RouterExtensions, 
    private httpService: HttpService,
    ) { }

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
    this.loader = true;
   
    this.httpService.getFolders()
      .subscribe(res => {
        debugger;
        this.folder = res;
        this.loader = false;
  
        console.log(res);
      }, (error) => {
        this.loader = false;
     
        console.log(error);
      });
  }

  newfolder() {
    this.routerExtensions.navigate(['class/newfolder']);
  }


  // public folderId(item) {
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       "data": JSON.stringify({
  //         data: item,
  //       })
  //     }
  //   }
  //   this.routerExtensions.navigate(['home/biddinglist'], navigationExtras);

  // }

  announcements(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data": JSON.stringify({
          folder_id: id,
        })
      }
    }
    this.routerExtensions.navigate(['class/announcments'], navigationExtras);
  }

}
