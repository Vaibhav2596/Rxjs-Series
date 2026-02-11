import { Component, inject, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-of-from',
  imports: [],
  templateUrl: './of-from.html',
  styleUrl: './of-from.scss',
})
export class OfFrom implements OnInit {
  obsMsg: any;
  _designUtility = inject(DesignUtilityService);

  ngOnInit(): void {
    // OF Example
    const Obs1 = of('Anup', 'Shekhar', 'Sharma');

    Obs1.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer');
    });

    const Obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });

    Obs2.subscribe((res) => {
      this.obsMsg = res;
      console.log('obsMsg => ', res);
      // this._designUtility.print(res, 'elContainer');
    });

    // From Example
    const Obs3 = from(['Uxtrendz', 'John', 'Alex']);

    Obs3.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3');
    });

    // From Promise
    const promise: Promise<string> = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    const Obs4 = from(promise);

    Obs4.subscribe((res) => {
      console.log('from Promise =>',res);
      this._designUtility.print(res, 'elContainer4');
    });

    // From String

        const Obs5 = from('Welcome to Uxtrendz');

    Obs5.subscribe((res) => {
      console.log('from String =>',res);
      this._designUtility.print(res, 'elContainer5');
    });
  }
}
