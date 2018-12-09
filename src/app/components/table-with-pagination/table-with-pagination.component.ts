
import { Component,Input,ViewChild,OnInit,OnChanges} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import {GoogleBook} from '../../models/google-book';

@Component({
  selector: 'app-table-with-pagination',
  templateUrl: './table-with-pagination.component.html',
  styleUrls: ['./table-with-pagination.component.css']
})
export class TableWithPaginationComponent implements OnInit,OnChanges {

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["title", "author", "preview","action"];
  @Input()
  dataSource: MatTableDataSource<GoogleBook[]>;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(){
    this.dataSource.paginator = this.paginator;
  }

}
