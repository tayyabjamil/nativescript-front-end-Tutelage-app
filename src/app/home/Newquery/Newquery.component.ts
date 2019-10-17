import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '~/app/shared/http.service';
import { AuthService } from '~/app/shared/auth.service';
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
@Component({
  selector: 'ns-Newquery',
  templateUrl: './Newquery.component.html',
  styleUrls: ['./Newquery.component.css'],
  moduleId: module.id
})
export class NewqueryComponent implements OnInit {
  public selectedIndex: number = null;
  public hint = "My Hint";
  public items: ValueList<string>;
  public cssClass: string = "default";
  pageSide: number;
  birthday: string;
  rform: FormGroup
  todate;
  fromdate;
  Newquery: any;


  public ngOnInit() {
    this._page.actionBarHidden = true;
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.rform = this.formBuilder.group({
      profile_id: new FormControl(this.authService.getUser(), [Validators.required]),
      title: new FormControl("", [Validators.required]),
      type: new FormControl('', [Validators.required,]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
      estimateAmount: new FormControl('', [Validators.required,]),
      adress: new FormControl("", [Validators.required]),
      description: new FormControl('', [Validators.required]),
      people:new FormControl('',Validators.required)
    });
    this.items = new ValueList<string>();
    for (let loop = 0; loop < 200; loop++) {
      this.items.push({
        value: `I${loop}`,
        display: `Item ${loop}`,
      });
    }
  }

  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.items.getValue(
      args.newIndex)}"`);
  }
  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }

  public changeStyles() {
    this.cssClass = "changed-styles";
  }

  constructor(
    private _page: Page,
    private formBuilder: FormBuilder,
    private httpSerivce: HttpService,
    private authService: AuthService
  ) {

  }

  storedata() {
    this.httpSerivce.createQueries(this.rform.value)
      .subscribe(res => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }


  pickDatefrom() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      this.fromdate = result['year'] + '-' + result['month'] + '-' + result['day'];
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  pickDateto() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      this.todate = result['year'] + '-' + result['month'] + '-' + result['day'];
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }
}


