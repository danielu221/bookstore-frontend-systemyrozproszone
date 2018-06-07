import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}
  userRole: string;
  ngOnInit() {}

  getUserRole() {
    if (this.userService.currentUser) {
      this.userRole = this.userService.currentUser.role;
      return this.userRole;
    } else {
      return "";
    }
  }
}
