import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { apiUrl } from "../constants/api";
import { Book } from "../models/book";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(apiUrl + "/book/all");
  }

  addBook(book: Book) {
    return this.http.post(apiUrl + "/book/create", book);
  }
  //   getById(id: number) {
  //     return this.http.get("/api/user/");
  //   }
}
