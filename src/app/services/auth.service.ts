import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { apiUrl } from "../constants/api";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  token: string;

  login(userEmail: string, userPassword: string) {
    return this.http.post(
      apiUrl + "/signin",
      {
        email: userEmail,
        password: userPassword
      },
      {
        observe: "response"
      }
    );
  }

  isAuthenticated() {
    const currentUser = this.userService.getCurrentUser();
    return currentUser !== null && currentUser !== undefined ;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    this.userService.setCurrentUser(null);
  }
}
