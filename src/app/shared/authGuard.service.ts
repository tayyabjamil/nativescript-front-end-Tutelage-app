import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { getBoolean } from 'tns-core-modules/application-settings/application-settings';
import { RouterExtensions } from 'nativescript-angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private routerExtensions: RouterExtensions) { }

  canActivate(): boolean {
    if (getBoolean('userLoggedIn')) {
      return true;
    } else {  
      this.routerExtensions.navigate(['login']);
      return false;
    }
  }

}
