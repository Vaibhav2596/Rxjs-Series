import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  imports: [],
  templateUrl: './to-array.html',
  styleUrl: './to-array.scss',
})
export class ToArray implements OnInit {
  sourceSub!: Subscription;

  users = [
    { name: 'Anup', skill: 'Angular' },
    { name: 'Shekhar', skill: 'Html, Css' },
    { name: 'Sharma', skill: 'JavaScript' },
    { name: 'Uxtrendz', skill: 'TypeScript' },
  ];

  ngOnInit(): void {
    // Ex - 01
    const source = interval(1000);

    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);

      // if(res >= 8){
      //   this.sourceSub?.unsubscribe();
      // }
    });

    // Ex - 02
    const source2 = from(this.users);

    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    // Ex - 03

    const source3 = of('Anup','Shekhar','Sharma','Uxtrendz');

    source3
    .pipe(
      toArray()
    )
    .subscribe(res => {
      console.log(res);
    })

  }
}
