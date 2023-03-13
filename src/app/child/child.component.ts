import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{name.first}} {{name.last}}
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent {
  @Input() name:{first:String, last:String}={first:"", last:""}

  @Output() break :EventEmitter<{n:number}> =new EventEmitter();
  @Output()chrismas :EventEmitter<string> =new EventEmitter();
  count=0;
   constructor(){
    setInterval(()=>{
   this.count=this.count+1;
   this.break.emit({n:this.count})
   this.chrismas.emit(`The count is ${this.count}`)
    }, 3000)
   }

}
