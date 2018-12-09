import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { RoleGuardService } from "./services/role-guard.service";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { EditBookComponent } from "./components/edit-book/edit-book.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import {SearchInOtherBookstoresComponent} from "./components/search-in-other-bookstores/search-in-other-bookstores.component";
import { BasketComponent } from "./components/basket/basket.component";
import {OrderHistoryComponent} from "./components/order-history/order-history.component";
import {OrderHistoryDetailsComponent} from "./components/order-history-details/order-history-details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", redirectTo: "" },
  {
    path: "addBook",
    component: AddBookComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["ADMINISTRATOR"]
    }
  },
  {
    path: "editBook",
    component: EditBookComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["ADMINISTRATOR"]
    }
  },
  {
    path: "editUser",
    component: EditUserComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["ADMINISTRATOR"]
    }
  },
  {
    path: "orderHistoryAll",
    component: OrderHistoryComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["ADMINISTRATOR"]
    }
  },
  {
    path: "searchInOtherBookstores",
    component: SearchInOtherBookstoresComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["USER"]
    }
  },
  {
    path: "orderHistory",
    component: OrderHistoryComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["USER"]
    }
  },
  {
    path: "orderHistoryDetails/:id",
    component: OrderHistoryDetailsComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["USER","ADMINISTRATOR"]
    }
  },
  {
    path: "booksList",
    component: BooksListComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["USER"]
    }
  },
  {
    path: "basket",
    component: BasketComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: ["USER"]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
