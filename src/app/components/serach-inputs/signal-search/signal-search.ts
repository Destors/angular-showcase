import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-search',
  imports: [],
  templateUrl: './signal-search.html',
  styleUrl: './signal-search.css',
})
export class SignalSearch {
  // 1. Writable signal for the search query
  searchQuery = signal<string>('');

  // Example data (also a signal for reactivity if it changes)
  itemsList = signal<string[]>(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']);

  // 2. Computed signal for the filtered results
  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.itemsList().filter((item) => item.toLowerCase().includes(query));
  });

  // Optional: Method to update the signal imperatively
  onSearchUpdated(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery.set(inputElement.value);
  }
}
