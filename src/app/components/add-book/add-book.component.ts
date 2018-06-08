import { Component, OnInit } from "@angular/core";
import { BookService } from "../../services/book.service";
import { Book } from "../../models/book";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private alertService: AlertService
  ) {}
  book: Book = {
    isbn: "",
    title: "",
    author: "",
    dateOfRelease: 0,
    numberOfCopies: 1,
    availableCopies: 1
  };

  ngOnInit() {}
  onAddClick() {
    this.book.availableCopies = this.book.numberOfCopies;
    this.bookService.addBook(this.book).subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        // this.alertService.success('Registration successful', true);
        // this.router.navigate(['/login']);
        console.log(data);
        this.alertService.success("Dodano nową ksiązkę");
      },
      error => {
        // this.alertService.error(error);
        // this.loading = false;
        console.log(error);
      }
    );
  }
}
