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

  removeBookWithISBN(isbn: string) {
    var removeIndex = this.books
      .map(function(book) {
        return book.isbn;
      })
      .indexOf(isbn);
    this.books.splice(removeIndex, 1);
    this.dataSource.data = this.books;
  }

  onRemoveClick(book: any) {
    console.log(book);
    this.bookService.removeBook(book).subscribe(
      (response: any) => {
        console.log(response);
        this.removeBookWithISBN(book.isbn);
        this.alertService.success("Usunięto tytuł: " + book.title);
      },
      error => {
        console.log(error);
      }
    );
  }
}

const ELEMENT_DATA: Book[] = [
  {
    isbn: "9780439023480",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    dateOfRelease: 1199149200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439554930",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    dateOfRelease: 852080400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780061120080",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    dateOfRelease: -315615600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780743273560",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    dateOfRelease: -1420066800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780525478810",
    title: "The Fault in Our Stars",
    author: "John Green",
    dateOfRelease: 1325379600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781416524790",
    title: "Angels & Demons ",
    author: "Dan Brown",
    dateOfRelease: 946688400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780679783270",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    dateOfRelease: -4954431600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781594480000",
    title: "The Kite Runner ",
    author: "Khaled Hosseini",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780062024040",
    title: "Divergent",
    author: "Veronica Roth",
    dateOfRelease: 1293843600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780451524940",
    title: "Nineteen Eighty-Four",
    author: "George Orwell, Erich Fromm",
    dateOfRelease: -662684400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780452284240",
    title: "Animal Farm: A Fairy Story",
    author: "George Orwell",
    dateOfRelease: -788914800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780553296980",
    title: "Het Achterhuis: Dagboekbrieven 14 juni 1942 - 1 augustus 1944",
    author: "Anne Frank, Eleanor Roosevelt, B.M. Mooyaart-Doubleday",
    dateOfRelease: -725842800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307269750",
    title: "The Girl with the Dragon Tattoo (Millennium, #1)",
    author: "Stieg Larsson, Reg Keeland",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439023500",
    title: "Catching Fire",
    author: "Suzanne Collins",
    dateOfRelease: 1230771600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439655480",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling, Rufus Beck",
    dateOfRelease: 915152400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780618346260",
    title: " The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    dateOfRelease: -504918000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439023510",
    title: "Mockingjay",
    author: "Suzanne Collins",
    dateOfRelease: 1262307600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439358070",
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780316166680",
    title: "The Lovely Bones",
    author: "Alice Sebold",
    dateOfRelease: 1009846800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439064870",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    dateOfRelease: 883616400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439139600",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    dateOfRelease: 946688400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780545010220",
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    dateOfRelease: 1167613200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307277670",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439785970",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780140283330",
    title: "Lord of the Flies ",
    author: "William Golding",
    dateOfRelease: -504918000000,
    numberOfCopies: 5,
    availableCopies: 5
  }
];
