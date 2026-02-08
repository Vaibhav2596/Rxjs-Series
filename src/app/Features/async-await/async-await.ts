import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  imports: [JsonPipe],
  templateUrl: './async-await.html',
  styleUrl: './async-await.scss',
})
export class AsyncAwait implements OnInit {
  resultByAsyncAwait: any;
  resultByPromise: any;
  fetchPostsResult:any;

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black',
  };

  ngOnInit(): void {
    this.getData();
  }

  dataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Received');
    }, 3000);
  });

  buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 3000);
  });

  fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())

  // async keyword with function always return promise
  async getData() {
    let response = await this.dataPromise;
    console.log(response);
  }

  // Example 01 : With Promise
  fetchByPromise() {
    this.buyLaptop.then((res) => {
      console.log(res);
      this.resultByPromise = res;
    });
  }

  // Example 02 : With Async Await
  async fetchByAsyncAwait() {
    let response = await this.buyLaptop;
    console.log(response);
    this.resultByAsyncAwait = response;
  }

  // Promise
  // fetchByAPI(){
  //   this.fetchPosts.then(data => {
  //     console.log(data);
  //     this.fetchPostsResult = data;
  //   })
  // }

  // Async Await
  async fetchByAPI(){
    let result = await this.fetchPosts;
    this.fetchPostsResult = result;
  }
}
