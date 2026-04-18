import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-custom-observable',
  imports: [NgClass],
  templateUrl: './custom-observable.html',
  styleUrl: './custom-observable.scss',
})
export class CustomObservable implements OnInit, OnDestroy {
  private _designUtilityService = inject(DesignUtilityService);
  techStatus: string = '';
  techStatus2: string = '';
  subs2!: Subscription;
  name: string = '';
  nameStatus: string = '';

  ngOnInit(): void {
    // Ex - 01 (Manual)

    const custObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('Html and Css');
        observer.complete();
      }, 3000);

      setTimeout(() => {
        observer.next('Javascript');
        // observer.error(new Error('Limit Exceed'));
      }, 4000);

      setTimeout(() => {
        observer.next('jQuery');
        // observer.complete();
      }, 5000);
    });

    custObs1.subscribe(
      (res: any) => {
        // console.log(res);
        this._designUtilityService.print(res, 'elContainer');
      },
      (error: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      },
    );

    // subscribe(data, error, completion)

    // Ex - 02 (Custom Interval)

    const Arr2 = ['Angular', 'Javascript', 'Html', 'Css', 'Typescript'];
    const custObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);

        if (count >= 2) {
          observer.error('Error Emit');
        }

        if (count >= 4) {
          observer.complete();
        }

        count++;
      }, 1000);
    });

    this.subs2 = custObs2.subscribe(
      (res: any) => {
        // console.log(res);
        this._designUtilityService.print(res, 'elContainer2');
      },
      (error: any) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      },
    );

    // Ex - 03 (Random Names)

    const Arr3 = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert'];

    const custObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);

        if (count >= 2) {
          // observer.error('Error Emit');
        }

        if (count >= 6) {
          observer.complete();
        }

        count++;
      }, 1000);
    });

    custObs3.subscribe(
      (res: any) => {
        console.log(res);
        this.name = res;
      },
      (error: any) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      },
    );
  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }
}
