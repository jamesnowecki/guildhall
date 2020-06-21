import { Component, OnInit, Input } from '@angular/core';
import { ProfessionCard } from '../templates/profession-card';

@Component({
  selector: 'app-chapter-complete',
  templateUrl: './chapter-complete.component.html',
  styleUrls: ['./chapter-complete.component.scss']
})
export class ChapterCompleteComponent implements OnInit {
  
  @Input() completeChapter: ProfessionCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
