import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnDestroy{

  public Landscape : typeof Landscape = Landscape;

  public landscape : Landscape;
  currentLandscape : Landscape = Landscape.Valley;
  //tweak currentLandscape property

  transitionFadeState : boolean = true;
  
  mapState : boolean = false;
  logState : boolean = false;
  boardState : boolean = false;

changeBackground(){

  if (this.currentLandscape === Landscape.Gorge){
    this.transitionFadeState = false;
    this.currentLandscape = Landscape.Valley;
    this.transitionFadeState = true;
  }

  else if (this.currentLandscape === Landscape.Valley){
    this.transitionFadeState = false;
    this.currentLandscape = Landscape.WFall;
    this.transitionFadeState = true;
  }

  else if (this.currentLandscape === Landscape.WFall){
    this.transitionFadeState = false;
    this.currentLandscape = Landscape.Zadash;
    this.transitionFadeState = true;
  }

  else if (this.currentLandscape === Landscape.Zadash){
    this.transitionFadeState = false;
    this.currentLandscape = Landscape.Emon;
    this.transitionFadeState = true;
  }

  else if (this.currentLandscape === Landscape.Emon){
    this.transitionFadeState = false;
    this.currentLandscape = Landscape.Gorge;
    this.transitionFadeState = true;
  }

}
 x = setInterval(() => {this.changeBackground(); }, 15000);

 ngOnDestroy(){
  clearInterval(this.x);
}

}
  

enum Landscape {
  Emon,
  Gorge,
  Valley,
  WFall,
  Zadash
}