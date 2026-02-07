import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAwait } from './async-await';

describe('AsyncAwait', () => {
  let component: AsyncAwait;
  let fixture: ComponentFixture<AsyncAwait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncAwait]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncAwait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
