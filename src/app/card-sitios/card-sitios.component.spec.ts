import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSitiosComponent } from './card-sitios.component';

describe('CardSitiosComponent', () => {
  let component: CardSitiosComponent;
  let fixture: ComponentFixture<CardSitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
