import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probar',
  templateUrl: './probar.component.html',
  styleUrls: ['./probar.component.scss']
})
export class ProbarComponent implements OnInit {
  data = ["Louis Agassiz","Ukichiro Nakaya","Nikola Tesla","Albert Einstein","Louis Pasteur",
          "Thomas Alva Edison","Brahmagupta","Abdul","kalam","Marie Curie"];
       select = [];  
       val = 0; 
       count;
  constructor() { }

  ngOnInit() {
    for(let i=0;i<this.data.length;i++)
    this.select.push(false);
    console.log(this.select);
  }
  checkChange(index){
    console.log(index)
  console.log(this.data[index])
    //  if(this.data[index ] === names){
    //   console.log(this.select[index])
    //  }
    

     if(this.select[index]){
      this.val = this.val + 10;
     }
     else{
      
       this.val = this.val - 10;
     }
  }
}
