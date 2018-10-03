import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapStubComponent } from './sap-stub.component';

describe('SapStubComponent', () => {
  let component: SapStubComponent;
  let fixture: ComponentFixture<SapStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SapStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
