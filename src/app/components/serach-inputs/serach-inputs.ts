import { Component } from '@angular/core';
import { RxjsSearch } from './rxjs-search/rxjs-search';
import { SignalSearch } from "./signal-search/signal-search";

@Component({
  selector: 'app-serach-inputs',
  imports: [RxjsSearch, SignalSearch],
  templateUrl: './serach-inputs.html',
  styleUrl: './serach-inputs.css',
})
export class SerachInputs {}
