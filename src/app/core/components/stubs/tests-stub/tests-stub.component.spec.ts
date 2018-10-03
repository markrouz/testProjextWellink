import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsStubComponent } from './tests-stub.component';

describe('TestsStubComponent', () => {
  let component: TestsStubComponent;
  let fixture: ComponentFixture<TestsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestsStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
