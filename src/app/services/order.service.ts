import { Injectable } from "@angular/core";
import { OrderItem } from "../models/order-item";
import { BookService } from "../services/book.service";
import { Book } from "../models/book";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrl } from "../constants/api";
import { Observable } from "rxjs";
import { HistoryItem } from "../models/history-item";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  //items curruntly present in basket
  items: OrderItem[] = [];
  //order history of currently logged in user
  orderHistory: HistoryItem[] = [];
  orderItemSubscription;

  constructor(private bookService: BookService, private http: HttpClient) {
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
    localStorage.setItem("basketItems", JSON.stringify(this.items));
  };

  removeItemFromOrder = (item: OrderItem) => {
    let index = this.items.findIndex(orderItem => {
      return orderItem.book.id === item.book.id;
    });
    if (index !== -1) this.items.splice(index, 1);
    localStorage.setItem("basketItems", JSON.stringify(this.items));
  };

  getAllOrderItems = () => {
    return this.items;
  };

  getSingleItem = (book: Book) => {
    return this.items.find(basketItem => {
      return basketItem.book.id === book.id;
    });
  };

  clearBasket = () => {
    this.items = [];
    localStorage.setItem("basketItems", JSON.stringify(this.items));
  };

  getOrderItemsFromLocalStorage = () => {
    if (localStorage.getItem("basketItems") !== null) {
      return JSON.parse(localStorage.getItem("basketItems"));
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
          console.log(orderHistory);
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
}
