import { Component, OnInit } from '@angular/core';
import { GameState } from '../templates/game-classes';
import mockGameState from "../../assets/mock-game-state";
import { Player } from "../templates/game-classes";
import { VPCard } from "../templates/vp-card";
import { ProfessionCard } from "../templates/profession-card";


@Component({
  selector: 'app-game-frame',
  templateUrl: './game-frame.component.html',
  styleUrls: ['./game-frame.component.scss']
})
export class GameFrameComponent implements OnInit {

  mockGameState: GameState = mockGameState;
  primaryPlayer: Player = mockGameState.playerArray[0];
  opponents: Player[] = mockGameState.playerArray.slice(1, mockGameState.playerArray.length + 1);
  VPDeck: VPCard[] = mockGameState.VPDeck;
  professionDeck: ProfessionCard[] = mockGameState.professionDeck;
  professionDiscards: ProfessionCard[] = mockGameState.professionDiscards;

  constructor() { }

  ngOnInit(): void {
    console.log(this.mockGameState)
  }

}
