import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { apiUrl } from "../constants/api";

@Injectable()
export class RentService {
  constructor(private http: HttpClient) {}

  getRentsListForUser(userId: number) {
    return this.http.get(apiUrl + "/borrow/user/" + userId);
  }
}
