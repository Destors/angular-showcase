import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-search',
  imports: [AsyncPipe],
  templateUrl: './rxjs-search.html',
  styleUrl: './rxjs-search.css',
})
export class RxjsSearch {
  @ViewChild('searchInput') inputElement!: ElementRef<HTMLInputElement>;
  apiCallResult$: Subject<string> = new Subject<string>();
  searchText$!: Observable<string>;

  ngAfterViewInit() {
    this.initSearch();
    this.searchText$.subscribe((result) => {
      this.apiCallResult$.next(result);
      console.log('API Call Result:', result);
    });
  }

  private initSearch(): void {
    this.searchText$ = fromEvent(this.inputElement.nativeElement, 'input').pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchText) => this.mockApiCall(searchText)),
    );
  }

  mockApiCall(searchText: string): Observable<string> {
    // Simulate an API call with a delay
    return of(`Results for "${searchText}"`).pipe(delay(500));
  }
}
