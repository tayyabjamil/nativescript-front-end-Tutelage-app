import { Injectable } from '@angular/core';
import { setBoolean, clear, setString, getString, setNumber, getNumber } from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLoggedIn(user) {
    setNumber('userId', user[0].id);
    setString('userType', user[0].userType);
    setBoolean('userLoggedIn', true);
  }

  getUserType() {
    return getString('userType');
  }
  removeLoggedIn() {
    clear();
  }

  getUser() {
    if (getNumber('userId')) {
      return getNumber('userId');
    }
  }

}
