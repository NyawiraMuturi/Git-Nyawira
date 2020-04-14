import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientId = environment.githubClientID;
  private clientSecret = environment.githubClientsecret;

  constructor(private http:HttpClient) {
    console.log("Service works");
    this.username = 'NyawiraMuturi';
   }
   getProfileDetails() {
    return this.http.get<any>("https://api.github.com/users/" + this.username + "?client_id" + this.clientId
    + "&client_secret" + this.clientSecret).pipe(
      map(response => response))
   }

}
