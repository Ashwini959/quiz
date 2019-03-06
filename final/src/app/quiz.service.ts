import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class QuizService {
 constructor(private http: HttpClient){}

 getData(url:string):Observable<Product>{
  return this.http.get<Product>(url);
  }
}
export class Product{
  final_arr: any [];
  question_txt: string;
  correct_ans: string;
  option: any [];
}