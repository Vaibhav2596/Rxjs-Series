import { Routes } from '@angular/router';
import { PromiseComponent } from './Features/promise/promise';
import { AsyncAwait } from './Features/async-await/async-await';

export const routes: Routes = [
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  {path:'async-await',component:AsyncAwait}
];
