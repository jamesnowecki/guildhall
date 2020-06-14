import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreRowComponent } from './centre-row.component';

describe('CentreRowComponent', () => {
  let component: CentreRowComponent;
  let fixture: ComponentFixture<CentreRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
