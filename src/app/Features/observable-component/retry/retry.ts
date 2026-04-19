import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { delay, map, of, retry, retryWhen, scan, tap } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-retry',
  imports: [NgClass, NgIf],
  templateUrl: './retry.html',
  styleUrl: './retry.scss',
})
export class Retry implements OnInit {
  private http = inject(HttpClient);
  person: any;
  fetching: boolean = false;
  status: string = 'No Data';

  ngOnInit(): void {}

  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data...';
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        // retry(4)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount,error) => {
              if (retryCount >= 5) {
                throw error;
              } else {
                retryCount = retryCount + 1;
                console.log('retryCount => ' + retryCount);
                this.status = 'Retrying Attempt #' + retryCount;
                return retryCount;
              }
            },0),
          ),
        ),
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.person = res[0];
          this.fetching = false;
          this.status = 'Data Fetched';
        },
        (err: any) => {
          console.log(err);
          this.fetching = false;
          this.status = 'Problem Fetching Data';
        },
      );
  }
}
