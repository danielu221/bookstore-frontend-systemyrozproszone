import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { apiUrl } from "../constants/api";
import { Book } from "../models/book";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(apiUrl + "/book");
  }

  addBook(book: Book) {
    return this.http.post(apiUrl + "/book", book, {
      responseType: "text"
    });
  }

  reserveBook(userId: number, isbn: string) {
    return this.http.post(
      apiUrl + "/reservation/create/" + userId + "/" + isbn,
      {}
    );
  }

  updateBook(book: Book) {
    return this.http.put(apiUrl + "/book/" + book.id, book);
  }

  removeBook(book: Book) {
    return this.http.delete(apiUrl + "/book/" + book.id, {
      responseType: "text"
    });
  }
}
