import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { AuthService } from '../shared/auth.service';
import { ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})

export class HomeComponent implements OnInit {


  newview: any;
  userType;
  private drawer: RadSideDrawer;
  manContentText: string;

  constructor(private _page: Page, private authService: AuthService,
    private _changeDetectionRef: ChangeDetectorRef,
    private page:Page) { }

  @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;


  ngOnInit() {
    this.manContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    this.userType = this.authService.getUserType();
    this.page.actionBarHidden = true;
    
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
}

   

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

}

  // ngOnInit() {
  //   this._page.actionBarHidden = true;
  //   this.userType = this.authService.getUserType();
  // }

  // onviewSelection(view) {
  //   this.newview = view
  // }

  // get showType() {
  //   return this.newview;
  // }