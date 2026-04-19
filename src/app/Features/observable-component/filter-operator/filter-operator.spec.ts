import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOperator } from './filter-operator';

describe('FilterOperator', () => {
  let component: FilterOperator;
  let fixture: ComponentFixture<FilterOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
