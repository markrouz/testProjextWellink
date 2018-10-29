import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockSearchService {

  private searchUrl = 'fake-search-url';

  constructor(private http: HttpClient) { }

  searchAbstractEntity(term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<any[]>(`${this.searchUrl}/?term=${term}`).pipe(
      catchError((error: any): Observable<any> => { console.log(error); return of(null); }),
    );
  }
}
