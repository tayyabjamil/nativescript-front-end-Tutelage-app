import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Page } from 'tns-core-modules/ui/page/page';


import * as platformModule from 'tns-core-modules/platform';
import { PageService } from '~/app/theme/services/page.service';
import { HttpService } from '~/app/shared/http.service';

@Component({
  selector: 'ns-onBoardingForm',
  templateUrl: './onBoardingForm.component.html',
  styleUrls: ['./onBoardingForm.component.scss']
})

export class OnBoardingFormComponent implements OnInit {

  onBoarding;
  onBoardingForm
  pageSide;
  boxSize;
  title;
  currentPagerIndex: 0;
  latestReceivedIndex = 0;

  formData = [
    {
      formTitle: 'Account Information',
      formFields: [
        {
          inputType: 'textField',
          hint: 'user_name',
          keyboardType: 'string',
          position: 'full',
          formGroup: 'onBoarding',
          formControlName: 'user_name'
        },
        
        {
          inputType: 'textField',
          hint: 'Email',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'email'

        },

        {
          inputType: 'textField',
          hint: 'Password',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'password'

        },
        {
          inputType: 'textField',
          hint: 'Confirm Password',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'confirmPassword'

        },
        
        
      ]
    },
    {
      formTitle: 'Personal Information',
      formFields: [
        [
          {
            inputType: 'textField',
            hint: 'first_name',
            keyboardType: 'string',
            position: 'half',
            formControlName: 'first_name'
          },
          {
            inputType: 'textField',
            hint: 'last_name',
            keyboardType: 'string',
            position: 'half',
            formControlName: 'last_name'
          }
        ],
        {
          inputType: 'textField',
          hint: 'Contact',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'contact'
        },
        {
        
          inputType: 'textField',
          hint: 'University',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'university'

        },

        {
          inputType: 'textField',
          hint: 'Department',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'department'

        },
        {
          inputType: 'textField',
          hint: 'Semester',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'semester'

        },
        {
          inputType: 'textField',
          hint: 'Adress',
          keyboardType: 'string',
          formGroup: 'onBoarding',
          formControlName: 'adress'

        },
        
      ]
    },
    
    
  ]



  @ViewChild('pager', { static: true }) pager: ElementRef;


  constructor(
    private page: Page,
    private formBuilder: FormBuilder,
    private pageService: PageService,
    private httpSerivce: HttpService) {

  }

  onAccountSelection(user) {
    if (user) {
      if (this.onBoardingForm.controls['userType']) {
        this.onBoardingForm.controls['userType'].setValue(user);
      }
    }
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.boxSize = deviceWidth * 0.35;

    this.pageSide = this.pageService.pageSidePadding();
    
    this.onBoardingForm = this.formBuilder.group({
      user_name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
      
      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      contact: new FormControl("", [Validators.required]),
      university: new FormControl("", [Validators.required]),
      department: new FormControl("", [Validators.required]),
      semester: new FormControl("", [Validators.required]),
      adress: new FormControl("", [Validators.required]),
      userType: new FormControl("", [Validators.required]),
    })



  }



  onSubmit() {
    console.log(this.onBoardingForm.value)
    this.httpSerivce.createProfile(this.onBoardingForm.value).subscribe((result) => {
      console.log(result + 'this is sign up');
      alert("Account Created");
    }, (error) => {
      console.log(error + 'error form sign up');
      alert("Account Not Created")
    });
  }

}


