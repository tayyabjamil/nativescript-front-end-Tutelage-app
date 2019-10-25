import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/app/shared/auth.service';

import * as platformModule from 'tns-core-modules/platform';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '~/app/shared/http.service';

@Component({
  selector: 'ns-newfolder',
  templateUrl: './newfolder.component.html',
  styleUrls: ['./newfolder.component.css']
})
export class NewfolderComponent implements OnInit {
  pageSide;
  iconSize;
  rformgroup: FormGroup;
  

  constructor(
    private formBuilder:FormBuilder,
    private httpService:HttpService,
    private authService: AuthService
 
  ) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.095;
  
    this.rformgroup = this.formBuilder.group({
      title: new FormControl('', [Validators.required,]),
      class: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required,]),
       
  })
  }

createFolder(){
  this.httpService.createFolders(this.rformgroup.value)
      .subscribe(res => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }
}