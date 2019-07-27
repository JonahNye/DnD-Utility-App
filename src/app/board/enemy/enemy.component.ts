import { Component, OnInit, Input } from '@angular/core';

interface Enemy {
  path: string;
  classification : string;
}

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css']
})
export class EnemyComponent {

  @Input() enemy : Enemy;

  constructor() { 

  }

  //-_-_-_-_-_-_-__-__-- Status Properties and method -_-_-_-_-_-_-_-_-//
  statusDisplay : boolean = false;

  poisoned : boolean = false; //limegreen
  restrained : boolean = false; //
  afraid : boolean = false; //yellow
  grappled : boolean = false; //brown
  disadvantageAgainst : boolean = false; //low purple opacity overlay
  advantageAgainst : boolean = false; //low red opacity overlay
  onFire : boolean = false; //red
  ethereal : boolean = false //light blue overlay
  hidden : boolean = false //low opacity


  //method to return style based on state

  background : string = "background-color"

  getCondition(){
    if (this.poisoned === true) {
      return {background : "lime"}
    }
    else if (this.afraid === true) {
      return {background : "yellow"}
    }
    else if (this.grappled === true) {
      return {background : "sienna"}
    }
    else if (this.disadvantageAgainst === true) {
      return {background : "purple"}
    }
    else if (this.advantageAgainst === true){
      return {background : "crimson"}
    }
    else if (this.hidden === true) {
      return {background : "black"}
    }
    else if (this.ethereal === true) {
      return {background : "cyan"}
    }
    else if (this.onFire === true) {
      return {background : "orange"}
    }
    
  }

  //-_-_-_-_-_-_-_-_-_-_ Rotation Property and method -_-_-_-_-_-_-_-//

  rotateDisplay : boolean = false;
  
  face12 : boolean = false;

  face3 : boolean = false;

  face6 : boolean = false;

  face9 : boolean = false;

  rotate(clock){
    if (clock === 12){
      this.face12 = true;
      this.face3 = false;
      this.face6 = false;
      this.face9 = false;
    }

    else if (clock === 3) {
      this.face12 = false;
      this.face3 = true;
      this.face6 = false;
      this.face9 = false;
    }

    else if (clock === 6) {
      this.face12 = false;
      this.face3 = false;
      this.face6 = true;
      this.face9 = false;
    }

    else if (clock === 9) {
      this.face12 = false;
      this.face3 = false;
      this.face6 = false;
      this.face9 = true;
    }
  }

}
