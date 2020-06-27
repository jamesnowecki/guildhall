import { Component, OnInit, Input } from '@angular/core';
// import vpDeckUnshuffled from "../../assets/mock-vpcards";
import { VPCard } from "../templates/vp-card";
import { ProfessionCard } from '../templates/profession-card';

@Component({
  selector: 'app-centre-row',
  templateUrl: './centre-row.component.html',
  styleUrls: ['./centre-row.component.scss']
})
export class CentreRowComponent implements OnInit {

  @Input() VPDeck: VPCard[];
  @Input() professionDeck: ProfessionCard[];
  @Input() professionDiscards: ProfessionCard[];

  vpDeck: VPCard[] = this.FYShuffle(this.VPDeck);
  visibleVPDeck = this.vpDeck.slice(this.vpDeck.length - 5, this.vpDeck.length + 1 )

  constructor() { }

  FYShuffle(array: VPCard[]): VPCard[] {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
  

  ngOnInit(): void {
  }
}
