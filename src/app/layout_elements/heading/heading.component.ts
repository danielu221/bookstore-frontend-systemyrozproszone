import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.css"]
})
export class HeadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() title: string;
  @Input() btnText: string;
  @Input() imageURL: string;
}
