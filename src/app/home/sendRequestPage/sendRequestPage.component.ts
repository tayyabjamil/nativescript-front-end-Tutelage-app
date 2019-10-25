import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router'
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '~/app/shared/auth.service';


@Component({
  selector: 'ns-sendRequestPage',
  templateUrl: './sendRequestPage.component.html',
  styleUrls: ['./sendRequestPage.component.css']
})
export class SendRequestPageComponent implements OnInit {
requestData;
  pageSide: number;
  iconSize: number;
  constructor(
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute,
    private page:Page

  ) {
    this.route.queryParams.subscribe(params => {
      let data = JSON.parse(params["data"]);
      this.requestData = data.data;
      console.log('----------------------');
      console.log(this.requestData);
    })
  
   }

  ngOnInit() {
  const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
  const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
  this.pageSide = deviceWidth * 0.10;
  this.iconSize = deviceWidth * 0.095;
  this.page.actionBarHidden = true;
 
    this.page.actionBarHidden = true;
    
  }
sendRequest(){
  console.log(this.requestData);
}
}
