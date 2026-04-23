import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Anup');
  videoEmit = new ReplaySubject<string>(3);
  asyncVideoEmit = new AsyncSubject();
  
  print(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId)?.appendChild(el);
  }
}
