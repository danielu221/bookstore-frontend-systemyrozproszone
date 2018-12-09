import { Injectable } from "@angular/core";
import { OrderItem } from "../models/order-item";
import { Book } from "../models/book";
import { HttpClient} from "@angular/common/http";
import { apiUrl } from "../constants/api";
import { Observable } from "rxjs";
import { HistoryItem } from "../models/history-item";
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: "root"
})
export class OrderService {
  //items curruntly present in basket
  items: OrderItem[] = [];
  //order history of currently logged in user
  orderHistory: HistoryItem[] = [];
  orderItemSubscription;

  constructor(private userService:UserService,private http: HttpClient) {
    this.items = this.getOrderItemsFromLocalStorage();
  }

  addItemToOrder = (item: OrderItem) => {
    let index = this.items.findIndex(orderItem => {
      return orderItem.book.id === item.book.id;
    });
    if (index === -1) {
      this.items.push(item);
    } else {
      let existingItem = this.items[index];
      existingItem.numOfCopies = existingItem.numOfCopies + item.numOfCopies;
    }
    let currentUser = this.userService.getCurrentUser();
    localStorage.setItem(`${currentUser.email}basketItems`, JSON.stringify(this.items));
  };

  removeItemFromOrder = (item: OrderItem) => {
    let index = this.items.findIndex(orderItem => {
      return orderItem.book.id === item.book.id;
    });
    if (index !== -1) this.items.splice(index, 1);
    let currentUser = this.userService.getCurrentUser();
    localStorage.setItem(`${currentUser.email}basketItems`, JSON.stringify(this.items));
  };

  getAllOrderItems = () => {
    return this.getOrderItemsFromLocalStorage();
  };

  getSingleItem = (book: Book) => {
    return this.items.find(basketItem => {
      return basketItem.book.id === book.id;
    });
  };

  clearBasket = () => {
    this.items = [];
    let currentUser = this.userService.getCurrentUser();
    localStorage.setItem(`${currentUser.email}basketItems`, JSON.stringify(this.items));
  };

  getOrderItemsFromLocalStorage = () => {
    let currentUser = this.userService.getCurrentUser();
    if (localStorage.getItem(`${currentUser.email}basketItems`) !== null) {
      return JSON.parse(localStorage.getItem(`${currentUser.email}basketItems`));
    }
    return [];
  };

  placeTheOrder = (orderInfo: any) => {
    return this.http.post(apiUrl + "/order", orderInfo, {
      responseType: "text"
    });
  };

  getOrderHistory = () => {
    return this.http
      .get<HistoryItem[]>(apiUrl + "/order/user")
      .pipe((observableResponse: Observable<HistoryItem[]>) => {
        observableResponse.subscribe(orderHistory => {
          this.orderHistory = orderHistory;
        });
        return observableResponse;
      });
  };

  getAllOrderHistory = () => {
    return this.http
      .get<HistoryItem[]>(apiUrl + "/order")
      .pipe((observableResponse: Observable<HistoryItem[]>) => {
        observableResponse.subscribe(orderHistory => {
          this.orderHistory = orderHistory;
        });
        return observableResponse;
      });
  };

  getSingleHistoryItem = (id:number) => {
    return this.orderHistory.find((orderHistoryItem) => {
      return orderHistoryItem.id === id;
    })
  };

  updateOrderStatus = (id:number,status:string) => {
    let requestBody = {};
    requestBody['orderId'] = id;
    requestBody['status'] = status;
    return this.http.put(apiUrl + "/order",requestBody,{
      responseType: "text"
    })
  };


}
