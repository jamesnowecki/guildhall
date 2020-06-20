import { Component, OnInit } from '@angular/core';
import mockPlayer from "../../assets/mock-game-state";
import { ProfessionCard } from '../templates/profession-card';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit {

  incompleteChapters: any = mockPlayer.guildhall.incompleteChapters
  hand: ProfessionCard[] = mockPlayer.hand;
  playerCards = mockPlayer;
  constructor() { }

  ngOnInit(): void {
    console.log(this.playerCards.guildhall);
  }

}
