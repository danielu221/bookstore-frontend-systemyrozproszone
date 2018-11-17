import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}
  userRole: string;
  ngOnInit() {}

  getUserRole() {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.userRole = currentUser.role.rolename;
      return this.userRole;
    } else {
      return "";
    }
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
