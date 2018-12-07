import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImgUserComponent } from './list-img-user.component';

describe('ListImgUserComponent', () => {
  let component: ListImgUserComponent;
  let fixture: ComponentFixture<ListImgUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImgUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
