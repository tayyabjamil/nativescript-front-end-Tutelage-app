import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
 import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { LoginModule } from "./login/login.module";
import { ThemeModule } from "./theme/theme.module";
import { DataService } from "./data.service";
import { HttpService } from "./shared/http.service";
import { AuthService } from "./shared/auth.service";
import { AuthGuardService } from "./shared/authGuard.service";
// import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      ThemeModule,
      LoginModule,
      NativeScriptHttpClientModule,
      //NativeScriptUIListViewModule
   ],
   declarations: [
      AppComponent,
   
   ],
   providers: [
      DataService,
      HttpService,
      AuthService,
      AuthGuardService
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
