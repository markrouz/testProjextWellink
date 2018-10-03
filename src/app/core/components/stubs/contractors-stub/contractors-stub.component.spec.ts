import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorsStubComponent } from './contractors-stub.component';

describe('ContractorsStubComponent', () => {
  let component: ContractorsStubComponent;
  let fixture: ComponentFixture<ContractorsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContractorsStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
