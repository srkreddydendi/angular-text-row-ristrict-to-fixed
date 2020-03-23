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
    let line =1;
    let localName = this.name;
    for (let i = 0; i < localName.length ; i++) {
      //  console.log(this.name);
      //  console.log(k);

      if (i == line*22) {
        //  k=0;
        line ++;
        if(localName.charAt(i)!= " "){
             console.log(i);
      
          debugger
          let lastIndex = localName.lastIndexOf(" ");
          
          localName = localName.substring(0, lastIndex)+ "X" + localName.substring(lastIndex, localName.length);
          
        console.log("nameee " + localName);
        }//else{
         // this.name.concat("\n");
       // }
        //this.finalText = this.name;
       // console.log(k);
     //   console.log(name);
      //  k = 0;
      }// else {
       // k=i;
      //}
    }
  }
}
