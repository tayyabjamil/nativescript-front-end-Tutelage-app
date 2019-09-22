import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { PageService } from '~/app/theme/services/page.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  selector: 'ns-startingpage',
  templateUrl: './startingpage.component.html',
  styleUrls: ['./startingpage.component.css']
})
export class StartingpageComponent implements OnInit {
  
  pageSide: any;
  currentPagerIndex = 0;
  latestReceivedIndex = 0
  iconSize: number;
  pagerbox;
  
  constructor(
    private pageService:PageService,
    private page: Page,
    private routerExtensions:RouterExtensions

    ) { }

  ngOnInit() {
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.page.actionBarHidden = true;

    this.pageSide = this.pageService.pageSidePadding();

    this.iconSize = deviceWidth * 0.095;
    this.pagerbox = deviceWidth * 0.9;
  }
 login(){
this.routerExtensions.navigate(['login/login']);
 }
 signup() {
  this.routerExtensions.navigate(['login/onBoardingForm'])
}

  onBoardingitems = [
      {
        title: 'Personal Information',
        key: 'Personalinfo'
      },
      {
        title: 'Acadmics Information',
        key: 'Acadmics'
      },
      {
      title: 'Acadmic Information',
      key: 'Acadmic'
    },
    ];
   onIndexChanged($event) {
      this.latestReceivedIndex = $event.value;
      this.currentPagerIndex = $event.value;
    }
  
    public templateSelector = (item: any) => {
      switch (item.key) {
        case 'Personalinfo': {
          return 'Personalinfo'
        }
          break;
        case 'Acadmics': {
          return 'Acadmics'
        }
          break;
  
          case 'Acadmic': {
            return 'Acadmic'
          }
            break;
    
      }
    }
}
