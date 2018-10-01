import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFrameComponent } from './common-frame.component';

describe('CommonFrameComponent', () => {
  let component: CommonFrameComponent;
  let fixture: ComponentFixture<CommonFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFrameComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
