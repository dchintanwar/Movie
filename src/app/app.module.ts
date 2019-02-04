import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchingMovieComponent } from './searching-movie/searching-movie.component';
import{MovieServeiceService} from './movie-serveice.service';
import { SearchByYearComponent } from './search-by-year/search-by-year.component'
@NgModule({
  declarations: [
    AppComponent,
    SearchingMovieComponent,
    SearchByYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieServeiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
