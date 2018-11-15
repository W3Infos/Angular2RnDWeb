import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
declare var $ : any;
@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        let username = $("#username").val();
        let password = $("#password").val();
        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this.http.get('http://localhost:15383/api/user/', { headers:headers }).map((response: Response) => response.json());
    }
    
    getById(id: number) {
        //return this.http.get('http://localhost:15383/api/user/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {

        console.log(user);
        //let userData = JSON.stringify(user);
        //let headers = new Headers();
        //headers.append("Content-Type", "application/json");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //console.log(userData);
        //return this.http.post('http://localhost:15383/api/user/createUsers', userData, this.jwt()).map((response: Response) => response.json());


        return this.http.post('http://localhost:15383/api/user/createUsers', user, options).map((response: Response) => response.json());
    }

    update(user: User) {
        //return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        //return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    //private jwt() {
  
    //    // create authorization header with jwt token
    //    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //    //let currentUser = JSON.parse(localStorage.getItem(this.create.name));

    //    console.log("CurrentUser: "+currentUser);
    //    if (currentUser && currentUser.token) {
    //        let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //        return new RequestOptions({ headers: headers });
    //    }
    //}
}