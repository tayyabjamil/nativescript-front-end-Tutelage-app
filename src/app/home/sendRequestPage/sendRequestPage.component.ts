import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router'
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '~/app/shared/auth.service';
import { Validators, FormControl, FormGroupName, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'ns-sendRequestPage',
  templateUrl: './sendRequestPage.component.html',
  styleUrls: ['./sendRequestPage.component.css']
})
export class SendRequestPageComponent implements OnInit {
requestData;
  pageSide: number;
  iconSize: number;
  rform: FormGroup
  responce;
  queryId;
  constructor(
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute,
    private page:Page,
    private httpSerivce: HttpService,
    private formBuilder: FormBuilder,
    private authService:AuthService

  ) {
    this.route.queryParams.subscribe(params => {
      let data = JSON.parse(params["data"]);
      this.requestData = data.data;
      console.log('----------------------');
      console.log(this.requestData);
    })
    this.route.queryParams.subscribe(params => {
      let data  = JSON.parse(params["data"]);
      console.log('-------------in the new announcements ---------');
      console.log(data);
      this.queryId = data.data.id;
    })
   
   }

  ngOnInit() {
  const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
  const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
  this.pageSide = deviceWidth * 0.10;
  this.iconSize = deviceWidth * 0.095;
  // this.page.actionBarHidden = true;
 this.rform = this.formBuilder.group({
      
      profile_id: new FormControl(this.authService.getUser(), [Validators.required]),
      responce: new FormControl('', [Validators.required])
      
       
     });
    
  }
sendRequest() {
    
  this.httpSerivce.createBiddings(this.rform.value,this.queryId)
    .subscribe(res => {
    alert("Request Sent");
      console.log(res);
    }, (error) => {
      alert("Request Not Sent");
      console.log(error);
    });
}
}

