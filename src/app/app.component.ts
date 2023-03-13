import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
   <input [value]="title" (keyup)="update()" #inputReference/> {{title}}
<!-- <input [placeholder]="title"
(keyup)="reactToKeyup($event)"
(click)="reactToClick($event)">   -->
<app-child [name]="data"
(click)="reactToClick($event)"
(break)="reactToBreak($event)"
(chrismas)="handleChristmas($event)"/>


    
  `,
  styles: []
})
export class AppComponent {
  title = 'afternoon';
  data= {first:"Lemessa", last:"Adugna"}
  reactToKeyup(e:Event){
    console.log(e)
  }
  reactToClick(e:Event){
    console.log(e)
  }
  reactToBreak(e:{n:number}){
    console.log(e)
  }
  handleChristmas(e:string){
    console.log(e)
   this.title=e;
  }

  @ViewChild('inputReference') myInputReference!:ElementRef<HTMLInputElement>;

  update(){
    this.title= this.myInputReference.nativeElement.value
  }
}
