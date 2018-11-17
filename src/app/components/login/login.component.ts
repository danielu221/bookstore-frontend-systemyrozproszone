import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
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
        console.log(response.body);
        this.authService.setToken(response.headers.get("Authorization"));
        this.userService.setCurrentUser(response.body);
        this.router.navigate([""]);
      },
      error => {
        this.alertService.error("Podano niepoprawne dane.Spróbuj jeszcze raz.");
        console.log(error);
      }
    );
  }
}
