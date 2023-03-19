import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequest } from './loginrequest';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticateUser(username: string, password: string) {
    throw new Error('Method not implemented.');
  }

  private apiBaseUrl = 'http://localhost:9091/user';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Origin-Api': 'angular-app'
    });
  }

  signUpUser(user: User): Observable<any> {
    const headers = this.getHeaders();
    const url = `${this.apiBaseUrl}/signup`;
    return this.http.post(url, user, { headers });
  }

  loginUser(loginRequest: LoginRequest): Observable<any> {
    const headers = this.getHeaders();
    const url = `${this.apiBaseUrl}/login`;
    return this.http.post(url, loginRequest, { headers });
  }

  userDetails(username: String): Observable<any> {
    const headers = this.getHeaders();
    const url = `${this.apiBaseUrl}/userdetails/${username}`;
    return this.http.get(url, { headers });
  }
}