import { Component, Input } from '@angular/core';

interface Ship {
  path: string;
  type : string;
}

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent{

    @Input() ship : ShipComponent;
  constructor() { }

  deckDisplay : boolean = false;

  topDisplay : boolean = true;
  midDisplay : boolean = false;
  bottomDisplay : boolean = false;

  changeDeck(choice){
    if (choice === "top") {
      this.topDisplay = true;
      this.midDisplay = false;
      this.bottomDisplay = false;
    }

    else if (choice === "mid") {
      this.topDisplay = false;
      this.midDisplay = true;
      this.bottomDisplay = false;
    }

    else if (choice === "bottom"){
      this.topDisplay = false;
      this.midDisplay = false;
      this.bottomDisplay = true;
    }
  }

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
