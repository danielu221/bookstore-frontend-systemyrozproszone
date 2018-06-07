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
import { ReservationsListComponent } from "./components/reservations-list/reservations-list.component";
import { RentStoryComponent } from "./components/rent-story/rent-story.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "addBook",
    component: AddBookComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: "ADMINISTRATOR"
    }
  },
  {
    path: "editBook",
    component: EditBookComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: "ADMINISTRATOR"
    }
  },
  {
    path: "editUser",
    component: EditUserComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: "ADMINISTRATOR"
    }
  },
  {
    path: "reservationsList",
    component: ReservationsListComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: "ADMINISTRATOR"
    }
  },
  {
    path: "rentStory",
    component: RentStoryComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: "USER"
    }
  },
  {
    path: "booksList",
    component: BooksListComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: "USER"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
