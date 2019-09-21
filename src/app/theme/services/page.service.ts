import { Injectable } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  pageSide = 0;
  
    constructor() {
    // const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.07;
  
  }

  pageSidePadding() {
    return this.pageSide;
  }

}