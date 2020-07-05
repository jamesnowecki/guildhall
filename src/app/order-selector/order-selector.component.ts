import { Component, OnInit, Input } from '@angular/core';
import { ProfessionCard } from '../templates/profession-card';

@Component({
  selector: 'app-order-selector',
  templateUrl: './order-selector.component.html',
  styleUrls: ['./order-selector.component.scss']
})
export class OrderSelectorComponent implements OnInit {

  @Input() professionCardArray: ProfessionCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
