import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsStubComponent } from './contracts-stub.component';

describe('ContractsStubComponent', () => {
  let component: ContractsStubComponent;
  let fixture: ComponentFixture<ContractsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContractsStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
