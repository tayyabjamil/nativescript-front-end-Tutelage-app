import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthService } from '~/app/shared/auth.service';
@Component({
  selector: 'ns-Queries',
  templateUrl: './Queries.component.html',
  styleUrls: ['./Queries.component.css'],
  moduleId: module.id
})
export class QueriesComponent implements OnInit {

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
    private authService: AuthService) {
  }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.095;
    // this.queries = this.service.queries;
  
    this.getPeopleQueries();
    this.userType = this.authService.getUserType();
  }

  

  getPeopleQueries() {
    this.httpService.getPeopleQueries()
    .subscribe(res => {
      this.queries = res;
      console.log(res);
    }, (error) => {
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


  