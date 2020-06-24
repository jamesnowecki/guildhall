import { Component, OnInit } from '@angular/core';
import mockPlayer from "../../assets/mock-game-state";
import { ProfessionCard } from '../templates/profession-card';
import { VPCard } from '../templates/vp-card';


@Component({
  selector: 'app-opponent-board',
  templateUrl: './opponent-board.component.html',
  styleUrls: ['./opponent-board.component.scss']
})
export class OpponentBoardComponent implements OnInit {

  incompleteChapters: any = mockPlayer.incompleteChapters;
  completeChapters: any = mockPlayer.completeChapters;
  hand: ProfessionCard[] = mockPlayer.hand;
  VPArray: VPCard[] = mockPlayer.vpArray;
  playerCards = mockPlayer;
  victoryTokens = mockPlayer.victoryTokens;
  score: number = mockPlayer.victoryTokens + this.getCardScore(this.VPArray);
  name: string = mockPlayer.name

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
