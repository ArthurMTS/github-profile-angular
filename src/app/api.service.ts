import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface iUser {
  id: string;
  login: string;
  name: string;
  bio: string;
  "avatar_url": string;
  "html_url": string;
  "public_repos": number;
  followers: number;
  following: number;
}  

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<iUser> {
    return this.http.get<iUser>(`${this.apiUrl}/${username}`);
  }
}
