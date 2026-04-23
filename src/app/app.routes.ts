import { Routes } from '@angular/router';
import { PromiseComponent } from './Features/promise/promise';
import { AsyncAwait } from './Features/async-await/async-await';
import { ObservableComponent } from './Features/observable-component/observable-component';
import { ObservableOperatorList } from './Features/observable-component/observable-operator-list/observable-operator-list';
import { FromEvent } from './Features/observable-component/from-event/from-event';
import { Interval } from './Features/observable-component/interval/interval';
import { OfFrom } from './Features/observable-component/of-from/of-from';
import { ToArray } from './Features/observable-component/to-array/to-array';
import { CustomObservable } from './Features/observable-component/custom-observable/custom-observable';
import { MapOperator } from './Features/observable-component/map-operator/map-operator';
import { PluckOperator } from './Features/observable-component/pluck-operator/pluck-operator';
import { FilterOperator } from './Features/observable-component/filter-operator/filter-operator';
import { TapOperator } from './Features/observable-component/tap-operator/tap-operator';
import { TakeOperator } from './Features/observable-component/take-operator/take-operator';
import { Retry } from './Features/observable-component/retry/retry';
import { Debouncetime } from './Features/observable-component/debouncetime/debouncetime';
import { SubjectBehavior } from './Features/observable-component/subject-behavior/subject-behavior';

export const routes: Routes = [
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  { path: 'async-await', component: AsyncAwait },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ObservableOperatorList },
      { path: 'fromEvent', component: FromEvent },
      { path: 'interval', component: Interval },
      { path: 'of-from', component: OfFrom },
      { path: 'to-array', component: ToArray },
      { path: 'custom-observable', component: CustomObservable },
      { path: 'map', component: MapOperator },
      { path: 'pluck', component: PluckOperator },
      { path: 'filter', component: FilterOperator },
      { path: 'tap', component: TapOperator },
      { path: 'take', component: TakeOperator },
      { path: 'retry', component: Retry },
      { path: 'debouncetime', component: Debouncetime },
      { path: 'subject', component: SubjectBehavior },
    ],
  },
];
