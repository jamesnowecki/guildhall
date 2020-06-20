import { Component, OnInit } from '@angular/core';
import { ProfessionCard } from '../templates/profession-card';

@Component({
  selector: 'app-chapter-incomplete',
  templateUrl: './chapter-incomplete.component.html',
  styleUrls: ['./chapter-incomplete.component.scss']
})
export class ChapterIncompleteComponent implements OnInit {
  incompleteChapter: ProfessionCard[] = [];
  
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
