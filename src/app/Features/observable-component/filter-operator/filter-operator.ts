import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  imports: [],
  templateUrl: './filter-operator.html',
  styleUrl: './filter-operator.scss',
})
export class FilterOperator implements OnInit {
  data: any;
  data2: any;
  data3: any;
  dataArray = [
    { id: 1, name: 'Anup', gender: 'Male' },
    { id: 2, name: 'Rohit', gender: 'Male' },

    { id: 3, name: 'Priyanka', gender: 'Female' },
    { id: 4, name: 'Snehalata', gender: 'Female' },
    { id: 5, name: 'Nehashree', gender: 'Female' },

    { id: 6, name: 'Rajnish', gender: 'Male' },
    { id: 7, name: 'Karanveer', gender: 'Male' },

    { id: 8, name: 'Pooja', gender: 'Female' },
    { id: 9, name: 'Kavita', gender: 'Female' },

    { id: 10, name: 'Vikram', gender: 'Male' },
    { id: 11, name: 'Suresh', gender: 'Male' },

    { id: 12, name: 'Anjali', gender: 'Female' },
  ];

  ngOnInit(): void {
    const source = from(this.dataArray);

    // Ex - 01 - Filter by length
    source
      .pipe(
        filter((member) => member.name.length > 6),
        toArray(),
      )
      .subscribe((res) => {
        // console.log(res);
        this.data = res;
      });

    // Ex - 02 - Filter by Gender
    source
      .pipe(
        filter((member) => member.gender === 'Female'),
        toArray(),
      )
      .subscribe((res) => {
        // console.log(res);
        this.data2 = res;
      });

    // Ex - 03 - Filter by nth Item
    source
      .pipe(
        filter((member) => member.id <= 6),
        toArray(),
      )
      .subscribe((res) => {
        // console.log(res);
        this.data3 = res;
      });
  }
}
