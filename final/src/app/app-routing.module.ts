import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
 

const routes =[
     { path:'quiz', component: QuizComponent},
     { path:'', component: StartComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
