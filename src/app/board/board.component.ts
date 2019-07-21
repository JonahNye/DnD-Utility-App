import { Component } from '@angular/core';
import { CommonService } from '../common.service';

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

  //properties for killed creature DB
  creature : string;
  classification : string;
  exp : number;
  cr : number;

  creatureRes : any;

  totalExp : number;

  addCreature(){
    let creatureObj = {
      creature: this.creature,
      classification : this.classification,
      exp : this.exp,
      cr : this.cr
    }

    this.commonService.postCreature(creatureObj).subscribe((res)=>{
      console.log(res);
    })

  }

  //properties for media SRCs
  videoPath : string = '/assets/boardResources/board-videos/docks.m4v';

  imagePath : string = '/assets/boardResources/board-pictures/river-city.png';
}