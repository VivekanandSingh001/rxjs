import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit,AfterViewInit{
  @ViewChild("btnClick") btn?:ElementRef;
  val: any;
  ngOnInit(): void {
   
  }
ngAfterViewInit(): void {
  let count=1;
  let val:any;
  fromEvent(this.btn?.nativeElement,'click').subscribe(res=>{
    val='video'+' '+ count++;
    console.log(val);
    this.print(val);
   })
}
print(val:any){
 let id1= document.createElement('li');
id1.innerText=val;
document.getElementById('li2')?.append(id1);
}
}
