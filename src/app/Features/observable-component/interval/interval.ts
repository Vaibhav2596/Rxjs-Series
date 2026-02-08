import { Component, inject, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.html',
  styleUrl: './interval.scss',
})
export class Interval implements OnInit {
  obsMsg:string = '';
  videoSubscription! : Subscription;

  designUtilityService = inject(DesignUtilityService);

  ngOnInit(): void {
    const broadCastVideos = interval(1000);

    this.videoSubscription = broadCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this.designUtilityService.print(this.obsMsg,'elContainer')
      this.designUtilityService.print(this.obsMsg,'elContainer2')
      this.designUtilityService.print(this.obsMsg,'elContainer3')
      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    })
  }


}
