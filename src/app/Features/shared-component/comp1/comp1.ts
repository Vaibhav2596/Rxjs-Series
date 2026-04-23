import { Component, inject, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.scss',
})
export class Comp1 implements OnInit {
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
