import { Component, OnInit, ViewChild } from "@angular/core";
import { ReservationService } from "../../services/reservation.service";
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-reservations-list",
  templateUrl: "./reservations-list.component.html",
  styleUrls: ["./reservations-list.component.css"]
})
export class ReservationsListComponent implements OnInit {
  constructor(private reservationService: ReservationService) {}

  reservations: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [
    "reservationId",
    "title",
    "isbn",
    "userId",
    "realiseButton"
  ];
  dataSource = new MatTableDataSource(this.reservations);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.reservationService.getAllReservations().subscribe(
      (response: any) => {
        this.reservations = response;
        console.log(this.reservations);
        this.dataSource.data = this.reservations;
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

  removeReservationWithId(id: number) {
    var removeIndex = this.reservations
      .map(function(reservation) {
        return reservation.reservation.id;
      })
      .indexOf(id);
    console.log(removeIndex);
    this.reservations.splice(removeIndex, 1);
    this.dataSource.data = this.reservations;
  }

  onRealiseClick(reservation: any) {
    console.log(reservation);
    var userId = reservation.reservation.userId;
    var isbn = reservation.book.isbn;
    var reservationId = reservation.reservation.id;
    console.log(reservationId);
    this.reservationService.removeReservation(reservationId).subscribe(
      (response: any) => {
        console.log(response);
        this.removeReservationWithId(reservationId);
        console.log("PO USUNIEICU");
        this.reservationService.realiseReservation(userId, isbn).subscribe(
          (response: any) => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
