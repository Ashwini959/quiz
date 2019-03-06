import { Component, OnInit } from '@angular/core';
import { QuizService, Product } from '../quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  length : any;  test1: any;  test2: any;
  i:any=0;  id :any;  btnDisable: any;
  btn_next:any;  keys_: any;
    product: Product = new Product;
  product1: Product=  new Product;
 constructor(private quiz: QuizService){}
  ngOnInit(){
    this.btnDisable= true;
    this.btn_next= false;
        this.quiz.getData('./assets/myFile.json')
          .subscribe(data =>{
          this.product= data
        //  this.test1=this.product["final_arr"]
          this.keys_=Object.keys(this.product["final_arr"]);
          this.id= Object.keys(this.product["final_arr"]).shift();
          this.length= Object.keys(this.product["final_arr"]).length;
          this.product1=this.product["final_arr"][this.id];
                  }); 
     }  
   
    next(){
       if(this.i<this.length){
        this.i++
        this.id=this.keys_[this.i]
            if(this.id!=this.keys_[0]){
                 this.btnDisable= false;
                }
                console.log(this.id)
                if(this.id==this.keys_[length-1]){
                  console.log(this.id)
                  console.log(this.keys_[length-1])
                  this.btn_next= true
                }
       this.product1=this.product["final_arr"][this.id];
       return this.id;
       }
       }       

   previous(){
     if(this.i<this.length){
      this.i--;
      this.id=this.keys_[this.i]
        if(this.id==this.keys_[0]){
            this.btnDisable= true;
          } 
      this.product1=this.product["final_arr"][this.id];
      return this.id;
       }
     } 
     submit(){
      
     }
}  