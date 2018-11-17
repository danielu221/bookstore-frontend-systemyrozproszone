import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../models/user";
import { apiUrl } from "../constants/api";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(apiUrl + "/user");
  }

  register(user: User) {
    return this.http.post(apiUrl + "/user/signup", user, {
      responseType: "text"
    });
  }

  login(userEmail: string, userPassword: string) {
    return this.http.post(apiUrl + "/signin", {
      email: userEmail,
      password: userPassword
    });
  }

  update(user: User) {
    return this.http.put(apiUrl + "/user/update/" + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(apiUrl + "/user/delete/" + id);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  setCurrentUser(user: User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getCurrentUserRolename(){
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return currentUser.role.rolename;
    } else {
      return null;
    }
  }

  updateRole(user: User, rolename: string) {
    return this.http.put(
      apiUrl + "/user/role/" + user.id + "/" + rolename,
      {},
      {
        responseType: "text"
      }
    );
  }

  removeUser(user: User) {
    return this.http.delete(apiUrl + "/user/delete/" + user.id, {
      responseType: "text"
    });
  }
}
