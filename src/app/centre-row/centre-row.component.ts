import { Component, OnInit } from '@angular/core';
import vpDeckUnshuffled from "../../assets/mock-vpcards";

@Component({
  selector: 'app-centre-row',
  templateUrl: './centre-row.component.html',
  styleUrls: ['./centre-row.component.scss']
})
export class CentreRowComponent implements OnInit {

  vpDeck = vpDeckUnshuffled;
  visibleVPDeck = this.vpDeck.slice(this.vpDeck.length - 5, this.vpDeck.length + 1 )

  constructor() { }

  FYShuffle(): void {

  }

  ngOnInit(): void {
    console.log(this.vpDeck)
    console.log(this.vpDeck[0])
    console.log(this.visibleVPDeck)
  }
}
