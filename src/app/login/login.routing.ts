// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login.component";
import { OnBoardingFormComponent } from "./onBoardingForm/onBoardingForm.component";
import { OnBoardingFormteacherComponent } from "./onBoardingFormteacher/onBoardingFormteacher.component";
import { StartingpageComponent } from "./startingpage/startingpage.component";


export const routes: Routes = [
    {path: "", component:LoginComponent },
    {path: "login", component:LoginComponent },
    
    {path:"onBoardingForm",component:OnBoardingFormComponent},
    // {path:"onBoardingFormteacher",component:OnBoardingFormteacherComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class LoginRoutingModule { }