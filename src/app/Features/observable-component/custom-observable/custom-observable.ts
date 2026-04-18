import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-custom-observable',
  imports: [NgClass],
  templateUrl: './custom-observable.html',
  styleUrl: './custom-observable.scss',
})
export class CustomObservable implements OnInit {
  private _designUtilityService = inject(DesignUtilityService);
  techStatus: string = '';

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
      }, 3000);

      setTimeout(() => {
        observer.next('Javascript');
        // observer.error(new Error('Limit Exceed'));
      }, 4000);

      setTimeout(() => {
        observer.next('jQuery');
        observer.complete();
      }, 5000);
    });

    custObs1.subscribe(
      (res: any) => {
        console.log(res);
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
  }
}
