import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientId = 'Iv1.25c0be755228cbfe';
  private clientSecret = '256d7b01386a6fc185d5af1d1365bc40c01fa599';

  constructor(private http:HttpClient) {
    console.log("Service works");
    this.username = 'NyawiraMuturi';
   }
   getProfileDetails() {
    return this.http.get<any>("https://api.github.com/users/" + this.username + "?client_id" + this.clientId
    + "&client_secret" + this.clientSecret).pipe(
      map(response => response))
   }
   getProfileRepos() {
    return this.http.get<any>("https://api.github.com/users/" + this.username + "/repos?client_id" + this.clientId
    + "&client_secret" + this.clientSecret).pipe(
      map(response => response))
   }
   updateProfile(visitorUsername: string){
    this.username = visitorUsername;
   }
}
