import { Component, OnInit } from '@angular/core';
import professionDeckUnshuffled from "../../assets/mock-profession-cards";

@Component({
  selector: 'app-profession-deck',
  templateUrl: './profession-deck.component.html',
  styleUrls: ['./profession-deck.component.scss']
})
export class ProfessionDeckComponent implements OnInit {

  professionDeck = professionDeckUnshuffled;

  constructor() { }

  ngOnInit(): void {
    console.log(this.professionDeck)
  }

}
