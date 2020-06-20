import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterCompleteComponent } from './chapter-complete.component';

describe('ChapterCompleteComponent', () => {
  let component: ChapterCompleteComponent;
  let fixture: ComponentFixture<ChapterCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
