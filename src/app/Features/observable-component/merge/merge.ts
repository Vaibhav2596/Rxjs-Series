import { Component, inject, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-merge',
  imports: [],
  templateUrl: './merge.html',
  styleUrl: './merge.scss',
})
export class Merge implements OnInit {
  private _du = inject(DesignUtilityService);

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(
      map((v) => 'Tech Video # ' + (v + 1)),
      take(5),
    );

    const sourceComedy = interval(4000).pipe(
      map((v) => 'Comedy Video # ' + (v + 1)),
      take(3),
    );

    const sourceNews = interval(3500).pipe(
      map((v) => 'News Video # ' + (v + 1)),
      take(4),
    );

    const FinalObs = merge(sourceTech, sourceComedy, sourceNews);
    FinalObs.subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer');
    });
  }
}
