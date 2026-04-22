import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  imports: [],
  templateUrl: './debouncetime.html',
  styleUrl: './debouncetime.scss',
})
export class Debouncetime implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput!: ElementRef;
  reqData: string = '';

  @ViewChild('myInput2') myInput2!: ElementRef;
  reqData2: string = '';

  loadingBar = inject(LoadingBarService);

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Ex - 01 debounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(500),
    );

    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;
      this.loadingBar.start();

      setTimeout(() => {
        this.reqData = '';
        this.loadingBar.stop();
      }, 1000);
    });

    // Ex - 02 DistinctUntilChanged
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
      this.loadingBar.start();

      setTimeout(() => {
        this.reqData2 = '';
        this.loadingBar.stop();
      }, 1000);
    });
  }
}
