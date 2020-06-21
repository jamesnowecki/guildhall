import { Component, OnInit, Input } from '@angular/core';
import { VPCard } from '../templates/vp-card';

@Component({
  selector: 'app-claimed-vp-card',
  templateUrl: './claimed-vp-card.component.html',
  styleUrls: ['./claimed-vp-card.component.scss']
})
export class ClaimedVpCardComponent implements OnInit {
@Input() VPCard: VPCard;

  constructor() { }

  ngOnInit(): void {
  }

}
