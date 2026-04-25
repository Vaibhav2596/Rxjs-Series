import { Component, inject, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-concat',
  imports: [],
  templateUrl: './concat.html',
  styleUrl: './concat.scss',
})
export class Concat implements OnInit {
  private _du = inject(DesignUtilityService);

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map((v) => 'Tech Video # ' + (v + 1)),
      take(5),
    );

    const sourceComedy = interval(1000).pipe(
      map((v) => 'Comedy Video # ' + (v + 1)),
      take(3),
    );

    const sourceNews = interval(1000).pipe(
      map((v) => 'News Video # ' + (v + 1)),
      take(4),
    );

    const FinalObs = concat(sourceTech,sourceComedy,sourceNews);
    FinalObs.subscribe((res) => {
      console.log(res);
      this._du.print(res,'elContainer')
    });
  }
}
