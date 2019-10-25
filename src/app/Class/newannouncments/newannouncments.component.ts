import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '~/app/shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-newannouncments',
  templateUrl: './newannouncments.component.html',
  styleUrls: ['./newannouncments.component.css']
})
export class NewannouncmentsComponent implements OnInit {
  pageSide;
  iconSize;
  rformgroup: FormGroup;
  folderId;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      let data  = JSON.parse(params["data"]);
      console.log('-------------in the new announcements ---------');
      console.log(data);
      this.folderId = data.folder_id;
    })
   }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.iconSize = deviceWidth * 0.095;

    this.rformgroup = this.formBuilder.group({
      title: new FormControl('', [Validators.required,]),
      type: new FormControl('', [Validators.required]),
      deadline: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });

   

    //folderId get from routes params
  }

  post() {
    if (this.folderId) {
      this.httpService.createAnnouncements(this.rformgroup.value, this.folderId)
        .subscribe(res => {
          console.log(res);
        }, (error) => {
          console.log(error);
        });
    }
  }
}

