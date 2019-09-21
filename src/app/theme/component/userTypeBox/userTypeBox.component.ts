import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'ns-userTypeBox',
  templateUrl: './userTypeBox.component.html',
  styleUrls: ['./userTypeBox.component.scss']
})
export class UserTypeBoxComponent implements OnInit {

  userType;
  boxSize;
  pageSide;

  @Output() onSelectUserType = new EventEmitter<any>();
  constructor(private pageService: PageService) { }

  ngOnInit() {
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.boxSize = deviceWidth * 0.35;
    this.pageSide = this.pageService.pageSidePadding();
  }

  onAccountSelection(user) {
    this.userType = user;
    this.onSelectUserType.emit(user);
  }

  get showType() {
    return this.userType;
  }


}
