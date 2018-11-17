import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) {}

  users: User[] = this.users;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["firstname", "lastname", "role", "deleteButton"];
  dataSource = new MatTableDataSource(this.users);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.userService.getAll().subscribe(
      (response: any) => {
        this.users = response;
        console.log(this.users);
        this.dataSource.data = this.users;
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  removeUserWithId(id: number) {
    const removeIndex = this.users
      .map(function(user) {
        return user.id;
      })
      .indexOf(id);
    this.users.splice(removeIndex, 1);
    this.dataSource.data = this.users;
  }

  onRemoveClick(user: any) {
    console.log(user);
    this.userService.removeUser(user).subscribe(
      (response: any) => {
        console.log(response);
        this.removeUserWithId(user.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  onRoleSelectionChange(user: User, selectedRole: string) {
    console.log(user);
    console.log(selectedRole);
    this.userService.updateRole(user, selectedRole).subscribe(
      (response: any) => {
        console.log(response);
        this.alertService.success("Zmieniono rolę uzytkownika");
      },
      error => {
        console.log(error);
      }
    );
  }
}
