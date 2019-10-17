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

            first_name: new FormControl("", [Validators.required]),
            last_name: new FormControl("", [Validators.required]),
            user_name: new FormControl("", [Validators.required]),
            contact: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [Validators.required]),
            confirmPassword: new FormControl("", [Validators.required]),
            university: new FormControl("", [Validators.required]),
            department: new FormControl("", [Validators.required]),
            semester: new FormControl("", [Validators.required]),
            adress: new FormControl("", [Validators.required]),
            userType: new FormControl("", [Validators.required]),
        })


        this.onBoarding = [
            {
                title: 'Personal Information',
                key: 'personalInfo'

            },
            {
                title: 'Professional Information',
                key: 'professionalInfo'
            },


            {
                title: 'Academics Information',
                key: 'contactInfo'
            },

        ];

    }

    
    onIndexChanged($event) {
        this.latestReceivedIndex = $event.value;
    }

    get formtitle() {
        if (this.onBoarding[this.currentPagerIndex].title) {
            return this.onBoarding[this.currentPagerIndex].title;
        }    }
    onSubmit() {
        this.httpSerivce.createProfile(this.onBoardingForm.value).subscribe((result) => {
            console.log(result + 'this is sign up');
        }, (error) => {
            console.log(error + 'error form sign up');
        });
    }

    public templateSelector = (item: any) => {
        switch (item.key) {
            case 'personalInfo': {
                return 'personalInfo'
            }
                break;
            case 'professionalInfo': {
                return 'professionalInfo'
            }
                break;
            case 'contactInfo': {
                return 'contactInfo'
            }
                break;

        }
    }
    onSelectedImage(img) {
        alert('image is selected');
    }
}

