import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, Subject, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-take-operator',
  imports: [],
  templateUrl: './take-operator.html',
  styleUrl: './take-operator.scss',
})
export class TakeOperator implements OnInit, OnDestroy {
  randomNames = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert'];
  private _du = inject(DesignUtilityService);
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    const nameSource = from(this.randomNames);

    // Ex - 01 | Take
    nameSource.pipe(take(5)).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer');
    });

    // Ex - 02 | TakeLast
    nameSource.pipe(takeLast(5)).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer2');
    });

    // Ex - 03 | TakeUntil
    const source = interval(1000);

    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');

    source
      .pipe(
        map((data) => 'Number ' + data),
        takeUntil(condition1),
        // takeUntil(condition2),
        // takeUntil(this.destroy$),
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer3');
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
