import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionDeckComponent } from './profession-deck.component';

describe('ProfessionDeckComponent', () => {
  let component: ProfessionDeckComponent;
  let fixture: ComponentFixture<ProfessionDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
