import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { apiUrl } from "../constants/api";

@Injectable()
export class ReservationService {
  constructor(private http: HttpClient) {}

  reserveBook(userId: number, isbn: string) {
    return this.http.post(
      apiUrl + "/reservation/create/" + userId + "/" + isbn,
      {}
    );
  }

  realiseReservation(userId: number, isbn: string) {
    return this.http.post(
      apiUrl + "/borrow/create/" + userId + "/" + isbn,
      {},
      {
        responseType: "text"
      }
    );
  }

  getReservationForUser(userId: number) {
    return this.http.get(apiUrl + "/reservation/user/" + userId);
  }

  removeReservation(reservationId: number) {
    return this.http.delete(apiUrl + "/reservation/delete/" + reservationId);
  }

  getAllReservations() {
    return this.http.get(apiUrl + "/reservation/all");
  }
}
