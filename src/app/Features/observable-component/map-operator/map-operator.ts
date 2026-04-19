import { Component, inject, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-map-operator',
  imports: [],
  templateUrl: './map-operator.html',
  styleUrl: './map-operator.scss',
})
export class MapOperator implements OnInit {
  // Subscriptions
  sub1!: Subscription;
  sub2!: Subscription;

  // Messages
  msg1: string = '';
  msg2: any = '';

  _designUtilityService = inject(DesignUtilityService);

  ngOnInit(): void {
    // Ex - 01
    const broadCastVideos = interval(1000);

    this.sub1 = broadCastVideos.pipe(map((data) => 'Video ' + data)).subscribe((res: any) => {
      // console.log(res)
      this.msg1 = res;
    });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // Ex - 02
    this.sub2 = broadCastVideos
      .pipe(
        map(data => data * 3)
      )
      .subscribe((res) => {
        // console.log(res);
        this.msg2 = res;
      });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex - 03

    const members = [
      {id: 1, name: 'Anup'},
      {id: 2, name: 'Vaibhav'},
      {id: 3, name: 'Virat'},
      {id: 4, name: 'Shreyas'},
      {id: 5, name: 'Pankaj'},
      {id: 6, name: 'Rahul'},
      {id: 7, name: 'Samay'},
      {id: 8, name: 'Rakesh'},
    ]

    let memObs = from(members);

    memObs
    .pipe(
      map(data => data.name)
    )
    .subscribe(res => {
      // console.log(res)
      this._designUtilityService.print(res,'elContainer')
    })
  }
}
