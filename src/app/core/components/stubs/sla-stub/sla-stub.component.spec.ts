import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaStubComponent } from './sla-stub.component';

describe('SlaStubComponent', () => {
  let component: SlaStubComponent;
  let fixture: ComponentFixture<SlaStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlaStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
