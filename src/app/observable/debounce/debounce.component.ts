import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements AfterViewInit {
  @ViewChild('myInput') myInput?:ElementRef;
  @ViewChild('myInput1') myInput1?:ElementRef;
  mydata:any;
  mydata1:any;
ngAfterViewInit(): void {
 fromEvent<any>(this.myInput?.nativeElement,'keyup').pipe(map(data=>data.target.value),debounceTime(1000)).subscribe(
  res=>{
    this.mydata=res;
    console.log(res)})
    fromEvent<any>(this.myInput1?.nativeElement,'keyup').pipe(map(data=>data.target.value),debounceTime(1000),distinctUntilChanged()).subscribe(
      res=>{
        this.mydata1=res;
        console.log(res)})
}


}
