import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SearchingMovieComponent} from './searching-movie/searching-movie.component';
import{SearchByYearComponent} from './search-by-year/search-by-year.component';

const routes: Routes = [{path:'byTitle' , component:SearchingMovieComponent},
{path:'byYear' , component:SearchByYearComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
