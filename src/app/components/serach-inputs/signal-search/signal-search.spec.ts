import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSearch } from './signal-search';

describe('SignalSearch', () => {
  let component: SignalSearch;
  let fixture: ComponentFixture<SignalSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
