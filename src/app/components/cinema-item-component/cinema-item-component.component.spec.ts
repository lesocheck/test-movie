import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaItemComponentComponent } from './cinema-item-component.component';

describe('CinemaItemComponentComponent', () => {
  let component: CinemaItemComponentComponent;
  let fixture: ComponentFixture<CinemaItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
