import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStubComponent } from './map-stub.component';

describe('MapStubComponent', () => {
  let component: MapStubComponent;
  let fixture: ComponentFixture<MapStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapStubComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
