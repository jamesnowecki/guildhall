import { Component, OnInit, Input } from '@angular/core';
import { ProfessionCard } from '../templates/profession-card';

@Component({
  selector: 'app-chapter-incomplete',
  templateUrl: './chapter-incomplete.component.html',
  styleUrls: ['./chapter-incomplete.component.scss']
})
export class ChapterIncompleteComponent implements OnInit {

  @Input() incompleteChapter: ProfessionCard[];
  
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


  constructor() { }

  ngOnInit(): void {
    console.log(this.incompleteChapter)
  }

}
