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
    let k=0;
    let line =1;
   let  finalText = "";
    let localName = this.name;
    localName = localName.replace(/\s/g, " ")
    for (var i = 0; i < localName.length ; i++) {
       // console.log("i=  "+ i);
        

      if (i === line*22) {
      //  console.log(i+ " "+ line*22+ " " + (i == line*22));
        //  k=0;
       
      //  console.log(i + " "+ localName.charAt(i)!= " ");
        if(localName.charAt(i)!= " "){
             
      
          debugger
          let lastIndex = localName.substring(0, line*22).lastIndexOf(" ");
          
          
         finalText = finalText+  localName.substring(line-1, lastIndex)+ "X" + localName.substring(lastIndex, localName.length);
           line ++;
        console.log("nameee " + finalText);
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
