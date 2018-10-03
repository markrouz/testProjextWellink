import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStubComponent } from './events-stub.component';

describe('EventsStubComponent', () => {
  let component: EventsStubComponent;
  let fixture: ComponentFixture<EventsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
