import { Routes } from '@angular/router';
import { PromiseComponent } from './Features/promise/promise';
import { AsyncAwait } from './Features/async-await/async-await';
import { ObservableComponent } from './Features/observable-component/observable-component';
import { ObservableOperatorList } from './Features/observable-component/observable-operator-list/observable-operator-list';
import { FromEvent } from './Features/observable-component/from-event/from-event';
import { Interval } from './Features/observable-component/interval/interval';
import { OfFrom } from './Features/observable-component/of-from/of-from';

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
      {path: 'of-from', component: OfFrom}
    ],
  },
];
