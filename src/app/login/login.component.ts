import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { PageService } from '../theme/services/page.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpService } from '../shared/http.service';
import { setBoolean } from "tns-core-modules/application-settings";
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('scrollView', { static: true }) scrollView: ElementRef;
  @Output() public childEvent = new EventEmitter();

  userType;
  isLoggingIn: boolean = true;
  rform: FormGroup
  pageSide;
  isBusy = false;
iconSize;
  constructor(private page: Page, private formBuilder: FormBuilder, private pageService: PageService,
    private routerExtensions: RouterExtensions,
    private httpService: HttpService,
    private authService: AuthService) { }

  ngOnInit() {
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.page.actionBarHidden = true;

    this.pageSide = this.pageService.pageSidePadding();

    this.iconSize = deviceWidth * 0.095;
    this.rform = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      userType: new FormControl('', Validators.required),
    });
  }

  onAccountSelection(user) {
    if (user) {
      if (this.rform.controls['userType']) {
        this.rform.controls['userType'].setValue(user);
      }
    }
  }

  login() {
    if (this.rform.controls['userType'].valid) {
      if (this.rform.valid) {
        this.isBusy = true;
        this.httpService.login(this.rform.value).subscribe(result => {
          console.log(result);
          this.isBusy = false;
          if ((<any>result).length !== 0) {
            this.authService.setLoggedIn([result[0]]);
            this.routerExtensions.navigate(['home']);
          } else {
            alert('username & email not found');
          }
        }, (error) => {
          this.isBusy = false;
          console.log(error)
        })
      }
    } else {
      alert('please select user type');
    }
  }

  signup() {
    this.routerExtensions.navigate(['login/onBoardingForm'])
  }
}


