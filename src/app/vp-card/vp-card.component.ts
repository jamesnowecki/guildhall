import { Component, OnInit, Input } from '@angular/core';
import { VPCard } from '../templates/vp-card';

@Component({
  selector: 'app-vp-card',
  templateUrl: './vp-card.component.html',
  styleUrls: ['./vp-card.component.scss']
})
export class VpCardComponent implements OnInit {
  @Input() vpCard: VPCard;

  constructor() { }

  ngOnInit(): void {
  }

}
