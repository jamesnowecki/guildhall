import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIncompleteComponent } from './chapter-incomplete.component';

describe('ChapterIncompleteComponent', () => {
  let component: ChapterIncompleteComponent;
  let fixture: ComponentFixture<ChapterIncompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterIncompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIncompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
