import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattaxtComponent } from './chattaxt.component';

describe('ChattaxtComponent', () => {
  let component: ChattaxtComponent;
  let fixture: ComponentFixture<ChattaxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattaxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattaxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
