import { Component, inject, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-concat-map',
  imports: [],
  templateUrl: './concat-map.html',
  styleUrl: './concat-map.scss',
})
export class ConcatMap implements OnInit {
  private _du = inject(DesignUtilityService);
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      this._du.print(res, 'elContainer');
    });

    // res.subscribe(res2 => {
    //   // console.log(res2)
    //   this._du.print(res2,'elContainer')
    // })

    // // Ex - 02 | Map + ConcatAll
    // source
    //   .pipe(
    //     map((res) => this.getData(res)),
    //     concatAll(),
    //   )
    //   .subscribe((res) => {
    //     this._du.print(res, 'elContainer2');
    //   });

    // Ex - 02 | MergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      this._du.print(res, 'elContainer2');
    });

    // Ex - 03 | ConcatMap
    source.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      this._du.print(res, 'elContainer3');
    });
  }

  // For example take argument from the function and call api suppose and return a data;
  getData(data: string) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
}
