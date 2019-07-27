import { Component, Input } from '@angular/core';
import { CommonService } from '../common.service';

interface Enemy {
  path: string;
  classification : string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(private commonService : CommonService){

    //intial get from creature DB to populate kill tracker
    this.commonService.readCreatures().subscribe((res)=> {
      console.log(res);
      this.creatureRes = res;
      //total exp
      this.totalExp =0;
      for(let i = 0; i <this.creatureRes.length; i++){
        this.totalExp += this.creatureRes[i].exp;
      }
    })
  }

  //modal states
  videoDisplay : boolean = false;
  boardDisplay : boolean = true;
  imageDisplay : boolean = true;
  settingsDisplay : boolean = false;
  trackerDisplay : boolean = false;
  killFormDispay : boolean = false;
  killDisplay : boolean = false;
  enemyPageDisplay : boolean = false;


 // -_-_-_-_-_-_-_-_-_- add enemy -_-_-_-_-_-_-_-_-_-_-_-_- //
//array of enemies template loops through
 enemies : Enemy[] = []

addEnemy(path : string, classification : string) {
  let newEnemy : Enemy = {
    path: path,
    classification: classification,
  }

  this.enemies.push(newEnemy);
}



  //properties for killed creature DB
  creature : string;
  classification : string;
  exp : number;
  cr : number;

  creatureRes : any;

  totalExp : number;

  addCreature(){
    const creatureObj = {
      creature: this.creature.toLocaleLowerCase(),
      classification : this.classification,
      exp : this.exp,
      cr : this.cr
    }
    console.log(creatureObj)
    this.commonService.postCreature(creatureObj).subscribe((res)=>{
      console.log(res);
    })

  }

  //properties for media SRCs. Default media placed in
  videoPath : string = '/assets/boardResources/board-videos/docks.m4v';

  imagePath : string = '/assets/boardResources/board-pictures/river-city.png';
}