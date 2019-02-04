import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByYearComponent } from './search-by-year.component';

describe('SearchByYearComponent', () => {
  let component: SearchByYearComponent;
  let fixture: ComponentFixture<SearchByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
