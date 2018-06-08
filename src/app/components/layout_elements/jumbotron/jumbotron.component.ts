import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-jumbotron",
  templateUrl: "./jumbotron.component.html",
  styleUrls: ["./jumbotron.component.css"]
})
export class JumbotronComponent implements OnInit {
  @Input() h1Text: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
