import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubject } from './replay-subject';

describe('ReplaySubject', () => {
  let component: ReplaySubject;
  let fixture: ComponentFixture<ReplaySubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaySubject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
