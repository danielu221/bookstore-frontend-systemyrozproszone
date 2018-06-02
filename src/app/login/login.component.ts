import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  });

  ngOnInit() {}

  onLoginClick(userEmail, userPassword) {
    console.log(userEmail, userPassword);
    this.userService.login(userEmail, userPassword).subscribe((data: any) => {
      console.log(data);
    });
  }
}
