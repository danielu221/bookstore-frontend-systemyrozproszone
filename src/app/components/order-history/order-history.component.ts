import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import {OrderService} from '../../services/order.service';
import {HistoryItem} from '../../models/history-item';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  historyItems: HistoryItem[] = [];
  currentUser;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["orderId", "orderDate", "totalPrice", "orderStatus","details"];
  dataSource = new MatTableDataSource(this.historyItems);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.currentUser = this.userService.getCurrentUser();
    if(this.currentUser.role.rolename === 'ADMINISTRATOR'){
      this.orderService.getAllOrderHistory().subscribe((response:HistoryItem[])=>{
        this.historyItems = response
        this.dataSource.data = response;
      });
    } else {
      this.orderService.getOrderHistory().subscribe((response:HistoryItem[])=>{
        this.historyItems = response
        this.dataSource.data = response;
      });
    }
  }

  onStatusSelectionChange(historyItem: HistoryItem, selectedStatus: string) {
    this.orderService.updateOrderStatus(historyItem.id, selectedStatus).subscribe(
      (response: any) => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
