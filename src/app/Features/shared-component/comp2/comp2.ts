import { Component, inject, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.scss',
})
export class Comp2 implements OnInit {
  _designUtility = inject(DesignUtilityService);
  userName: string = '';

  ngOnInit(): void {
    this._designUtility.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  onChange(uname: any) {
    console.log(uname.value);
    const userValue = uname.value;
    this._designUtility.userName.next(userValue);
  }
}
