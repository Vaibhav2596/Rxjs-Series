import { Component, inject, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-switch-map',
  imports: [],
  templateUrl: './switch-map.html',
  styleUrl: './switch-map.scss',
})
export class SwitchMap implements OnInit {
  private _du = inject(DesignUtilityService);
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((data) => this.getData(data))).subscribe((res) => {
      // console.log(res)
      this._du.print(res, 'elContainer');
    });

    // Ex - 02 | Map + Switchall
    source
      .pipe(
        map((data) => this.getData(data)),
        switchAll(),
      )
      .subscribe((res) => {
        // console.log(res)
        this._du.print(res, 'elContainer2');
      });

    // Ex - 03 | SwitchMap
    source.pipe(switchMap((data) => this.getData(data))).subscribe((res) => {
      // console.log(res)
      this._du.print(res, 'elContainer3');
    });


        // Ex - 04 | MergeMap
    source.pipe(mergeMap((data) => this.getData(data))).subscribe((res) => {
      // console.log(res)
      this._du.print(res, 'elContainer4');
    });

    // Ex - 05 | ConcatMap
    source
      .pipe(
        concatMap((data) => this.getData(data)),
      )
      .subscribe((res) => {
        // console.log(res)
        this._du.print(res, 'elContainer5');
      });

    // Ex - 06 | SwitchMap
    source.pipe(switchMap((data) => this.getData(data))).subscribe((res) => {
      // console.log(res)
      this._du.print(res, 'elContainer6');
    });
  }

  // For example take argument from the function and call api suppose and return a data;
  getData(data: string) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }
}
