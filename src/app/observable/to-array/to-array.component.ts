import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  a:any[]=[];
  b:any[]=[];
  c:any[]=[];
  forUnsubcribe?: Subscription;
   Array=[{name:'vivek',skills:'html,bootstrap'},
   {name:'kumar',skills:'java'},
   {name:'singh',skills:'Data structure'}];
  ngOnInit(): void {
    this.forUnsubcribe = interval(1000).pipe(
      take(5),
      toArray()).subscribe(res => {
        console.log(res);
        this.a=res;
        // if(res>=5){
        //   this.forUnsubcribe?.unsubscribe();
        // }
      })
    let forRxjs1=of('vivek','kumar','singh');
    forRxjs1.pipe(toArray()).subscribe(res=>{
      this.b=res;
      console.log(res)
    })  
    let Rxjs2=from(this.Array).pipe(toArray()).subscribe(res=>{
      this.c=res;
      console.log(res);
    })
  }

}
