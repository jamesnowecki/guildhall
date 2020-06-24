import { Component, OnInit } from '@angular/core';
import mockPlayer from "../../assets/mock-game-state";
import { ProfessionCard } from '../templates/profession-card';
import { VPCard } from '../templates/vp-card';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit {

  incompleteChapters: any = mockPlayer.incompleteChapters;
  completeChapters: any = mockPlayer.completeChapters;
  hand: ProfessionCard[] = mockPlayer.hand;
  VPArray: VPCard[] = mockPlayer.vpArray;
  playerCards = mockPlayer;
  victoryTokens = mockPlayer.victoryTokens;
  score: number = mockPlayer.victoryTokens + this.getCardScore(this.VPArray);

  constructor() { }

  getCardScore(VPArray: VPCard[]): number {
    let total: number = 0;
    VPArray.forEach(card => {
      total = total + card.value;
    });
    return total;
  }

  ngOnInit(): void {
  }

}
