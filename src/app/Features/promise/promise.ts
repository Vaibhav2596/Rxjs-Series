import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.html',
  styleUrl: './promise.scss',
})
export class PromiseComponent implements OnInit {
  promiseVal: any;

  dell = {
    brand : 'Dell',
    hardDisk : '2 TB',
    color : 'Black'
  }

  hp = {
    brand: 'Hp',
    hardDisk : '1 TB',
    color : 'Silver'
  }

  notAvail = {
    brand : 'notAvail',
    status : 'Failed'
  }

  ngOnInit(): void {
    this.buyLaptopES6
      .then((res) => {
        console.log('then code => ', res);
        this.promiseVal = res;
      })
      .catch((error) => {
        this.promiseVal = error;
        console.log('error code => ', error);
      });
  }
  buyLaptop = new Promise(function (resolve, reject) {
    resolve('Promise is resolved');
  });

  // ES6 Syntax to resolve Promise
  buyLaptopES6 = new Promise((resolve, reject) => {
    // resolve("Promise is resolved")
    // reject('Promise is rejected');
    if (this.DellAvailable()) {
      setTimeout(() => {
        // resolve('Dell is Purchased');
        resolve(this.dell);
      }, 3000);
    } else if (this.HpAvailable()) {
      setTimeout(() => {
        // resolve('HP is Purchased');
        resolve(this.hp);
      }, 3000);
    } else {
      reject(this.notAvail);
      // reject('Laptop is not available in store');
    }
  });

  callPromise() {
    console.log('Definate to Console Once clicked on Button Click Me');
  }

  DellAvailable() {
    return false;
  }

  HpAvailable() {
    return false;
  }
}
