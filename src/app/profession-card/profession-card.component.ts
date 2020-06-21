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
        return "#42afee";
      }
      case "red": {
        return "tomato";
      }
      case "yellow": {
        return "#f8f550";
      }
      case "purple": {
        return "#795de0";
      }
      case "green": {
        return "#66ee78";
      }
    }
  }

  getColorFirstLetter(color: string): string {
    return color.split("")[0].toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
