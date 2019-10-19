import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '~/app/shared/http.service';

@Component({
  selector: 'ns-newannouncments',
  templateUrl: './newannouncments.component.html',
  styleUrls: ['./newannouncments.component.css']
})
export class NewannouncmentsComponent implements OnInit {
  pageSide;
  iconSize;
  rformgroup: FormGroup;
  
  constructor(
    private formBuilder:FormBuilder,
    private httpService:HttpService
    ) { }

  ngOnInit() {
  const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
  const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
  this.pageSide = deviceWidth * 0.10;
  this.iconSize = deviceWidth * 0.095;

  this.rformgroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required,]),
    type: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
    description:new FormControl('',Validators.required)
  });
 
     
}
post(){
  this.httpService.createAnnouncements(this.rformgroup.value)
      .subscribe(res => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }
}   

