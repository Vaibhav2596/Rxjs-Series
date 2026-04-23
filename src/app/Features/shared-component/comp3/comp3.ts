import { Component, inject } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-comp3',
  imports: [],
  templateUrl: './comp3.html',
  styleUrl: './comp3.scss',
})
export class Comp3 {
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
