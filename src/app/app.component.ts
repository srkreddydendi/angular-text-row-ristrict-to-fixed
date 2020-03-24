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
    let lastSpace = 0;
    for (var i = 0; i < localName.length; i++) {
      // console.log("i=  "+ i);
      if(localName.charAt(i) == " "){
        lastSpace = i;
      }

      if (i === line * 22) {
        line++;
        if (localName.charAt(i) != " ") {
          debugger
         let str =  localName.substring(i-22, i);
        // var index = str.lastIndexOf(" ")
         let a = localName.substring(i-22, lastSpace)
         let b = localName.substring(lastSpace, i)
          let subStr = a+ "X" + b;
         // for(let s in subStr){
           finalText= finalText + subStr;
          //}
          //subStr[subStr.length-2].concat("X")
        //  console.log(subStr);

        } else {
          finalText = finalText+ (localName.charAt(i));
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
