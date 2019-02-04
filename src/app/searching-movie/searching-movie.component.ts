import { Component, OnInit } from '@angular/core';
import{MovieServeiceService} from '../movie-serveice.service';

@Component({
  selector: 'app-searching-movie',
  templateUrl: './searching-movie.component.html',
  styleUrls: ['./searching-movie.component.css']
})
export class SearchingMovieComponent implements OnInit {

  movie:any[];
  details:{};
  movieTitle:string;
  year:number;

  constructor(private _ovieServeiceService:MovieServeiceService) { }

getSelecteBox(year) {
    this.year = year;  
}

  getMovieByYear(year)
  {

  };

  findMovieDetails(m)
  {
    console.log(m.imdbID);
    this._ovieServeiceService.getMovieDetails(m.imdbID).subscribe(detail=>this.details=detail)  
  }

  serachForMovie(movieTitle)
  {
    this._ovieServeiceService.getMovieWithTitle(movieTitle).then(res=>this.movie=res.Search)
  }

serchingForMovie(movieTitle,year?)
{
  year=this.year
this._ovieServeiceService.getMovieWithName(movieTitle,year).subscribe(data => {this.movie=data.Search});
}

  ngOnInit() {
    //  this._ovieServeiceService.getBatman().then(res => this.movie=res.Search);
   }


}
