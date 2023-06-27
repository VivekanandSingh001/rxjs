

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  LaptopAvaibility: any;
  isDellAvailable() {
    return true;
  }
  isHpAvailable() {
    return false;
  }
  constructor() {
  }
  //   dell={
  // brand:'dell',
  // hardDisk:'1TB',
  // core:'i3'
  //   }
  //   hp={
  //     brand:'hp',
  //     hardDisk:'2TB',
  //     core:'i7'
  //       }
  //       notAvailbale={
  //         status:'false',
  //         available:'not Available'
  //           }    
  ngOnInit(): void {
    //  let buyLaptop=new Promise((resolve,reject)=>{
    //     // reject('Promise is resolved');
    //     if(this.isDellAvailable()){
    //       return setTimeout(()=>{
    //         resolve('Dell Laptop is available');
    //       },3000)
    //     }else if(this.isHpAvailable()){
    //       return setTimeout(()=>{
    //         resolve('Hp Laptop is Available');
    //       },3000)
    //     }else{
    //       return setTimeout(()=>{
    //         reject('No Laptop is available');
    //       },3000)
    //     }
    //       });
    //  buyLaptop.then(res=>{
    //   console.log("'then code =>",res);
    //   this.LaptopAvaibility=res;
    //  }).catch(res=>{
    //   console.log(res);
    //   this.LaptopAvaibility=res;
    //  })     
  }
  dell = {
    brand: 'Dell',
    hardDisk: '2TB',
    color: 'black'
  };
  buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 3000)
  })
  fetch1(): void {
    const id1 = document.getElementById('result1');
    if (id1) {

      this.buyLaptop.then(res => {
        id1.innerText = JSON.stringify(res);
        console.log(res);
      })
    }
  }

  async fetch2() {
    const id2 = document.getElementById('result2');
    if (id2) {
      id2.innerText = "fetching data...";
      let data = await this.buyLaptop;
      id2.innerText = JSON.stringify(data);
      console.log(data);
    }
  }
  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').
    then(res => res.json());
  // fetch3(){
  //   const resu=document.getElementById('result3');
  // if(resu){
  //   resu.innerText='fetching data';
  //   this.buyLaptop2.then(res=>{
  //     console.log(res);
  //     resu.innerText=JSON.stringify(res);
  //   }
  //   )
  // }
  // }
  async fetch3() {
    const resu = document.getElementById('result3');
    if (resu) {
      resu.innerText = 'fetching data';
      let data = await this.buyLaptop2
      resu.innerText = JSON.stringify(data);
    }
  }
}
