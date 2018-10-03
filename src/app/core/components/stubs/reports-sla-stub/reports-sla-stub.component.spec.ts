import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSlaStubComponent } from './reports-sla-stub.component';

describe('ReportsSlaStubComponent', () => {
  let component: ReportsSlaStubComponent;
  let fixture: ComponentFixture<ReportsSlaStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsSlaStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsSlaStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
