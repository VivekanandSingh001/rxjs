import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, toArray,takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit{
  array:any=[];
  data1:any;
  data2:any;
  data3:any;
  ngOnInit(): void {
    const condition1= fromEvent(document,'click');
    this.array=['vivek','kumar','singh','saras','prince','anish','sonal','drum','train'];
   from(this.array).pipe(take(5)).subscribe(res=>{this.data1=res;
    this.print(this.data1);
  console.log("from =>",this.data1)})
   from(this.array).pipe(takeLast(5)).subscribe(data=>{
    this.data2=data;
    console.log('coming for takeLast =>',this.data2);
    this.print1(this.data2);
   })
   interval(1000).pipe(takeUntil(condition1)).subscribe(res=>{
    this.data3=res;
    this.print2(this.data3);
    console.log("interval => ",res);
   });
  }
  print(res:any){
  let el=document.createElement('li');
   el.innerText=res;
   document.getElementById('li1')?.appendChild(el); 
  }
  print1(res:any){
    let el=document.createElement('li');
     el.innerText=res;
     document.getElementById('li2')?.appendChild(el); 
    }
    print2(res:any){
      let el=document.createElement('li');
       el.innerText=res;
       document.getElementById('li3')?.appendChild(el); 
      }
}
