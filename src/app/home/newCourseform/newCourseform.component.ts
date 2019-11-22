import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '~/app/shared/http.service';
import { AuthService } from '~/app/shared/auth.service';
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-newCourseform',
  templateUrl: './newCourseform.component.html',
  styleUrls: ['./newCourseform.component.css']
})
export class NewCourseformComponent implements OnInit {
pageSide;
rform:FormGroup
  constructor(
    private _page: Page,
    private formBuilder: FormBuilder,
    private httpSerivce: HttpService,
    private authService: AuthService,
    private routerExtension:RouterExtensions
  
  ) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.rform = this.formBuilder.group({
      profile_id: new FormControl(this.authService.getUser(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      modules: new FormControl('', [Validators.required,]),
      details: new FormControl('', [Validators.required]),
     });
    
  }
registerCourses(){
  this.httpSerivce.createCourses(this.rform.value)
    .subscribe(res => {
      alert("course Registered");
    }, (error) => {
      alert("course Not Registered");
    });

}

}
