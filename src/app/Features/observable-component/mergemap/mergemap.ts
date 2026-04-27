import { Component, inject, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-mergemap',
  imports: [],
  templateUrl: './mergemap.html',
  styleUrl: './mergemap.scss',
})
export class Mergemap implements OnInit {
  private _du = inject(DesignUtilityService);

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer');
    });

    // .subscribe(res => res.subscribe(res2 => {
    //   console.log(res2)
    //   this._du.print(res2,'elContainer')
    // }))

    // Ex - 02 | Map + Mergeall
    source.pipe(
      map((res) => this.getData(res)),
      mergeAll()
    ).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer2');
    });


        // Ex - 03 | mergeMap
    source.pipe(
      mergeMap((res) => this.getData(res))
    ).subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer3');
    });
  }

  // For example take argument from the function and call api suppose and return a data;
  getData(data: string) {
    return of(data + ' Video Uploaded');
  }
}
