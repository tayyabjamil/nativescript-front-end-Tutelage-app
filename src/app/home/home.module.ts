import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeRoutingModule } from './home.routing';
import { CoursesComponent } from './courses/courses.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { QueriesComponent } from './Queries/Queries.component';
import { NewqueryComponent } from './Newquery/Newquery.component';
import { ThemeModule } from '../theme/theme.module';
import { BiddinglistComponent } from './biddinglist/biddinglist.component';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { MyfeedComponent } from './myfeed/myfeed.component';
import { DropDownModule } from "nativescript-drop-down/angular";
import { AllQueriesComponent } from './allQueries/allQueries.component';
import { RegisterCoursesComponent } from './registerCourses/registerCourses.component';
import { NewCourseformComponent } from './newCourseform/newCourseform.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { SendRequestPageComponent } from './sendRequestPage/sendRequestPage.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    ThemeModule,
    NativeScriptUIListViewModule,
    DropDownModule,
    NativeScriptUISideDrawerModule,
  ],
  declarations: [
    HomeComponent,
    CoursesComponent,
    MessagesComponent,
    ProfileComponent,
    QueriesComponent,
    NewqueryComponent,
    BiddinglistComponent,
    MyfeedComponent,
    AllQueriesComponent,
    RegisterCoursesComponent,
    NewCourseformComponent,
    SendRequestPageComponent
  ]
})
export class HomeModule { }
