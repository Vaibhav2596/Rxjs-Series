import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { SearchService } from '../../services/search-service';
import { Search } from '../../../appInterface/search.interface';

@Component({
  selector: 'app-switch-map2',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './switch-map2.html',
  styleUrl: './switch-map2.scss',
})
export class SwitchMap2 implements OnInit, AfterViewInit {
  @ViewChild('searchForm') searchForm!: NgForm;
  private _searchService = inject(SearchService);
  searchResults!: Search[];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;

    formValue
      ?.pipe(
        map((form) => form.searchTerm?.trim() || ''),
        filter((term: string) => term.length > 0),
        // pluck('searchTerm'),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((data) => this._searchService.getSearchData(data)),
      )
      .subscribe((res) => {
        console.log(res);
        this.searchResults = res;
      });
  }
}
