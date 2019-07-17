import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  videoDisplay : boolean = false;
  boardDisplay : boolean = true;
  imageDisplay : boolean = true;
  settingsDisplay : boolean = false;

  videoPath : string = '/assets/boardResources/board-videos/docks.m4v';

  imagePath : string = '/assets/boardResources/board-pictures/river-city.png';
}