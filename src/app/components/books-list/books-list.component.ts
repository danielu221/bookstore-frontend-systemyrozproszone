import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Book } from "../../models/book";
import { BookService } from "../../services/book.service";
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.css"]
})
export class BooksListComponent implements OnInit {
  constructor(
    private bookService: BookService,
    public dialog: MatDialog
  ) {}

  books: Book[];
  numOfCopies:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["title", "author", "availableCopies", "dateOfRelease","action"];
  dataSource = new MatTableDataSource(this.books);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.bookService.getAll().subscribe(
      (response: any) => {
        this.books = response;
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

  openDialog(book: Book){
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: {book: book}
    });


  }

}