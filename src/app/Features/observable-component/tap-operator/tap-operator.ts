import { Component, inject, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-tap-operator',
  imports: [NgStyle],
  templateUrl: './tap-operator.html',
  styleUrl: './tap-operator.scss',
})
export class TapOperator implements OnInit {
  private _du = inject(DesignUtilityService);
  myColor : string = '';

  ngOnInit(): void {
    const source = interval(1500);
    // Ex - 01
    const Arr = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert'];
    let obsSubscription: Subscription;

    obsSubscription = source
      .pipe(
        tap((res) => {
          if (res >= Arr.length) {
            obsSubscription.unsubscribe();
          }
        }),
        map((data) => Arr[data]),
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer');
      });

    // Ex - 02
    const Colors = [
      'Red',
      'Blue',
      'Green',
      'Yellow',
      'Purple',
      'Orange',
      'Pink',
      'Brown',
      'Black',
      'Violet',
      'Gray',
      'Cyan',
    ];
    let obsSubscription2: Subscription;

    obsSubscription2 = source
      .pipe(
        tap((res) => {
          console.log('tap => ' + res);
          if (res >= Colors.length) {
            obsSubscription2.unsubscribe();
          }
        }),
        map((data) => Colors[data]),
      )
      .subscribe((res) => {
        this.myColor = res;
        this._du.print(res, 'elContainer2');
      });
  }
}
