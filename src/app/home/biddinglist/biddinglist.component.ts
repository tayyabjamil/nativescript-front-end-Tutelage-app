import { Component, OnInit } from '@angular/core';

import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { PageService } from '~/app/theme/services/page.service';

@Component({
  selector: 'ns-biddinglist',
  templateUrl: './biddinglist.component.html',
  styleUrls: ['./biddinglist.component.css'],
  moduleId: module.id
})
export class BiddinglistComponent implements OnInit {
  queries;
  pageSide;
  previewSize;
  iconSize;
  data;
  queryResponce;
  responceProfile;
  queryId;
  responceList;

  constructor(
    private httpService: HttpService,
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute,
    private pageService: PageService
  ) {
  }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = this.pageService.pageSidePadding();
    this.previewSize = deviceWidth * 0.20;
    this.iconSize = deviceWidth * 0.095;

    this.route.queryParams.subscribe(params => {
      let data = JSON.parse(params["data"]);
      console.log('----------------------');
      console.log(data);
      this.queryId = data.queries_id;
      this.getBiddingResponce(this.queryId);
      // this.getBiddingsProfiles(this.queryId);
    })   
    
  }

  // getBiddingsProfiles(queryId) {
  //   this.httpService.getBiddingsProfiles(queryId)
  //     .subscribe(res => {
  //       console.log(res);
  //       this.responceProfile = res;
  //       this.responceProfile = [].concat(...this.responceProfile);
  //       console.dir(this.responceProfile);
  //       setTimeout(() => {
  //         this.getResponseList();
  //       }, 1000);
  //     }, (error) => {
  //       console.log(error);
  //     });
  // }

  getBiddingResponce(queryId) {
    this.httpService.getBiddingResponces(queryId)
      .subscribe(res => {
        console.log(res);
        this.queryResponce = res;
        // setTimeout(() => {
        //   this.getResponseList();
        // }, 1000);
      }, (error) => {
        console.log(error);
      });
  }

  // getResponseList() {
  //   if(this.responceProfile && this.queryResponce) {
  //     this.responceList = [ ...this.responceProfile, ...this.queryResponce];
  //   console.log(this.responceList);
  //   }
  // }


  biddingPerson() {
    this.routerExtensions.navigate(['home/biddingPerson']);
  }

}

