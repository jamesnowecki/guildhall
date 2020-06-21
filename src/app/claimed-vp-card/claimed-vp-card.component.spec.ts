import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimedVpCardComponent } from './claimed-vp-card.component';

describe('ClaimedVpCardComponent', () => {
  let component: ClaimedVpCardComponent;
  let fixture: ComponentFixture<ClaimedVpCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimedVpCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimedVpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
