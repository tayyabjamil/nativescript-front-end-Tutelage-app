import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AuthGuardService } from "./shared/authGuard.service";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" }, // lazy loaded module
    { path: "onBoardingForm", loadChildren: "./login/login.module#LoginModule" },
    { path: "onBoardingFormteacher", loadChildren: "./login/login.module#LoginModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule", canActivate: [AuthGuardService]  },
    { path: "announce", loadChildren: "./home/home.module#HomeModule", canActivate: [AuthGuardService]  },
          
];  
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }