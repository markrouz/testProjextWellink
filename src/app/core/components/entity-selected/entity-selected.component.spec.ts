import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySelectedComponent } from './entity-selected.component';

describe('EntitySelectedComponent', () => {
  let component: EntitySelectedComponent;
  let fixture: ComponentFixture<EntitySelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
