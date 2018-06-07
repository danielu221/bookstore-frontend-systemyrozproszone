import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  });

  loggedUserData: User;

  ngOnInit() {}

  onLoginClick(userEmail, userPassword) {
    console.log(userEmail, userPassword);
    this.authService.login(userEmail, userPassword).subscribe(
      (response: any) => {
        console.log(response.headers.get("Authorization"));
        this.authService.token = response.headers.get("Authorization");
        this.userService.setCurrentUser(response.body);
      },
      error => {
        console.log(error);
      }
    );
  }
}
