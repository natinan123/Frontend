import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSaleComponent } from './manage-sale.component';

describe('ManageSaleComponent', () => {
  let component: ManageSaleComponent;
  let fixture: ComponentFixture<ManageSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
