import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMainpageComponent } from './manage-mainpage.component';

describe('ManageMainpageComponent', () => {
  let component: ManageMainpageComponent;
  let fixture: ComponentFixture<ManageMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
