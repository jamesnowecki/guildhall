import { Component, OnInit } from '@angular/core';
import { IVPCard } from "../templates/vp-card";
import vpDeckUnshuffled from "../../assets/mock-vpcards";

@Component({
  selector: 'app-centre-row',
  templateUrl: './centre-row.component.html',
  styleUrls: ['./centre-row.component.scss']
})
export class CentreRowComponent implements OnInit {

  vpDeck = vpDeckUnshuffled;

  constructor() { }

  ngOnInit(): void {
  }

}
