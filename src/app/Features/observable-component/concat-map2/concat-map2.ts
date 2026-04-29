import { Component, inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility-service';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map2',
  imports: [],
  templateUrl: './concat-map2.html',
  styleUrl: './concat-map2.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ConcatMap2 implements OnInit, OnDestroy {
  private _du = inject(DesignUtilityService);
  notifyData = [
    {
      name: 'James Smith',
      icon: 'twitter',
      time: '4 sec ago',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comment: 'Twitted: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'David Smith',
      icon: 'facebook',
      time: '3 sec ago',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comment: 'Posted: Autem dolores qui tempora, expedita...',
    },
    {
      name: 'Peter Smith',
      icon: 'twitter',
      time: '2 sec ago',
      img: 'https://images.unsplash.com/photo-1578758803946-2c4f6738df87?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comment: 'Twitted: Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Alax Johnson',
      icon: 'facebook',
      time: '1 sec ago',
      img: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      comment: 'Commented on your post: Awesome post!!!',
    },
  ];

  ngOnInit(): void {
    document.body.classList.add('app-notification-demo');
    from(this.notifyData)
    // .pipe(mergeMap(res => this.getHtml(res))) // mergeMap gets all data at once
    .pipe(concatMap(res => this.getHtml(res)))
    .subscribe((res) => {
      console.log(res);

      this._du.print2(res, 'elContainer');
    });
  }

  getHtml(resData:any) {
    const data = `
        <div class="icon ${resData.icon} me-2"></div>
        <div class="content flex-grow-1">
          <strong>${resData.name}</strong>
          <p>${resData.comment}</p>
          <small class="text-muted">${resData.time}</small>
        </div>
        <img src= ${resData.img} class="thumb">
    `;

    return of(data).pipe(delay(2000));
  }

  ngOnDestroy() {
    document.body.classList.remove('app-notification-demo');
  }
}
