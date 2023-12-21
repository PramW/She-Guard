import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafetyPatrolPage } from './safety-patrol.page';

describe('SafetyPatrolPage', () => {
  let component: SafetyPatrolPage;
  let fixture: ComponentFixture<SafetyPatrolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SafetyPatrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
