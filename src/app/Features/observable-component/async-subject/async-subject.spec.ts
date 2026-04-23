import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubject } from './async-subject';

describe('AsyncSubject', () => {
  let component: AsyncSubject;
  let fixture: ComponentFixture<AsyncSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncSubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSubject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
