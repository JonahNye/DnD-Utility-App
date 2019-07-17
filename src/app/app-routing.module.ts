//imports from angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
//iports from your app
import {MapComponent} from './map/map.component';
import {LandingComponent} from './landing/landing.component'
import { BoardComponent } from './board/board.component';
import { LogComponent } from './log/log.component';

const appRoutes: Routes = [
  
  {path: 'map', component: MapComponent},
  {path: '', component: LandingComponent},
  {path: 'board', component: BoardComponent},
  {path: 'log', component: LogComponent}
]

@NgModule({
  declarations: [
    MapComponent
  ],

  exports: [ RouterModule],

  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AppRoutingModule { }