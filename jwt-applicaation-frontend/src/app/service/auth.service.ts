import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  baseUrl = "http://localhost:8080/api/v1/auth";

  constructor(private httpClient: HttpClient) { }

  login(email:string, password:string) {
    const user = {email, password};
    this.isLoggedIn = true;
    return this.httpClient.post(`${this.baseUrl}/authenticate`, user);
  }

  register(user: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, user);
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
