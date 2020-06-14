import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionCardComponent } from './profession-card.component';

describe('ProfessionCardComponent', () => {
  let component: ProfessionCardComponent;
  let fixture: ComponentFixture<ProfessionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
