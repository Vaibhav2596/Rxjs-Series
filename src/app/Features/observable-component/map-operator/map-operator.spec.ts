import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOperator } from './map-operator';

describe('MapOperator', () => {
  let component: MapOperator;
  let fixture: ComponentFixture<MapOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
