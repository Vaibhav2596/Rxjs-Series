import { Routes } from '@angular/router';
import { PromiseComponent } from './Features/promise/promise';

export const routes: Routes = [
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
];
