import { Component,Input,ViewChild,OnInit} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import {GoogleBooksService} from '../../services/google-books.service';
import {GoogleBook} from '../../models/google-book';

@Component({
  selector: 'app-search-in-other-bookstores',
  templateUrl: './search-in-other-bookstores.component.html',
  styleUrls: ['./search-in-other-bookstores.component.css']
})
export class SearchInOtherBookstoresComponent implements OnInit {
  @Input()
  searchPhrase:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["title", "author", "preview","action"];
  dataSource: MatTableDataSource<GoogleBook[]>;

  constructor(private googleBooksService:GoogleBooksService) {}

  ngOnInit(){
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(localStorage.getItem(`${currentUser.email}lastSearchPhrase`)){
      this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem(`${currentUser.email}lastGoogleBooks`)));
      this.dataSource.paginator = this.paginator;
      this.searchPhrase = localStorage.getItem(`${currentUser.email}lastSearchPhrase`);
    } else {
      this.dataSource = new MatTableDataSource();
    }
  }

  searchInGoogleBooks = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    localStorage.setItem(`${currentUser.email}lastSearchPhrase`,this.searchPhrase);
    this.googleBooksService.getBooksByQuery(this.searchPhrase).subscribe((googleBooks)=>{
      this.dataSource = new MatTableDataSource(googleBooks);
      this.dataSource.data = googleBooks;
      this.dataSource.paginator = this.paginator;
    });
  }

  onKey = (event) => {
    var key=event.keyCode || event.which;
    if (key==13){
      this.searchInGoogleBooks();
    }
  }

}
