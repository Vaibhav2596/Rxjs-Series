import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.html',
  styleUrl: './promise.scss',
})
export class PromiseComponent {

  callPromise(){
    console.log("Definate to Console Once clicked on Button Click Me")
  }

}
