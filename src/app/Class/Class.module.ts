import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './Class.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NewannouncmentsComponent } from './newannouncments/newannouncments.component';
import { ClassRoutingModule } from './Class.routing';
import { NotificationsComponent } from './Notifications/Notifications.component';
import { DiscussionComponent } from './Discussion/Discussion.component';
import { FoldersComponent } from './Folders/Folders.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  imports: [
    CommonModule,
    ClassRoutingModule,
    NativeScriptUIListViewModule,
    NativeScriptCommonModule

  ],
  declarations: [
    ClassComponent,
    AnnouncementsComponent,
    NewannouncmentsComponent,
    NotificationsComponent,
    DiscussionComponent,
    FoldersComponent
]
})
export class ClassModule { }
