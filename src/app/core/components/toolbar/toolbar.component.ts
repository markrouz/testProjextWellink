import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MockSearchService } from '@app/core/services/mock-search.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  toolbarFormControl = new FormControl('');
  pageName: string = 'Page name';

  searchTypes = ['By page', 'By owners', 'By contracts'];
  private searchTerms = new Subject<string>();
  private searchResults$: Observable<any[]>;

  constructor(private location: Location, private searchService: MockSearchService) { }

  ngOnInit() {
    this.searchResults$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchAbstractEntity(term)),
    );
  }

  goBack(): void {
    this.location.back();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
