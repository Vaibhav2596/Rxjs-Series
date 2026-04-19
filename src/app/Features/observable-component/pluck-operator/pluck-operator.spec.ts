import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckOperator } from './pluck-operator';

describe('PluckOperator', () => {
  let component: PluckOperator;
  let fixture: ComponentFixture<PluckOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluckOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluckOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
