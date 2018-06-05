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
  MatDialogModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { BookService } from "./services/book.service";
import { AuthService } from "./services/auth.service";
import { MatPaginatorIntlPL } from "./constants/matPaginatorPL";
import { ReservationsListComponent } from "./components/reservations-list/reservations-list.component";
import { RoleGuardService } from "./services/role-guard.service";
import { AddBookComponent } from './components/add-book/add-book.component';

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
    AddBookComponent
  ],
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
    MatDialogModule
  ],
  providers: [
    UserService,
    BookService,
    RoleGuardService,
    AuthService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
