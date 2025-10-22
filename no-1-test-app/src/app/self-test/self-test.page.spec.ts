import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelfTestPage } from './self-test.page';

describe('SelfTestPage', () => {
  let component: SelfTestPage;
  let fixture: ComponentFixture<SelfTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
