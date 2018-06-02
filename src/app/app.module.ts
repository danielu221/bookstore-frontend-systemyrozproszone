import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./layout_elements/header/header.component";
import { JumbotronComponent } from "./layout_elements/jumbotron/jumbotron.component";
import { HeadingComponent } from "./layout_elements/heading/heading.component";
import { RegisterComponent } from "./register/register.component";
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { BookService } from "./services/book.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JumbotronComponent,
    HeadingComponent,
    RegisterComponent,
    LoginComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
