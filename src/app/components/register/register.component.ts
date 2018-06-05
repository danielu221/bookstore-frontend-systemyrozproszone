import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onRegisterClick() {
    console.log(this.user);
    this.userService.register(this.user).subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        // this.alertService.success('Registration successful', true);
        // this.router.navigate(['/login']);
        console.log(data);
      },
      error => {
        // this.alertService.error(error);
        // this.loading = false;
        console.log(error);
      }
    );
  }
}
