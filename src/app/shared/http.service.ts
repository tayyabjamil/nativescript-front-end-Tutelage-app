import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private serverUrl = "https://3e0b0047.ngrok.io";
  constructor(private http: HttpClient,
    private authService: AuthService) { }
  login(user) {   
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/login', { email: user.email, password: user.password, userType: user.userType }, { headers: headers });
  }
  getBiddingResponces(queryId) {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getBiddingResponces?profile_id=' + this.authService.getUser()
    + '&query_id=' + queryId, { headers: headers });
  }
  getBiddingProfiles(queryId) {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getBiddingProfiles?profile_id=' + this.authService.getUser()
     + '&query_id=' + queryId, {  headers: headers });
  }

  getUserQueries() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getUserQueries?id=' + this.authService.getUser(), { headers: headers });
  }
  getUserCourses() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getUserCourses?profile_id=' + this.authService.getUser(), { headers: headers });
  }

  getFolderAnnouncement(folderId) {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getFolderAnnouncement?profile_id='+ this.authService.getUser()+'&folder_id='+ folderId,{ headers: headers });
  }

  getUserProfile() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getUserProfile?id=' + this.authService.getUser(), { headers: headers });
  }

  getPeopleQueries() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/getPeopleQueries');
  }

  createCourses(newCourse) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createCourses',
      {
        profile_id: newCourse.profile_id,
        name: newCourse.name,
        duration: newCourse.duration,
        details: newCourse.details,
        modules:newCourse.modules
      }, { headers: headers });

  }
  createBiddings(newResponce,queryId) {  
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createBiddings',
      {
    
        profile_id: this.authService.getUser(),
        responce: newResponce.responce,
        queries_id: queryId
      }, { headers: headers });

  }

  createQuery(newQuery) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createQuery',
      {

        profile_id: newQuery.profile_id,
        title: newQuery.title,
        type: newQuery.type,
        toDate: newQuery.toDate,
        fromDate: newQuery.fromDate,
        adress: newQuery.adress,
        estimateAmount: newQuery.estimateAmount,
        description: newQuery.description,
        people: newQuery.people,
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

  createAnnouncements(newAnnouncement, folderId) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createAnnouncements',
      {
        title: newAnnouncement.title,
        type: newAnnouncement.type,
        deadline: newAnnouncement.deadline,
        description: newAnnouncement.description,
        profile_id: this.authService.getUser(),
        folder_id: folderId
      }, { headers: headers });
  }

  createFolders(newFolders) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createFolders',
      {
        profile_id: this.authService.getUser(),
        title: newFolders.title,
        class: newFolders.class,
        name: newFolders.name,
      }, { headers: headers });
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