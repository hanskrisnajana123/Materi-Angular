import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Bro";

  item = [{
    nama : "Buah Keju",
    harga : 10000
  }, {
    nama : "Buah Semangka",
    harga : 30000
  }]

  itemArr = [1,2,3,4]

  show : boolean = true

  user = {
    nama : "Adm00n"

  }
}
