import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { PagerModule } from "nativescript-pager/angular";
import { OnBoardingFormComponent } from './onBoardingForm/onBoardingForm.component';
import { OnBoardingFormteacherComponent } from './onBoardingFormteacher/onBoardingFormteacher.component';
import { ThemeModule } from '../theme/theme.module';
import { StartingpageComponent } from './startingpage/startingpage.component';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    LoginRoutingModule,
    ThemeModule,
    PagerModule,
   ],
  declarations: [
    LoginComponent, 
    OnBoardingFormComponent,
    StartingpageComponent
    // OnBoardingFormteacherComponent,
  ]
})

export class LoginModule { }
