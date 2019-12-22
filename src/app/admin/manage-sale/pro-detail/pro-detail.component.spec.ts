import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDetailComponent } from './pro-detail.component';

describe('ProDetailComponent', () => {
  let component: ProDetailComponent;
  let fixture: ComponentFixture<ProDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
