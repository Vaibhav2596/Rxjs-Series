import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignUtilityService } from '../../Features/services/design-utility-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  exclusive: boolean = false;
  _designUtility = inject(DesignUtilityService);

  constructor() {
    this._designUtility.exclusive.subscribe((res) => {
        this.exclusive = res;
    });
  }
}
