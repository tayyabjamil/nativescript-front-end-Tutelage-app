import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})

export class HomeComponent implements OnInit {

  newview: any;
  userType;

  constructor(private _page: Page, private authService: AuthService) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    this.userType = this.authService.getUserType();
  }

  onviewSelection(view) {
    this.newview = view
  }

  get showType() {
    return this.newview;
  }

}