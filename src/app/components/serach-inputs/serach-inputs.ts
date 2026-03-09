import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-serach-inputs',
  imports: [],
  templateUrl: './serach-inputs.html',
  styleUrl: './serach-inputs.css',
})
export class SerachInputs implements AfterViewInit {
  @ViewChild('searchInput') inputElement!: ElementRef<HTMLInputElement>;
  apiCallResult: string = '';

  searchText$!: Observable<string>;

  ngAfterViewInit() {
    this.initSearch();
    this.searchText$.subscribe((result) => {
      this.apiCallResult = result;
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

  onSearch(value: string) {
    console.log('Search value:', value);
    this.apiCallResult = `Results for "${value}"`;
  }
}
