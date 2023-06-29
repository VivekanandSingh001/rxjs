import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  array: any = [];
  array1: any = [];
  forDisplay: any = [];
  myColor:any;
  subscribeInterval: any = Subscription;
  subscribeInterval1: any = Subscription;
  ngOnInit(): void {
    this.array = ["vivek", "kumar", "singh", "saras", "sittu", "prince", "sonal", "anish", "ankit", "roshsan"];
    this.array1 = ["Red", "Green", "Yellow", "Orange", "Blue", "Grey"];
    this.subscribeInterval = interval(1500).pipe(tap(res => { if (res == 10) { this.subscribeInterval.unsubscribe() } }),
      map(res => this.array[res])).subscribe(res => {
        this.print(res);
        console.log("interval =>", res);
      })
      this.subscribeInterval1 = interval(1500).pipe(tap(res=>{this.myColor=this.array1[res];  if (res == 6) { this.subscribeInterval1.unsubscribe()  }}),
      map(res => this.array1[res])).subscribe(res => {
        this.print1(res);
        console.log("interval1 =>", res);
      })
  }
  print(val: any) {
    let id1 = document.createElement('li');
    id1.innerText = val;
    document.getElementById('li2')?.append(id1);
  }
  print1(val: any) {
    let id1 = document.createElement('li');
    id1.innerText = val;
    document.getElementById('li1')?.append(id1);
  }
}
