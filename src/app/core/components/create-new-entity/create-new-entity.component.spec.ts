import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEntityComponent } from './create-new-entity.component';

describe('CreateNewEntityComponent', () => {
  let component: CreateNewEntityComponent;
  let fixture: ComponentFixture<CreateNewEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
