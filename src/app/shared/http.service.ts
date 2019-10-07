import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverUrl = "https://c50f56dd.ngrok.io";
  constructor(private http: HttpClient,
    private authService: AuthService) { }
  getUserQueries() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getUserQueries?id='+ this.authService.getUser(), { headers: headers });
  }

  getUserProfile() {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/getUserProfile?id='+ this.authService.getUser(), { headers: headers });
   }
  getPeopleQueries(){
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl +'/api/getPeopleQueries');
  }
  createQueries(newQuery) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createQueries',
      {
        profile_id:newQuery.profile_id,
        title: newQuery.title,
        type: newQuery.type,
        toDate: newQuery.toDate,
        fromDate: newQuery.fromDate,
        adress: newQuery.adress,
        estimateAmount: newQuery.estimateAmount,
        description: newQuery.description,
      }, { headers: headers });
  }
  createProfile(newUser) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createProfile',
      {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        user_name: newUser.user_name,
        contact: newUser.contact,
        email: newUser.email,
        password: newUser.password,
        university: newUser.university,
        department: newUser.department,
        semester: newUser.semester,
        adress: newUser.adress,
        userType: newUser.userType
      }, { headers: headers });
  }
    
  login(user) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/login', { email: user.email, password: user.password, userType: user.userType }, { headers: headers });
  }

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      // "AuthKey": "my-key",
      // "AuthToken": "my-token",
      "Content-Type": "application/json",

    });
    return headers;
  }

}