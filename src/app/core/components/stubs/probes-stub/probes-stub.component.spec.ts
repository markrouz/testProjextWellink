import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbesStubComponent } from './probes-stub.component';

describe('ProbesStubComponent', () => {
  let component: ProbesStubComponent;
  let fixture: ComponentFixture<ProbesStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProbesStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbesStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
