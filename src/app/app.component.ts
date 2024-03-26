import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animations';
  entrie:string='';
  class:string='';
  class2:string='';
  class3:string='';
  timeDelay:number=0
  duration:number=1

  clickE(entrie:string){
   this.class = '';
   setTimeout(() => {
     this.class = entrie
   });
  }

  clickEph(entrie:string){
   this.class2 = '';
   setTimeout(() => {
     this.class2 = entrie
   });
  }

  clickL(entrie:string){
   this.class3 = '';
   setTimeout(() => {
     this.class3 = entrie
   });
  }
}
