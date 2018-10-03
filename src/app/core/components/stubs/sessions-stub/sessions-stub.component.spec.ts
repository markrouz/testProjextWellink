import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsStubComponent } from './sessions-stub.component';

describe('SessionsStubComponent', () => {
  let component: SessionsStubComponent;
  let fixture: ComponentFixture<SessionsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SessionsStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
