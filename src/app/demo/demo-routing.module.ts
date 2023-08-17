import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo8Component } from './demo8/demo8.component';
import { CreateTrackComponent } from './demo8/create-track/create-track.component';

const routes: Routes = [
  //Liste de tous les liens enfants de Demo
  { path : "demo1" , component : Demo1Component },
  { path : "demo2" , component : Demo2Component },
  { path : "demo3" , component : Demo3Component },
  { path : "demo4" , component : Demo4Component },
  { path : "demo5" , component : Demo5Component },
  { path : "demo6" , component : Demo6Component },
  { path : "demo8", component : Demo8Component },
  { path : "demo8/create" , component : CreateTrackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
