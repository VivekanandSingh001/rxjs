import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { AllComponent } from './observable/all/all.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

const routes: Routes = [
  {path:'observable',component:ObservableComponent,children:[
    {path:'',component:AllComponent},
    {path:'from',component:FromeventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'ofFrom',component:OfFromComponent},
    {path:'toArray',component:ToArrayComponent},
    {path:'**',component:AllComponent}
  ]},
  {path:'promise',component:PromiseComponent},
  {path:'',component:ObservableComponent},
  {path:'**',component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
