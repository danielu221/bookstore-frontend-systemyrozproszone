import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./components/layout_elements/header/header.component";
import { JumbotronComponent } from "./components/layout_elements/jumbotron/jumbotron.component";
import { HeadingComponent } from "./components/layout_elements/heading/heading.component";
import { RegisterComponent } from "./components/register/register.component";
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatDialogModule,
  MatSelectModule,
  MatButtonModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { BookService } from "./services/book.service";
import { AuthService } from "./services/auth.service";
import { MatPaginatorIntlPL } from "./constants/matPaginatorPL";
import { ReservationsListComponent } from "./components/reservations-list/reservations-list.component";
import { RoleGuardService } from "./services/role-guard.service";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomHttpInterceptor } from "./constants/custom-http-interceptor";
import { EditBookComponent } from "./components/edit-book/edit-book.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { RentStoryComponent } from "./components/rent-story/rent-story.component";
import { ReservationService } from "./services/reservation.service";
import { AlertComponent } from "./components/alert/alert.component";
import { AlertService } from "./services/alert.service";
import { RentService } from "./services/rent.service";
import { DialogComponent } from './components/dialog/dialog.component';
import { BasketComponent } from './components/basket/basket.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderHistoryDetailsComponent } from './components/order-history-details/order-history-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JumbotronComponent,
    HeadingComponent,
    RegisterComponent,
    LoginComponent,
    BooksListComponent,
    ReservationsListComponent,
    AddBookComponent,
    EditBookComponent,
    EditUserComponent,
    RentStoryComponent,
    AlertComponent,
    DialogComponent,
    BasketComponent,
    OrderHistoryComponent,
    OrderHistoryDetailsComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    UserService,
    BookService,
    RoleGuardService,
    ReservationService,
    RentService,
    AlertService,
    AuthService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPL },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
