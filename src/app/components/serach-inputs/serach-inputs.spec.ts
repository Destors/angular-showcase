import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachInputs } from './serach-inputs';

describe('SerachInputs', () => {
  let component: SerachInputs;
  let fixture: ComponentFixture<SerachInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerachInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachInputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
