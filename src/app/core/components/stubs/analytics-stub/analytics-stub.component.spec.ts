import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsStubComponent } from './analytics-stub.component';

describe('AnalyticsStubComponent', () => {
  let component: AnalyticsStubComponent;
  let fixture: ComponentFixture<AnalyticsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
