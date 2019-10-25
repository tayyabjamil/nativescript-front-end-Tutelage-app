import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-registerCourses',
  templateUrl: './registerCourses.component.html',
  styleUrls: ['./registerCourses.component.css']
})
export class RegisterCoursesComponent implements OnInit {
  pageSide: number;
  iconSize: number;

  constructor(private routerExtension:RouterExtensions) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.095;
  }
newCourseForm(){
  this.routerExtension.navigate(['home/registerCourseForm']);
}
}
