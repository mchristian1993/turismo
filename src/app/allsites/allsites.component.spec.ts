import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsitesComponent } from './allsites.component';

describe('AllsitesComponent', () => {
  let component: AllsitesComponent;
  let fixture: ComponentFixture<AllsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
