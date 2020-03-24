import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Angular 6";

  ouput = "";
  colLenght = 22;
  //k:number = 0;
  print() {
    let k = 0;
    let line = 1;
    let finalText:string = "";
    let localName:string = this.name;
    localName = localName.replace(/\s/g, " ");
    for (var i = 0; i < localName.length; i++) {
      // console.log("i=  "+ i);

      if (i === line * 22) {
        if (localName.charAt(i) != " ") {
          debugger
         let index =  localName.substring(i-22, i).lastIndexOf(" ")
          let subStr = localName.substring(i-22, index).concat("X") + localName.substring(index, i);
         // for(let s in subStr){
           finalText= finalText + subStr;
          //}
          //subStr[subStr.length-2].concat("X")
          console.log();

        } else {
          finalText = finalText+ (localName.substring(i-22, i).concat("X"));
        }
        //this.finalText = this.name;
        // console.log(k);
        //   console.log(name);
        //  k = 0;
      }
    }
    console.log(finalText);
  }
}
