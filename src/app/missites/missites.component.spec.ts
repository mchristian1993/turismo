import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissitesComponent } from './missites.component';

describe('MissitesComponent', () => {
  let component: MissitesComponent;
  let fixture: ComponentFixture<MissitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
