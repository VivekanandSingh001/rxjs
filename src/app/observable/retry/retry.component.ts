import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit{
  array1:any=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
   
  }
fetchDetails(){
  this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
    retryWhen(err=>err.pipe(delay(1500),
    scan((Count)=>{
      if(Count<=5){
        throw err;
      }else{
        Count++;
        console.log("Count =>",Count);
         return Count;
      }
    },0)
    ))
  ).subscribe(res=>{
    this.array1=res;
  })
}
}
