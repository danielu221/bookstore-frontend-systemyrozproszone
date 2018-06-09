import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { AlertService } from "../../services/alert.service";
import { RentService } from "../../services/rent.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-rent-story",
  templateUrl: "./rent-story.component.html",
  styleUrls: ["./rent-story.component.css"]
})
export class RentStoryComponent implements OnInit {
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private rentService: RentService
  ) {}

  rents: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [
    "title",
    "author",
    "borrowDate",
    "borrowReturnDate",
    "fee"
  ];
  dataSource = new MatTableDataSource(this.rents);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.rentService
      .getRentsListForUser(this.userService.getCurrentUser().id)
      .subscribe(
        (response: any) => {
          this.rents = response;
          console.log(this.rents);
          this.dataSource.data = this.rents;
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
}
