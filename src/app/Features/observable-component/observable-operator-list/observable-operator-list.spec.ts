import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOperatorList } from './observable-operator-list';

describe('ObservableOperatorList', () => {
  let component: ObservableOperatorList;
  let fixture: ComponentFixture<ObservableOperatorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableOperatorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOperatorList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
