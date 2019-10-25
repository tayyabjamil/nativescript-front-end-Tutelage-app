import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router'
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
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
) { }
ngOnInit(){
 const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
  const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
  this.pageSide = deviceWidth * 0.10;
  this.iconSize = deviceWidth * 0.095;
}
 
}
