import { Component, OnInit } from '@angular/core';
import professionDeckUnshuffled from "../../assets/mock-profession-cards";
import { ProfessionCard } from "../templates/profession-card";

@Component({
  selector: 'app-profession-deck',
  templateUrl: './profession-deck.component.html',
  styleUrls: ['./profession-deck.component.scss']
})
export class ProfessionDeckComponent implements OnInit {

  professionDeck: ProfessionCard[] = professionDeckUnshuffled;
  professionDeckDiscard: ProfessionCard[] = professionDeckUnshuffled;
  professionDeckDiscardTopCard: ProfessionCard = this.professionDeckDiscard[this.professionDeckDiscard.length -1];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.professionDeck)
  }

}
