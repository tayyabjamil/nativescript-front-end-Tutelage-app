// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NewannouncmentsComponent } from "./newannouncments/newannouncments.component";
import { AnnouncementsComponent } from "./announcements/announcements.component";
import { DiscussionComponent } from "./Discussion/Discussion.component";
import { FoldersComponent } from "./Folders/Folders.component";
import { NewfolderComponent } from "./newfolder/newfolder.component";
import { QuestionAnswersComponent } from "./QuestionAnswers/QuestionAnswers.component";
import { PeopleComponent } from "./People/People.component";

export const routes: Routes = [
    {
        path: "", component: PeopleComponent
    },
    { path: "newannounce", component: NewannouncmentsComponent },
    { path: "announcments", component: AnnouncementsComponent },
    { path: "discussion", component: DiscussionComponent },
    { path: "folders", component: FoldersComponent },
    { path: "newfolder", component:NewfolderComponent},
    { path:"QnAs",component:QuestionAnswersComponent},
    {path:"people",component:PeopleComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class ClassRoutingModule { }