import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit{
  // Msg:any=[];
  Msg:any;
  ngOnInit(): void {
  let OfRxjs=of('vivek','kumar','singh');
  let OfRxjs2=of({a:'vivek',b:'kumar',c:'singh'});
  OfRxjs.subscribe(res=>{
    this.print(res);
    console.log("Coming From Of Operators in Rxjs",res);
  })
  OfRxjs2.subscribe(res=>{
    this.Msg=res;
    console.log("Coming From Of Operators in Rxjs of object",this.Msg);
  }
  )
  //using From for Arrays
  let FromRxjs=from(['my','name','is','vivek','singh']);
  FromRxjs.subscribe(res=>{
    console.log('coming from FROM rxjs libray',res);
    this.print(res);
  })
    // Using From for Strings
    let FromRxjs1=from('my name is vivek singh');
  FromRxjs1.subscribe(res=>{
    console.log('coming from FROM rxjs libray',res);
  })
  }

  print(val:any){
    let id1= document.createElement('li');
   id1.innerText=val;
   document.getElementById('li2')?.append(id1);
   }
}
