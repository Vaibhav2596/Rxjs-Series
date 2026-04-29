import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMap2 } from './concat-map2';

describe('ConcatMap2', () => {
  let component: ConcatMap2;
  let fixture: ComponentFixture<ConcatMap2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatMap2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatMap2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
