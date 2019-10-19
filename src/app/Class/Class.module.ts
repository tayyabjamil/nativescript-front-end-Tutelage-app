import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './Class.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NewannouncmentsComponent } from './newannouncments/newannouncments.component';
import { ClassRoutingModule } from './Class.routing';

import { DiscussionComponent } from './Discussion/Discussion.component';
import { FoldersComponent } from './Folders/Folders.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ThemeModule } from '../theme/theme.module';
import { NewfolderComponent } from './newfolder/newfolder.component';
import { PeopleComponent } from './People/People.component';
import { QuestionAnswersComponent } from './QuestionAnswers/QuestionAnswers.component';

@NgModule({
  imports: [
    CommonModule,
    ClassRoutingModule,
    NativeScriptUIListViewModule,
    NativeScriptCommonModule,
    ThemeModule
  ],
  declarations: [
    ClassComponent,
    AnnouncementsComponent,
    NewannouncmentsComponent,
    DiscussionComponent,
    FoldersComponent,
    NewfolderComponent,
    PeopleComponent,
    QuestionAnswersComponent
]
})
export class ClassModule { }
