import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  implements OnInit{
  filterByLength:any=[];
  filterByGender:any=[];
  fiterByNth:any=[];
  array:any[]=[
    {id:"1",name:"vivek"},
    {id:"2",name:"kumar"},
    {id:"3",name:"singh"},
    {id:"4",name:"saras"},
    {id:"5",name:"sittu"},
    {id:"6",name:"prince"},
    {id:"7",name:"sonal"},
    {id:"8",name:"anish"},
    {id:"9",name:"ankit"},
    {id:"10",name:"roshsan"}
  ];
  array1:any[]=[
    {id:"1",name:"vivek",gender:'Male'},
    {id:"2",name:"kumar",gender:'Female'},
    {id:"3",name:"singh",gender:'Male'},
    {id:"4",name:"saras",gender:'Female'},
    {id:"5",name:"sittu",gender:'Male'},
    {id:"6",name:"prince",gender:'Female'},
    {id:"7",name:"sonal",gender:'Male'},
    {id:"8",name:"anish",gender:'Female'},
    {id:"9",name:"ankit",gender:'Male'},
    {id:"10",name:"roshsan",gender:'Male'}
  ];
  array2:any[]=[
    {id:"1",name:"abijctui"},
    {id:"2",name:"eegb"},
    {id:"3",name:"efgnhbe"},
    {id:"4",name:"mmhe"},
    {id:"5",name:"ijkmmmueu"},
    {id:"6",name:"klmjjheh"},
    {id:"7",name:"mnoijiueu"},
    {id:"8",name:"opqhjiieh"},
    {id:"9",name:"qrsu"},
    {id:"10",name:"asbc"}
  ];
  ngOnInit(): void {
    from(this.array).pipe(filter(array=>array.name.length>5),toArray()).subscribe(res=>{
      this.filterByLength=res;
      console.log(this.filterByLength)
    })
from(this.array1).pipe(filter(array1=>array1.gender=='Male'),toArray()).subscribe(res=>{
  this.filterByGender=res;
  console.log('Coming from array1=>',res)
})
from(this.array2).pipe(filter(array2=>array2.id<=5),toArray()).subscribe(res=>{
  this.fiterByNth=res;
  console.log('coming from filtering the Nth terms => ',this.fiterByNth)
})
  }

}
