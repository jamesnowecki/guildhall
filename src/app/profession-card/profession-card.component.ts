import { Component, OnInit, Input } from '@angular/core';
import { IProfessionCard } from '../templates/profession-card';

@Component({
  selector: 'app-profession-card',
  templateUrl: './profession-card.component.html',
  styleUrls: ['./profession-card.component.scss']
})
export class ProfessionCardComponent implements OnInit {
  @Input() professionCard: IProfessionCard;

  getColor(color: string): string {
    switch(color) {
      case "blue": {
        return "blue";
      }
      case "red": {
        return "red";
      }
      case "yellow": {
        return "yellow";
      }
      case "purple": {
        return "purple";
      }
      case "green": {
        return "green";
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
