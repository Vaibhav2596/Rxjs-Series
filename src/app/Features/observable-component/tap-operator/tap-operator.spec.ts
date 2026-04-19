import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapOperator } from './tap-operator';

describe('TapOperator', () => {
  let component: TapOperator;
  let fixture: ComponentFixture<TapOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
