import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSearch } from './rxjs-search';

describe('RxjsSearch', () => {
  let component: RxjsSearch;
  let fixture: ComponentFixture<RxjsSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
