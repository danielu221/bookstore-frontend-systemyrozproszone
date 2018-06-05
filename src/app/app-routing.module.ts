import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./login/login.component";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { RoleGuardService } from "./services/role-guard.service";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { EditBookComponent } from "./components/edit-book/edit-book.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "addBook", component: AddBookComponent },
  { path: "editBook", component: EditBookComponent },
  {
    path: "booksList",
    component: BooksListComponent
    // ,
    // canActivate: [RoleGuardService],
    // data: {
    //   expectedRole: "ADMINISTRATOR"
    // }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
