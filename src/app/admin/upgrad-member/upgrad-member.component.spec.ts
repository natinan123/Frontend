import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradMemberComponent } from './upgrad-member.component';

describe('UpgradMemberComponent', () => {
  let component: UpgradMemberComponent;
  let fixture: ComponentFixture<UpgradMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
