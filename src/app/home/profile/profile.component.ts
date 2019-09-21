import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import { PageService } from '~/app/theme/services/page.service';
import { DataService } from '~/app/data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/app/shared/auth.service';
import { HttpService } from '~/app/shared/http.service';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  moduleId: module.id
})
export class ProfileComponent implements OnInit {

  previewSize: number;
  itemPadding: number;
  pageSide;
  profileData;
  profile;
iconSize;
  constructor(
   private httpService:HttpService,
    private _page: Page, 
    private pageService: PageService, 
    private dataService: DataService,
    private routerExtensions: RouterExtensions,
    private authService: AuthService) { }

  ngOnInit() {
    // const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.previewSize = deviceWidth * 0.25;
    this.itemPadding = deviceWidth * 0.04;
    this.iconSize = deviceWidth * 0.095;
   
    this.pageSide = this.pageService.pageSidePadding();
    this._page.actionBarHidden = true;
    //this.profileData = this.dataService.profileData;
    this.getUserProfile();
  }
  getUserProfile() {
    this.httpService.getUserProfile()
    .subscribe(res => {
      this.profile = res[0];
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }
  logout() {
    this.authService.removeLoggedIn();
    this.routerExtensions.navigate(['login'], {
      transition: {
        name: 'slideRight',
        curve: 'linear'
      }
    });
  }

}
