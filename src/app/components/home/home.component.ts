import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  public headings: Array<Object>;

  ngOnInit() {
    this.headings = [
      {
        imageURL: "http://at4all.pbworks.com/f/Books.jpg",
        title: "Setki książek",
        text:
          "W naszej ofercie znajdziesz setki tytułów książek z całego świata. Posiadamy także obcojęzyczne egzemplarze. Na pewno znajdziesz coś dla siebie. ",
        btnText: "Więcej >>"
      },
      {
        imageURL: "http://www.pngmart.com/files/6/Clock-PNG-HD-279x279.png",
        title: "Oszczędność czasu",
        text:
          "Nasza biblioteka pozwala zaoszczędzić Twój cenny czas. Wystarczy żebyś się zalogował, a potem zarezerwował wymarzony tytuł. Teraz będziesz mieć pewność, że egzemplarz będzie Twój.",
        btnText: "Więcej >>"
      },
      {
        imageURL:
          "http://www.delawareright.com/wp-content/uploads/2015/01/chalkboard-math.jpg",
        title: "Proste korzystanie",
        text:
          "Nasza biblioteka pozwala zarezerwować interesującą Cię książkę za pomocą kilku kliknięć. Zasada działania jest prosta - rezerwujesz książkę, a potem odbierasz ją u nas. ",
        btnText: "Więcej >>"
      }
    ];
  }
}
