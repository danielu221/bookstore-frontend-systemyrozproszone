import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {OrderService} from '../../services/order.service';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book';
import { OrderItem } from "src/app/models/order-item";

export interface DialogData {
  book: Book;
}

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(OrderService) private orderService: OrderService,
    @Inject(BookService) private bookService: BookService
  ) {}

  numOfCopies:string;
  errorMessage:string = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(){
    //1. get item from basket with specific id
    //2. get book from api
    //3. check numbers
    //4. make the call
    console.log(this.numOfCopies);
    var regex=/^[0-9]+$/;
    if(!this.numOfCopies.match(regex)){
      this.errorMessage = "Podana wartość nie jest liczbą";
      return;
    }

    let itemFromBasket = this.orderService.getSingleItem(this.data.book);
    this.bookService.getSingle(this.data.book.id).subscribe((response: any) => {
      let book = response;
      let sumCopiesFromBasketAndNewCopiesNumber;
      if(itemFromBasket !== undefined){
        sumCopiesFromBasketAndNewCopiesNumber = itemFromBasket.numOfCopies + Number.parseInt(this.numOfCopies);
      }
      if(itemFromBasket === undefined && (this.numOfCopies > book.availableCopies)){
        this.errorMessage = "Liczba egzemplarzy nie moze byc wieksza niz "+book.availableCopies;
        return;
      } else if (sumCopiesFromBasketAndNewCopiesNumber > book.availableCopies){
        let difference = book.availableCopies-itemFromBasket.numOfCopies;
        this.errorMessage = "Liczba egzemplarzy nie moze byc wieksza niz "+difference;
        return;
      } else {
        let orderItem = new OrderItem();
        orderItem.book = book;
        orderItem.numOfCopies = Number.parseInt(this.numOfCopies);
        this.orderService.addItemToOrder(orderItem);
        this.onNoClick();
      }
    },
    error => {
      console.log(error);
    })
  }

}
