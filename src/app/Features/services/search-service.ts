import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Search } from '../../appInterface/search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = '/data/technicalTopics.json';

  private http = inject(HttpClient);

  getSearchData(searchTerm: string): Observable<Search[]> {
    const term = searchTerm.toLowerCase();

    return this.http
      .get<Search[]>(this.url)
      .pipe(
        map((data) =>
          data.filter(
            (item) =>
              item.title.toLowerCase().includes(term) ||
              item.description.toLowerCase().includes(term),
          ),
        ),
      );
  }
}
