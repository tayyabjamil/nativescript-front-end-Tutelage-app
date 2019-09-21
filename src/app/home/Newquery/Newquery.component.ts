import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
// import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '~/app/shared/http.service';
import { AuthService } from '~/app/shared/auth.service';
@Component({
  selector: 'ns-Newquery',
  templateUrl: './Newquery.component.html',
  styleUrls: ['./Newquery.component.css'],
  moduleId: module.id
})
export class NewqueryComponent implements OnInit {
  pageSide: number;
  birthday: string;
  rform: FormGroup
  todate;
  fromdate;

  Newquery: any;

  constructor(
    private _page: Page,
    private formBuilder: FormBuilder,
    private httpSerivce: HttpService,
    private authService:AuthService
    ) { }

  ngOnInit() {


    this._page.actionBarHidden = true;
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.rform = this.formBuilder.group({
      profile_id: new FormControl(this.authService.getUser(), [Validators.required]),
      title: new FormControl("test", [Validators.required]),
      type: new FormControl('test', [Validators.required,]),
      fromDate: new FormControl('testdate', [Validators.required]),
      toDate: new FormControl('testdate', [Validators.required]),
      estimateAmount: new FormControl('test', [Validators.required,]),
      adress: new FormControl("test", [Validators.required]),
      description: new FormControl('test', [Validators.required]),
    });
  }
  onSubmit() {
    this.httpSerivce.createQueries(this.rform.value)
      .subscribe((result) => {
        console.log(result + 'New Query uploaded ');
      }, (error) => {
        console.log(error + 'Error in New Query');
      });
  }
  pickDatefrom() {
    // const picker = new ModalPicker.ModalDatetimepicker();
    // picker.pickDate({
    //   theme: 'dark',
    //   maxDate: new Date(),
    //   is24HourView: false
    // }).then((result) => {
    //   this.fromdate = result['year'] + '-' + result['month'] + '-' + result['day'];
    // }).catch((error) => {
    //   console.log('Error: ' + error);
    // });
  }

  pickDateto() {
  //   const picker = new ModalPicker.ModalDatetimepicker();
  //   picker.pickDate({
  //     theme: 'dark',
  //     maxDate: new Date(),
  //     is24HourView: false
  //   }).then((result) => {
  //     this.todate = result['year'] + '-' + result['month'] + '-' + result['day'];
  //   }).catch((error) => {
  //     console.log('Error: ' + error);
  //   });
  // }
}
}

