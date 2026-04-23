import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility-service';
import { Comp1 } from '../../shared-component/comp1/comp1';
import { Comp2 } from '../../shared-component/comp2/comp2';
import { Comp3 } from '../../shared-component/comp3/comp3';

@Component({
  selector: 'app-subject-behavior',
  imports: [Comp1, Comp2, Comp3],
  templateUrl: './subject-behavior.html',
  styleUrl: './subject-behavior.scss',
})
export class SubjectBehavior implements OnInit, OnDestroy {
  _designUtility = inject(DesignUtilityService);
  userName: string = '';

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);

    this._designUtility.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
  }
}
