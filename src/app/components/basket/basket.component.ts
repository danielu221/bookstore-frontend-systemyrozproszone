import { Component, OnInit, ViewChild,ChangeDetectorRef } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import {MatDialog} from '@angular/material';
import {OrderService} from '../../services/order.service';
import {OrderItem} from '../../models/order-item';
import * as moment from 'moment';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    public dialog: MatDialog,
  ) {}

  orderItems: OrderItem[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["title", "author", "numOfCopies", "dateOfRelease","action"];
  dataSource = new MatTableDataSource(this.orderItems);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.orderItems = this.orderService.getAllOrderItems();
    this.dataSource.data = this.orderItems;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  removeItemFromOrder = (item: OrderItem) => {
    let index = this.orderItems.findIndex(orderItem =>  {return orderItem.book.id === item.book.id});
    if(index !== -1){
      this.orderItems.splice(index, 1);
      this.dataSource.data = this.orderItems;
      this.orderService.removeItemFromOrder(item);
    }
  }

  placeTheOrder = () => {
    let orderInfo = {};
    orderInfo['orderDate'] = moment().format('YYYY-MM-DD');
    orderInfo['bookItems'] = [];
    this.orderItems.forEach((item) => {
      let bookItem = {};
      bookItem['id'] = item.book.id;
      bookItem['units'] = item.numOfCopies;
      orderInfo['bookItems'].push(bookItem);
    })
    this.orderService.placeTheOrder(orderInfo).subscribe((response:any)=>{
      // console.log(response);
      //CLEANUP
      this.dataSource.data = [];
      this.orderService.clearBasket();
    });
  }
  
}
