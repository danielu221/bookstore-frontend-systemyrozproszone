import { Component, OnInit, ViewChild } from "@angular/core";
import { Book } from "../../models/book";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { BookService } from "../../services/book.service";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.css"]
})
export class EditBookComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private alertService: AlertService
  ) {}

  books: Book[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [
    "title",
    "author",
    "numberOfCopies",
    "dateOfRelease",
    "deleteButton"
  ];
  dataSource = new MatTableDataSource(this.books);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.bookService.getAll().subscribe(
      (response: any) => {
        this.books = response;
        console.log(this.books);
        this.dataSource.data = this.books;
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onAddClick(book: any) {
    console.log(book);
    this.bookService.updateBook(book).subscribe(
      (response: any) => {
        console.log(response);
        this.alertService.success("Zaktualizowano liczbę egzemplarzy");
      },
      error => {
        console.log(error);
      }
    );
  }

  // removeBookWithISBN(isbn: string) {
  //   const removeIndex = this.books
  //     .map(function(book) {
  //       return book.isbn;
  //     })
  //     .indexOf(isbn);
  //   this.books.splice(removeIndex, 1);
  //   this.dataSource.data = this.books;
  // }

  // onRemoveClick(book: any) {
  //   console.log(book);
  //   this.bookService.removeBook(book).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.removeBookWithISBN(book.isbn);
  //       this.alertService.success("Usunięto tytuł: " + book.title);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}