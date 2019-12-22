import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAdsComponent } from './write-ads.component';

describe('WriteAdsComponent', () => {
  let component: WriteAdsComponent;
  let fixture: ComponentFixture<WriteAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
