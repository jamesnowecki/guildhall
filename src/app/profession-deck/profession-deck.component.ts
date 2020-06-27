import { Component, OnInit, Input } from '@angular/core';
import { ProfessionCard } from "../templates/profession-card";

@Component({
  selector: 'app-profession-deck',
  templateUrl: './profession-deck.component.html',
  styleUrls: ['./profession-deck.component.scss']
})
export class ProfessionDeckComponent implements OnInit {

  @Input() professionDeck: ProfessionCard[];
  @Input() professionDiscards: ProfessionCard[];

  professionDeckDiscardTopCard: ProfessionCard = this.professionDiscards[this.professionDiscards.length -1];

  constructor() { }

  ngOnInit(): void {
  }

}
