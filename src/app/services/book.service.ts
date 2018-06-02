import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { apiUrl } from "../constants/api";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(apiUrl + "/book/all");
  }

  //   getById(id: number) {
  //     return this.http.get("/api/user/");
  //   }
}
