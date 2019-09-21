import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router'
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '~/app/shared/auth.service';


@Component({
  selector: 'ns-myfeed',
  templateUrl: './myfeed.component.html',
  styleUrls: ['./myfeed.component.css']
})
export class MyfeedComponent implements OnInit {
  queries;
  pageSide;
  iconSize;
  data;
  userType;
  loader = false;
  constructor(
    private httpService: HttpService,
       private routerExtensions: RouterExtensions,
       private route: ActivatedRoute,
       private authService: AuthService) { }

  ngOnInit() {
  const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
  const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
  this.pageSide = deviceWidth * 0.10;
  this.iconSize = deviceWidth * 0.095;
  // this.queries = this.service.queries;
  this.getUserQueries();
  this.userType = this.authService.getUserType();
  }
  getUserQueries() {

    this.loader = true;
    this.httpService.getUserQueries()
    .subscribe(res => {
      this.queries = res;
      this.loader = false;
      console.log(res);
    }, (error) => {
      this.loader = false;
        console.log(error);
      });
  }

  
  public bidinglist(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data": JSON.stringify({
          data: item,
        })
      }
    }
    this.routerExtensions.navigate(['home/biddinglist'], navigationExtras);

  }
}