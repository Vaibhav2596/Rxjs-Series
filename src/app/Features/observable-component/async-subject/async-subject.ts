import { Component, inject, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility-service';
import { NgClass } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  imports: [],
  templateUrl: './async-subject.html',
  styleUrl: './async-subject.scss',
})
export class AsyncSubject {
  asyncVideoEmit:any;
  private _du = inject(DesignUtilityService);

  ngOnInit(): void {
    this._du.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  onVideoAdd(video: string) {
    console.log(video)
    this._du.asyncVideoEmit.next(video)
  }


  onComplete(){
    this._du.asyncVideoEmit.complete()
  }
}
