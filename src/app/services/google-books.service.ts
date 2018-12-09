import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GoogleBook } from "../models/google-book";

@Injectable({
  providedIn: "root"
})
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooksByQuery = (query: string) => {
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`;
    return this.http.get(apiUrl).map((observer: any) => {
      //extract all the data into googleBooks here
      let googleBooks = [];
      observer.items.forEach(item => {
        let googleBook = new GoogleBook();
        googleBook.title = item.volumeInfo.title;
        googleBook.preview = item.volumeInfo.previewLink;
        if (!item.saleInfo.buyLink) {
          googleBook.buyLink = "Brak mozliwosci";
        } else {
          googleBook.buyLink = item.saleInfo.buyLink;
        }
        if (!item.volumeInfo.authors) {
          googleBook.authors = ["Brak autora"];
        } else {
          googleBook.authors = item.volumeInfo.authors;
        }
        googleBooks.push(googleBook);
      });
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      localStorage.setItem(`${currentUser.email}lastGoogleBooks`,JSON.stringify(googleBooks));
      return googleBooks;
    });
  };
}
