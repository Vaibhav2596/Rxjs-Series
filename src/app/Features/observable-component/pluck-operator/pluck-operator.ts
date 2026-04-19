import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck-operator',
  imports: [],
  templateUrl: './pluck-operator.html',
  styleUrl: './pluck-operator.scss',
})
export class PluckOperator implements OnInit {
  msg1: string = '';
  msg2: string = '';
  data: any;
  data2: any;

  users = [
    {
      name: 'Anup',
      skills: 'Angular',
      job: {
        title: 'Frontend Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'UxTrendz',
      skills: 'Html, Css',
      job: {
        title: 'UI Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Vaibhav',
      skills: 'JavaScript',
      job: {
        title: 'JavaScript Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Rasika',
      skills: 'React',
      job: {
        title: 'React Developer',
        exp: '10 Years',
      },
    },
  ];

  ngOnInit(): void {
    // Ex - 01
    from(this.users)
      .pipe(
        // map(data => data.name),
        pluck('name'),
        toArray(),
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    // Ex - 02
    from(this.users)
      .pipe(
        // map(data => data.name),
        pluck('job', 'title'),
        toArray(),
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });
  }
}
