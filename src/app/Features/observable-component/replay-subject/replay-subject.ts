import { Component, inject, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility-service';
import { NgClass } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  imports: [NgClass],
  templateUrl: './replay-subject.html',
  styleUrl: './replay-subject.scss',
})
export class ReplaySubject implements OnInit {
  // List Data
  userList1 = ['Angular 1', 'Angular 2'];
  userList2: string[] = [];
  userList3: string[] = [];

  // SubscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subscriptions
  subscription2!: Subscription;
  subscription3!: Subscription;

  // Toggle Properties
  methodInterval: boolean = false;
  intervalSubscription!: Subscription;

  private _du = inject(DesignUtilityService);

  ngOnInit(): void {
    this._du.videoEmit.subscribe((res) => {
      console.log(res);
      this.userList1.push(res);
    });
  }

  onVideoAdd(video: string) {
    this._du.videoEmit.next(video);
  }

  // User 2 Subscribe Button
  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._du.videoEmit.subscribe((res) => {
        this.userList2.push(res);
      });
    }

    this.subscribeMode2 = !this.subscribeMode2;
  }

  // User 3 Subscribe Button
  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._du.videoEmit.subscribe((res) => {
        this.userList3.push(res);
      });
    }

    this.subscribeMode3 = !this.subscribeMode3;
  }

  // Toggle Method
  toggleMethod() {
    this.methodInterval = !this.methodInterval;
    const broadCastVideo = interval(1000);

    if (this.methodInterval) {
      this.intervalSubscription = broadCastVideo.subscribe((res) => {
        this._du.videoEmit.next('Video ' + res);
      });
    } else {
      this.intervalSubscription?.unsubscribe();
    }
  }
}
