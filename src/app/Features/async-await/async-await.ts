import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  imports: [],
  templateUrl: './async-await.html',
  styleUrl: './async-await.scss',
})
export class AsyncAwait implements OnInit {

  ngOnInit(): void {
    console.log(this.getData());
  }

  async getData(){
    return 'Data Received';
  }

}
