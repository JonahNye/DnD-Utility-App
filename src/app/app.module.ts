import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LogComponent } from './log/log.component';
import { MapComponent } from './map/map.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [

  {path: 'map', component: MapComponent},
  {path: '', component: LandingComponent},
  {path: 'board', component: BoardComponent},
  {path: 'log', component: LogComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LogComponent,
    MapComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
