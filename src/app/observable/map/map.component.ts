import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  SubscribeInterval?:Subscription;
  SubscribeInterval1?:Subscription;
  Map1:any;
  Map2:any;
  items:any=[];
  array1=[
    {name:'vivek',job:'angular',title:{
      desription:'angular developer',
      experience:'10 years'
    }},
    {name:'kumar',job:'java',title:{
      desription:'java developer',
      experience:'15 years'
    }},
    {name:'singh',job:'vuejs',title:{
      desription:'vuejs developer',
      experience:'16 years'
    }},
    {name:'saras',job:'javascript',title:{
      desription:'javascript developer',
      experience:'5 years'
    }}
  ]
  ngOnInit(): void {
    this.SubscribeInterval=interval(1000).pipe(map(data=>'video  '+data 
    )).subscribe(
      data=>{
        this.Map1=data;
        console.log('data=>',data);
      }
    );
    const RxjsFrom=from([{id:'0',name:'js'},
    {id:'1',name:'vivek'},
    {id:'2',name:'kumar'},
    {id:'3',name:'singh'},
    {id:'4',name:'angular'},
  ]);
  RxjsFrom.pipe(map(data=>data.name)).
  subscribe(data=>{console.log('from=>',data)
  this.print(data);
});
this.SubscribeInterval1=interval(1000).pipe(map(data=>'10*data =>  '+10*data)).subscribe(data=>{
  this.Map2=data;
  console.log(data,'10*data')
});
    setTimeout(()=>{
      this.SubscribeInterval?.unsubscribe();
      this.SubscribeInterval1?.unsubscribe();
    },10000);
    from(this.array1).pipe(pluck('title','experience'),toArray()).subscribe(data=>{this.items=data;
      console.log("I am coming from FROM operator in Rxjs",data);
    })
  }
  print(val:any){
    let id1= document.createElement('li');
   id1.innerText=val;
   document.getElementById('li3')?.append(id1);
   }

}
