import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsStubComponent } from './accounts-stub.component';

describe('AccountsStubComponent', () => {
  let component: AccountsStubComponent;
  let fixture: ComponentFixture<AccountsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
