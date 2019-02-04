import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieServeiceService {

  
   findMoviedetail = 'http://www.omdbapi.com/?i=IMDBID&apikey=2d2c9886';

   
  constructor(private _http:HttpClient) { 

  }

  getMovieWithName(title,year?)
  {
    alert(year)
    if (year==null)
    {
    return this._http.get<any>('http://www.omdbapi.com/?S=' +title+ '&apikey=2d2c9886');
    }
    else
    {
      return this._http.get<any>('http://www.omdbapi.com/?S=' +title+ '&y='+ year +'&apikey=2d2c9886');
    }
  };

  getMovieDetails(imdbID)
  {
    const url= this.findMoviedetail.replace('IMDBID',imdbID);
    return this._http.get<any>(url);
  };
  

  getMovieWithTitle(title)
  {
    return fetch('http://www.omdbapi.com/?S=' +title+ '&apikey=2d2c9886').then(response=>response.json());
  };
  

  getMoviesByYear(year)
  {
    return fetch('http://www.omdbapi.com/?y=' +year+ '&apikey=2d2c9886').then(response=>response.json());
  };

}
