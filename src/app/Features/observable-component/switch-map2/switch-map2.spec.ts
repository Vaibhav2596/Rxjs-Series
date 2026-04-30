import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMap2 } from './switch-map2';

describe('SwitchMap2', () => {
  let component: SwitchMap2;
  let fixture: ComponentFixture<SwitchMap2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMap2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMap2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
