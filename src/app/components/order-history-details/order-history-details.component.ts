import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { OrderService } from "../../services/order.service";
import { HistoryItemDetail } from "../../models/history-item-detail";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-order-history-details",
  templateUrl: "./order-history-details.component.html",
  styleUrls: ["./order-history-details.component.css"]
})
export class OrderHistoryDetailsComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  historyItemOrderDetails: HistoryItemDetail[];
  private sub: any;
  id: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [
    "title",
    "author",
    "numOfCopies",
    "unitPrice",
    "totalPrice"
  ];
  dataSource = new MatTableDataSource(this.historyItemOrderDetails);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
      // order details
      //corner case kiedy strona jest otwarta bezposrednio z zakladek
      //wtedy trzeba najpierw pobrac cal historie aby wyswietlic jeden order detail
      if (this.orderService.orderHistory.length === 0) {
        this.orderService.getOrderHistory().subscribe(response => {
          let singleHistoryItem = response.find((orderHistoryItem) => {
            return orderHistoryItem.id === this.id;
          })
          this.historyItemOrderDetails = singleHistoryItem.orderDetails;
          this.dataSource.data = singleHistoryItem.orderDetails;
        });
      } else {
        let singleHistoryItem = this.orderService.getSingleHistoryItem(this.id);
        this.historyItemOrderDetails = singleHistoryItem.orderDetails;
        this.dataSource.data = singleHistoryItem.orderDetails;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
