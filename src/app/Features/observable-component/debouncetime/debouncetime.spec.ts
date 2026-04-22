import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Debouncetime } from './debouncetime';

describe('Debouncetime', () => {
  let component: Debouncetime;
  let fixture: ComponentFixture<Debouncetime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Debouncetime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Debouncetime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
