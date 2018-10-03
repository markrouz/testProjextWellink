import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogStubComponent } from './event-log-stub.component';

describe('EventLogStubComponent', () => {
  let component: EventLogStubComponent;
  let fixture: ComponentFixture<EventLogStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventLogStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
