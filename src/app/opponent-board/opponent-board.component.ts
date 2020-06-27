import { Component, OnInit, Input } from '@angular/core';
import { VPCard } from '../templates/vp-card';
import { Player } from '../templates/game-classes';


@Component({
  selector: 'app-opponent-board',
  templateUrl: './opponent-board.component.html',
  styleUrls: ['./opponent-board.component.scss']
})
export class OpponentBoardComponent implements OnInit {

  @Input() opponent: Player;


  constructor() { }

  getCardScore(VPArray: VPCard[]): number {
    let total: number = 0;
    VPArray.forEach(card => {
      total = total + card.value;
    });
    return total;
  }

  getTotalScore(): number {
    return this.opponent.victoryTokens + this.getCardScore(this.opponent.VPArray)
  }

  ngOnInit(): void {
  }

}
