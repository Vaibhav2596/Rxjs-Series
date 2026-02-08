import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility-service';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.html',
  styleUrl: './from-event.scss',
})
export class FromEvent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn!: ElementRef;
  videoCount = 1;

  designUtilityService = inject(DesignUtilityService);

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let countVal = 'Video ' + this.videoCount++;
      console.log(countVal);
      this.designUtilityService.print(countVal,'elContainer');
      this.designUtilityService.print(countVal,'elContainer2');
    });
  }


}
