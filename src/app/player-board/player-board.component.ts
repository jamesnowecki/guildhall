import { Component, OnInit, Input } from '@angular/core';
// import mockPlayer from "../../assets/mock-game-state";
import { ProfessionCard } from '../templates/profession-card';
import { VPCard } from '../templates/vp-card';
import { Player } from "../templates/game-classes";


@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit {

  @Input() primaryPlayer: Player;

  incompleteChapters: any = this.primaryPlayer.incompleteChapters;
  completeChapters: any = this.primaryPlayer.completeChapters;
  hand: ProfessionCard[] = this.primaryPlayer.hand;
  VPArray: VPCard[] = this.primaryPlayer.vpArray;
  // playerCards = this.primaryPlayer;
  victoryTokens = this.primaryPlayer.victoryTokens;
  score: number = this.primaryPlayer.victoryTokens + this.getCardScore(this.VPArray);

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
