import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Page } from 'tns-core-modules/ui/page/page';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


import * as platformModule from 'tns-core-modules/platform';
import { PageService } from '~/app/theme/services/page.service';
@Component({
  selector: 'ns-onBoardingFormteacher',
  templateUrl: './onBoardingFormteacher.component.html',
  styleUrls: ['./onBoardingFormteacher.component.scss'],
  moduleId: module.id
})
export class OnBoardingFormteacherComponent implements OnInit {
  @ViewChild('pager', { static: true }) pager: ElementRef;
  pageSide;
  boxSize;
  currentPagerIndex = 0;

  onBoardingForm;

  latestReceivedIndex = 0
  constructor(private page: Page, private formBuilder: FormBuilder, private pageservice: PageService) {
    this.page.actionBarHidden = true;
  }

  onBoardingitems = [
    {
      title: 'Personal Information',
      key: 'Personalinfo'
    },
    {
      title: 'Acadmics Information',
      key: 'Acadmics'
    },

  ];

  ngOnInit() {
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    const deviceHeight: number = platformModule.screen.mainScreen.widthDIPs;
   
    this.page.actionBarHidden = true;
    this.pageSide = this.pageservice.pageSidePadding();
     this.boxSize = deviceHeight * 0.30;
    this.onBoardingForm = this.formBuilder.group({
      Firstname: new FormControl("", [Validators.required, Validators.email]),
      Lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Adress: new FormControl('', [Validators.required]),
      Contact: new FormControl('', [Validators.required]),
      University: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required]),
      Semester: new FormControl('', [Validators.required]),
      Subjects: new FormControl('', Validators.required)
    })

  }

  onIndexChanged($event) {
    this.latestReceivedIndex = $event.value;
    this.currentPagerIndex = $event.value;
  }

  get formtitle() {

    return this.onBoardingitems[this.currentPagerIndex].title;
  }

  public templateSelector = (item: any) => {
    switch (item.key) {
      case 'Personalinfo': {
        return 'Personalinfo'
      }
        break;
      case 'Acadmics': {
        return 'Acadmics'
      }
        break;


    }
  }

  getpageSide() {
    this.pageSide = this.pageservice.pageSidePadding();
  }

}