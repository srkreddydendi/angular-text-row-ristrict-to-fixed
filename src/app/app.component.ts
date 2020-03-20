import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Angular 6";
  finalText = "";
  ouput = "";
  colLenght = 22;
  //k:number = 0;
  print() {
    let k=0;
    for (let i = 0; i < this.name.length; i++) {
      //  console.log(this.name);
      //  console.log(k);

      if (k == 22) {
        //  k=0;
        console.log(k);
        console.log(name);
        k = 0;
      } else {
        k=i;
      }
    }
  }
}
