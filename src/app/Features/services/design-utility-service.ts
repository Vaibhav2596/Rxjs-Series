import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Anup');

  print(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(containerId)?.appendChild(el);
  }
}
