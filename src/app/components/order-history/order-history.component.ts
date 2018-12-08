import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import {OrderService} from '../../services/order.service';
import {HistoryItem} from '../../models/history-item';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  constructor(
    private orderService: OrderService
  ) {}

  historyItems: HistoryItem[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["orderId", "orderDate", "totalPrice", "orderStatus","details"];
  dataSource = new MatTableDataSource(this.historyItems);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.orderService.getOrderHistory().subscribe((response:HistoryItem[])=>{
      this.historyItems = response
      this.dataSource.data = response;
    });
  }

}
