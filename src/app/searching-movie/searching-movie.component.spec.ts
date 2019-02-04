import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingMovieComponent } from './searching-movie.component';

describe('SearchingMovieComponent', () => {
  let component: SearchingMovieComponent;
  let fixture: ComponentFixture<SearchingMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
