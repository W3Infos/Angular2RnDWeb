import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {


        console.log("login");
        let data = { username: username, password: password,grant_type:'password' };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/token', data, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);

                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //ssessionStorage.setItem('currentUser', JSON.stringify(user));
                    sessionStorage.setItem('accessToken', user.token);


                }

                return user;
            });





        //let headers: Headers = new Headers();
        //headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        //headers.append("Content-Type", "application/x-www-form-urlencoded");
        //return this._http.post(url, data, { headers: headers })
      
        //return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))

        //return this.http.get('http://localhost:15383/api/user/', { headers: headers })
        //    .map((response: Response) => {
        //        // login successful if there's a jwt token in the response
        //        let user = response.json();
                
        //        if (user && user.token) {
        //            // store user details and jwt token in local storage to keep user logged in between page refreshes
        //            localStorage.setItem('currentUser', JSON.stringify(user));
                   
                    
        //        }

        //        return user;
        //    });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}