// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NewannouncmentsComponent } from "./newannouncments/newannouncments.component";
import { AnnouncementsComponent } from "./announcements/announcements.component";
import { NotificationsComponent } from "./Notifications/Notifications.component";
import { DiscussionComponent } from "./Discussion/Discussion.component";
import { FoldersComponent } from "./Folders/Folders.component";

export const routes: Routes = [
    {
        path: "", component: FoldersComponent
    },
    { path: "newannounce", component: NewannouncmentsComponent },
    { path: "announcments", component: AnnouncementsComponent },
    { path: "notifications", component: NotificationsComponent },
    { path: "discussion", component: DiscussionComponent },
    { path: "folders", component: FoldersComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class ClassRoutingModule { }