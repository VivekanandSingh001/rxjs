import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  IntervalSubscription?: Subscription;
  contain:any;
  ngOnInit(): void {
this.IntervalSubscription=timer(2000,1000).subscribe(res=>{
this.contain='video'+' '+res;
console.log(this.contain);
this.print(this.contain);
  if(res>=5){
this.IntervalSubscription?.unsubscribe();
  }
}
)
  }
  print(val:any){
    let id1= document.createElement('li');
   id1.innerText=val;
   document.getElementById('li2')?.append(id1);
   }
}
