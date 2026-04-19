import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOperator } from './take-operator';

describe('TakeOperator', () => {
  let component: TakeOperator;
  let fixture: ComponentFixture<TakeOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
